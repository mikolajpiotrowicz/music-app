import { renderToString } from 'react-dom/server';
import React from 'react';

import {
  FORBIDDEN_ERROR_STATUS,
  FORBIDDEN_ERROR_TYPE,
  NOT_FOUND_ERROR_STATUS,
  NOT_FOUND_ERROR_TYPE,
  SERVER_ERROR_STATUS,
  WITHDRAWN_ERROR_STATUS,
  WITHDRAWN_ERROR_TYPE,
  BAD_REQUEST_ERROR_STATUS,
  BAD_REQUEST_ERROR_TYPE,
  GenericError,
} from '../exceptions';
import Error from '../../app/errors/Error';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import { Request, Response, NextFunction } from '../models/express';

export default (logger: WinstonCompatibleLoggerInterface) => {
  const isAjaxRequest = (req: Request) =>
    req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') > -1);

  const renderError = function(errorCode: number, err: Error, res: Response, req: Request) {
    res.locals.appData.statusCode = errorCode;
    res.status(errorCode);
    if (isAjaxRequest(req)) {
      res.setHeader('Content-Type', 'application/json');
      return res.send(
        JSON.stringify({
          status: errorCode,
          message: err.message,
        }),
      );
    }
    const content = renderToString(<Error errorCode={errorCode} />);
    return res.render('index', { content });
  };

  const errorHandler404 = function(req: Request, res: Response) {
    return renderError(404, {} as Error, res, req);
  };

  const LOG_TYPE_WARNING = 0;
  const LOG_TYPE_ERROR = 1;

  const errorHandlerGeneric = function(
    err: GenericError,
    req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    let statusCode;
    let logType;
    switch (err.type) {
      case NOT_FOUND_ERROR_TYPE:
        statusCode = NOT_FOUND_ERROR_STATUS;
        logType = LOG_TYPE_WARNING;
        break;
      case FORBIDDEN_ERROR_TYPE:
        statusCode = FORBIDDEN_ERROR_STATUS;
        logType = LOG_TYPE_WARNING;
        break;
      case WITHDRAWN_ERROR_TYPE:
        statusCode = WITHDRAWN_ERROR_STATUS;
        logType = LOG_TYPE_WARNING;
        break;
      case BAD_REQUEST_ERROR_TYPE:
        statusCode = BAD_REQUEST_ERROR_STATUS;
        logType = LOG_TYPE_WARNING;
        break;
      default:
        statusCode = SERVER_ERROR_STATUS;
        logType = LOG_TYPE_ERROR;
        break;
    }

    const logMessage = `Express ${
      logType === LOG_TYPE_ERROR ? 'error' : 'warning'
    }: ${statusCode} ${err.type} caught: ${err.message}. Request: ${JSON.stringify({
      isAjaxRequest: isAjaxRequest(req),
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
    })}. Stack: ${err.stack}`;

    switch (logType) {
      case LOG_TYPE_ERROR:
        logger.error(logMessage);
        break;
      case LOG_TYPE_WARNING:
        logger.warn(logMessage);
        break;
      default:
        logger.error(logMessage);
        break;
    }
    return renderError(statusCode, err, res, req);
  };

  return {
    errorHandler404,
    errorHandlerGeneric,
    renderError,
  };
};