import { Response } from '../models/express';
import { NextFunction, RequestHandler } from 'express';
import { saveThumbnail } from '../services/ThumbnailDownloaderService';
import { Config } from '../../infra/config';
import { getVibrantColors } from '../services/VibrantService';

export type thumbnailDownloadMiddlewareOptions = {
  config: Config;
};

export const thumbnailDownloadMiddleware = (
  options: thumbnailDownloadMiddlewareOptions,
): RequestHandler => {
  const { config } = options;

  return (req: any, res: Response, next: NextFunction) => {
    const { thumbnail } = req.musicObject.data;
    const filename = `${config.get('thumbnailDownload.outputPath')}/${req.musicObject.filename}`;
    const cleanedThumbnailUrl = thumbnail.slice(0, thumbnail.lastIndexOf('.jpg') + 4);
    saveThumbnail(cleanedThumbnailUrl, filename).then(() => {
      getVibrantColors(filename).then(colors => {
        req.musicObject.thumbnailColors = colors;
        req.musicObject.thumbnailPath = filename;
        next();
      });
    });
  };
};
