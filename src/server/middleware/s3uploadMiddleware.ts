import { Response } from '../models/express';
import { NextFunction, RequestHandler } from 'express';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import * as fs from 'fs';
import { S3 } from 'aws-sdk';
import { Config } from '../../infra/config';
import { logger } from '../services/Logger';
import { Utils } from '../services/Utils';

export type S3uploadMiddlewareOptions = {
  logger: WinstonCompatibleLoggerInterface;
  config: Config;
};
export const S3uploadMiddleware = (options: S3uploadMiddlewareOptions): RequestHandler => {
  return (req: any, res: Response, next: NextFunction) => {
    const audioFileBuffer = fs.readFileSync(req.musicObject?.data.file);
    const thumbnailFileBuffer = fs.readFileSync(req.musicObject.thumbnailVibrantPath);
    const s3 = new S3({ region: 'eu-west-1' });

    logger.info(
      `Saving on s3 thumbnail: ${Utils.removeAppPath(req.musicObject.thumbnailVibrantPath)}, req: ${req.musicObject}`,
    );

    const saveAudioFile = s3
      .putObject({
        ACL: 'public-read',
        Bucket: 'chakras-music-player/music',
        Key: `${req.musicObject?.filename}`,
        Body: audioFileBuffer,
        ContentType: 'Content-Type: audio/mpeg',
      })
      .promise();
    const saveThumbnail = s3
      .putObject({
        ACL: 'public-read',
        Bucket: 'chakras-music-player/thumbnails',
        Key: Utils.removeAppPath(req.musicObject.thumbnailVibrantPath),
        Body: thumbnailFileBuffer,
        ContentType: 'Content-Type: image/jpg',
      })
      .promise()
      .catch(e => console.log(e, 'send image error'));
    Promise.all([saveAudioFile, saveThumbnail])
      .then(values => {
        options.logger.info('success', values);
        return res.send(200, req.musicObject);
      })
      .catch(e => {
        options.logger.error(e);
        return next(new Error('S3 upload failed!'));
      });
  };
};
