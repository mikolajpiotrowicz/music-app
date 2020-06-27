import { Response } from '../models/express';
import { NextFunction, RequestHandler } from 'express';
import { Config } from '../../infra/config';
import { VibrantFilenameDecoratorService } from '../services/VibrantFilenameDecoratorService';
import { logger } from '../services/Logger';

export type thumbnailDownloadMiddlewareOptions = {
  config: Config;
};

export const thumbnailRenameMiddleware = (
  options: thumbnailDownloadMiddlewareOptions,
): RequestHandler => {
  return (req: any, res: Response, next: NextFunction) => {
    VibrantFilenameDecoratorService(req.musicObject.thumbnailPath, req.musicObject.thumbnailColors)
      .then(renamedThumbnailPath => {
        logger.info(`Renamed thumbnail path: ${renamedThumbnailPath}`)
        req.musicObject.thumbnailVibrantPath = renamedThumbnailPath;
        next();
      })
      .catch(err => res.status(500).send('Problems in renaming thumbnail'));
  };
};
