import { Request, NextFunction, Response } from './models/express';
import { Config } from './../infra/config';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import chokidar from 'chokidar';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import createErrorHandlers from './middleware/errorHandlers';
import createRouter from './routes';
import appRootPath from 'app-root-path';
import expressHandlebars from 'express-handlebars';
import { AddressInfo } from 'net';
import { WinstonCompatibleLoggerInterface } from '../infra/logger';
const webpackConfig = require('../../webpack.config');
const webpackConfigWithMode = Object.assign({ mode: 'development' }, webpackConfig);
const compiler = webpack(webpackConfigWithMode as webpack.Configuration);
import { dom } from '@fortawesome/fontawesome-svg-core';
import dotenv from 'dotenv';
import { logger } from './services/Logger';
dotenv.config();

interface CreateAndConfigureApp {
  config: Config;
  log: WinstonCompatibleLoggerInterface;
}

export default createAndConfigureApp;
function createAndConfigureApp({ config, log }: CreateAndConfigureApp) {
  const setupErrorHandler = (app: any) => {
    const errorHandlers = createErrorHandlers(log);
    app.use(errorHandlers.errorHandler404.bind(errorHandlers));
    app.use(errorHandlers.errorHandlerGeneric.bind(errorHandlers));
  };
  const registerHotLoadingMiddleware = (app: any) => {
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
      }),
    );

    app.use(webpackHotMiddleware(compiler));
  };
  const registerRouter = (app: express.Application) => {
    const router = createRouter({
      config,
      log,
    });
    app.use('/', router);
  };
  const registerRouterAsWatchableMiddleware = (app: express.Application) => {
    app.use((req, res, next) => {
      const createRouter = require('./routes').default;
      createRouter({
        config,
        log,
      })(req, res, next);
    });
  };
  const watchServerForChanges = () => {
    const fileWatcher = chokidar.watch('src/server');
    fileWatcher.on('ready', () => {
      fileWatcher.on('all', () => {
        console.log('clearing module cache from server and services');
        Object.keys(require.cache).forEach(id => {
          if (/[/\\]src\/server[/\\]/.test(id)) {
            delete require.cache[id];
          }
        });
      });
    });
  };
  const registerRoutes = (app: express.Application) => {
    if (process.env.WATCH_MODE === 'true') {
      registerHotLoadingMiddleware(app);
      registerRouterAsWatchableMiddleware(app);
      watchServerForChanges();
    } else {
      registerRouter(app);
    }
  };
  const setupBodyParser = (app: any) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  };
  const setupHBS = (app: express.Application) => {
    const hbs = expressHandlebars.create({
      extname: '.hbs',
      partialsDir: `${appRootPath}/src/views/layouts/partials`,
      helpers: {
        json(obj: {}) {
          if (!obj) return null;
          return JSON.stringify(obj);
        },
        link(string: string) {
          return encodeURIComponent(string);
        },
      },
    });
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.set('views', `${appRootPath}/src/views`);
  };

  const setupAssetsUrl = (app: express.Application) => {
    app.use('/public', express.static(path.resolve(webpackConfig.output.path)));
    app.locals.assetsUrl = '/public/';
  };

  const addFontAwesome = () => {
    app.locals.fontAwesome = dom.css();
  };

  const setAccessLogs = (app: any) => {
    const format =
      ':req[X-Forwarded-For] :method :url HTTP/:http-version :status :res[content-length] - :response-time[1] ms - :user-agent';
    app.use(
      morgan(format, {
        skip: (req: Request) => req.url.toLowerCase().includes('/healthcheck'),
      }),
    );
  };
  const noCache = (_req: Request, res: Response, next: NextFunction) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
  };
  const setDefaultLocals = (app: any) => {
    log.debug('Setting default res.locals values');
    app.use((_req: Request, res: Response, next: NextFunction) => {
      res.locals.appData = {
        initialData: {
          name: '',
        },
        statusCode: 200,
      };
      next();
    });
  };
  const app = express();
  function startApp() {
    return new Promise((resolve, reject) => {
      try {
        const server = app.listen(config.get('port'), () => {
          logger.info(`Started on port ${(server.address() as AddressInfo).port}`);
          return resolve();
        });
        server.once('error', err => {
          return reject(err);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  (app.use as any)(noCache);
  setAccessLogs(app);
  setupAssetsUrl(app);
  setupHBS(app);
  setDefaultLocals(app);
  setupBodyParser(app);
  registerRoutes(app);
  setupErrorHandler(app);
  addFontAwesome();
  return { app, startApp };
}
