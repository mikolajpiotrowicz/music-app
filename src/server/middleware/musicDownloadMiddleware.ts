import { Response } from '../models/express';
import { NextFunction, RequestHandler } from 'express';
import { YoutubeDownloaderService } from '../services/YoutubeDownloaderService';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import { Config } from '../../infra/config';

export type musicDownloadMiddlewareOptions = {
  logger: WinstonCompatibleLoggerInterface;
  config: Config;
};

export const musicDownloadMiddleware = (
  options: musicDownloadMiddlewareOptions,
): RequestHandler => {
  return (req: any, res: Response, next: NextFunction) => {
    //todo pozbyc sie any z requesta
    const { config, logger } = options;
    const { filename, youtubeId, youtubeVideoQuality } = req.musicObject;
    const ytServiceOptions = {
      ffmpegPath: config.get('youtubeMp3Downloader.ffmpegPath'),
      outputPath: config.get('youtubeMp3Downloader.outputPath'),
      progressTimeout: config.get('youtubeMp3Downloader.progressTimeout'),
      queueParallelism: config.get('youtubeMp3Downloader.queueParallelism'),
      youtubeVideoQuality,
    };

    const ytService = new YoutubeDownloaderService(ytServiceOptions, logger);
    ytService
      .mp3Download(youtubeId, filename)
      .then(data => {
        const { musicObject } = req;
        musicObject.data = data;
        console.log(data);
        return next();
      })
      .catch(err => {
        return next(err);
      });
  };
};
