"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var express_1 = tslib_1.__importDefault(require("express"));
var morgan_1 = tslib_1.__importDefault(require("morgan"));
var chokidar_1 = tslib_1.__importDefault(require("chokidar"));
var webpack_1 = tslib_1.__importDefault(require("webpack"));
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var webpack_dev_middleware_1 = tslib_1.__importDefault(require("webpack-dev-middleware"));
var webpack_hot_middleware_1 = tslib_1.__importDefault(require("webpack-hot-middleware"));
var errorHandlers_1 = tslib_1.__importDefault(require("./middleware/errorHandlers"));
var routes_1 = tslib_1.__importDefault(require("./routes"));
var app_root_path_1 = tslib_1.__importDefault(require("app-root-path"));
var express_handlebars_1 = tslib_1.__importDefault(require("express-handlebars"));
var webpackConfig = require('../../webpack.config');
var webpackConfigWithMode = Object.assign({ mode: 'development' }, webpackConfig);
var compiler = webpack_1.default(webpackConfigWithMode);
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var dotenv_1 = tslib_1.__importDefault(require("dotenv"));
var Logger_1 = require("./services/Logger");
dotenv_1.default.config();
exports.default = createAndConfigureApp;
function createAndConfigureApp(_a) {
    var config = _a.config, log = _a.log;
    var setupErrorHandler = function (app) {
        var errorHandlers = errorHandlers_1.default(log);
        app.use(errorHandlers.errorHandler404.bind(errorHandlers));
        app.use(errorHandlers.errorHandlerGeneric.bind(errorHandlers));
    };
    var registerHotLoadingMiddleware = function (app) {
        app.use(webpack_dev_middleware_1.default(compiler, {
            publicPath: webpackConfig.output.publicPath,
        }));
        app.use(webpack_hot_middleware_1.default(compiler));
    };
    var registerRouter = function (app) {
        var router = routes_1.default({
            config: config,
            log: log,
        });
        app.use('/', router);
    };
    var registerRouterAsWatchableMiddleware = function (app) {
        app.use(function (req, res, next) {
            var createRouter = require('./routes').default;
            createRouter({
                config: config,
                log: log,
            })(req, res, next);
        });
    };
    var watchServerForChanges = function () {
        var fileWatcher = chokidar_1.default.watch('src/server');
        fileWatcher.on('ready', function () {
            fileWatcher.on('all', function () {
                console.log('clearing module cache from server and services');
                Object.keys(require.cache).forEach(function (id) {
                    if (/[/\\]src\/server[/\\]/.test(id)) {
                        delete require.cache[id];
                    }
                });
            });
        });
    };
    var registerRoutes = function (app) {
        if (process.env.WATCH_MODE === 'true') {
            registerHotLoadingMiddleware(app);
            registerRouterAsWatchableMiddleware(app);
            watchServerForChanges();
        }
        else {
            registerRouter(app);
        }
    };
    var setupBodyParser = function (app) {
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    var setupHBS = function (app) {
        var hbs = express_handlebars_1.default.create({
            extname: '.hbs',
            partialsDir: app_root_path_1.default + "/src/views/layouts/partials",
            helpers: {
                json: function (obj) {
                    if (!obj)
                        return null;
                    return JSON.stringify(obj);
                },
                link: function (string) {
                    return encodeURIComponent(string);
                },
            },
        });
        app.engine('hbs', hbs.engine);
        app.set('view engine', 'hbs');
        app.set('views', app_root_path_1.default + "/src/views");
    };
    var setupAssetsUrl = function (app) {
        app.use('/public', express_1.default.static(path_1.default.resolve(webpackConfig.output.path)));
        app.locals.assetsUrl = '/public/';
    };
    var addFontAwesome = function () {
        app.locals.fontAwesome = fontawesome_svg_core_1.dom.css();
    };
    var setAccessLogs = function (app) {
        var format = ':req[X-Forwarded-For] :method :url HTTP/:http-version :status :res[content-length] - :response-time[1] ms - :user-agent';
        app.use(morgan_1.default(format, {
            skip: function (req) { return req.url.toLowerCase().includes('/healthcheck'); },
        }));
    };
    var noCache = function (_req, res, next) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next();
    };
    var setDefaultLocals = function (app) {
        log.debug('Setting default res.locals values');
        app.use(function (_req, res, next) {
            res.locals.appData = {
                initialData: {
                    name: '',
                },
                statusCode: 200,
            };
            next();
        });
    };
    var app = express_1.default();
    function startApp() {
        return new Promise(function (resolve, reject) {
            try {
                var server_1 = app.listen(config.get('port'), function () {
                    Logger_1.logger.info("Started on port " + server_1.address().port);
                    return resolve();
                });
                server_1.once('error', function (err) {
                    return reject(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    app.use(noCache);
    setAccessLogs(app);
    setupAssetsUrl(app);
    setupHBS(app);
    setDefaultLocals(app);
    setupBodyParser(app);
    registerRoutes(app);
    setupErrorHandler(app);
    addFontAwesome();
    return { app: app, startApp: startApp };
}
