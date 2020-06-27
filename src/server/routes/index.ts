import express from 'express';
import createClientRouter from './client';
import createApiRouter from './api';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import { Config } from '../../infra/config';
export default createRouter;

export interface AppRouter {
  log: WinstonCompatibleLoggerInterface;
  config: Config;
}

function createRouter({ config, log }: AppRouter) {
  const router = express.Router();

  router.use(
    '/',
    createClientRouter({
      config,
      log,
    }),
  );

  router.use(
    '/api',
    createApiRouter({
      config,
      log,
    }),
  );

  return router;
}
