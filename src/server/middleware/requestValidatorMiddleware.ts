import { Request, Response } from '../models/express';
import { NextFunction, RequestHandler } from 'express';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import { BadRequestError } from '../exceptions';

export type requestValidatorMiddlewareOptions = {
  logger: WinstonCompatibleLoggerInterface;
};

export const requestValidatorMiddleware = (
  options: requestValidatorMiddlewareOptions,
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    options.logger.info(body);

    if (!body.youtubeId) throw new BadRequestError('No youtubeId provided!');

    req.musicObject = {
      youtubeId: body.youtubeId,
      filename: `${body.filename}.mp3` || '',
      youtubeVideoQuality: body.quality || 'highest',
    };
    options.logger.info(`Request - ${JSON.stringify(body)} valid`);
    return next();
  };
};
