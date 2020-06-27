import { Response } from '../models/express';
import { NextFunction, RequestHandler } from 'express';
import { Config } from '../../infra/config';
import fs from 'fs';
import { logger } from '../services/Logger';

export type musicDownloadMiddlewareOptions = {
  config: Config;
};

export const serveDebugMiddleware = (options: musicDownloadMiddlewareOptions): RequestHandler => {
  return (req: any, res: Response, next: NextFunction) => {
    fs.readFile('info.log', 'utf8', function(err, data) {
      if (err) throw err;
      logger.info('Successfully read log file')
      res.send(data);
    });
  };
};
