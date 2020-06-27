import config, { logCurrentConfig } from './infra/config';
import createLogger from './infra/logger';
import createAndConfigureApp from './server';

const log = createLogger(module);
logCurrentConfig(log);

const { startApp } = createAndConfigureApp({
  config,
  log
});

setupProcessHooks();

startApp()
  .then(() => {
    log.info('Service is up');
  })
  .catch(err => {
    log.error('Startup error', err);
    exitProcessWithError('Startup error');
  });

function setupProcessHooks() {
  process.on('uncaughtException', err => {
    log.error('Uncaught exception', err);
    exitProcessWithError('Uncaught exception');
  });

  process.on('SIGINT', () => {
    exitProcessWithError('SIGINT received, shutting down app');
  });
}

function exitProcessWithError(errorMsg: string) {
  log.error('Shutting down app: ', errorMsg);
  process.exit(1);
}
