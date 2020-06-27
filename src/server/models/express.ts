import { Locals } from './locals';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction,
  Router as ExpressRouter,
  RequestHandler as ExpressRequestHandler,
} from 'express-serve-static-core';
import { YtDownloaderResponse } from './ytDownloader';
import { ParsedVibrantColors } from './Vibrant';

type MusicObject = {
  filename: string;
  youtubeId: string;
  youtubeVideoQuality: 'lowest' | 'highest' | string | number;
  metadata?: any;
  data?: YtDownloaderResponse;
  thumbnailColors?: ParsedVibrantColors;
  thumbnailPath?: string;
  thumbnailVibrantPath?: string;
};

export type Request = {
  musicObject?: MusicObject;
} & ExpressRequest;

export type Response<T1 = {}> = Omit<ExpressResponse, 'locals'> &
  T1 & {
    locals: Locals;
  };

export type NextFunction = ExpressNextFunction;
export type Router = ExpressRouter;
export type RequestHandler = ExpressRequestHandler;
