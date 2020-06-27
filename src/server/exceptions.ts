export const FORBIDDEN_ERROR_TYPE = 'ForbiddenError';
export const NOT_FOUND_ERROR_TYPE = 'NotFoundError';
export const SERVER_ERROR_TYPE = 'ServerError';
export const WITHDRAWN_ERROR_TYPE = 'WithdrawnError';
export const BAD_REQUEST_ERROR_TYPE = 'BadRequestError';

export type ErrorType =
  | typeof FORBIDDEN_ERROR_TYPE
  | typeof NOT_FOUND_ERROR_TYPE
  | typeof SERVER_ERROR_TYPE
  | typeof WITHDRAWN_ERROR_TYPE
  | typeof BAD_REQUEST_ERROR_TYPE;

export const BAD_REQUEST_ERROR_STATUS = 400;
export const FORBIDDEN_ERROR_STATUS = 403;
export const NOT_FOUND_ERROR_STATUS = 404;
export const SERVER_ERROR_STATUS = 500;
export const WITHDRAWN_ERROR_STATUS = 410;

export type ErrorStatus =
  | typeof BAD_REQUEST_ERROR_STATUS
  | typeof FORBIDDEN_ERROR_STATUS
  | typeof NOT_FOUND_ERROR_STATUS
  | typeof SERVER_ERROR_STATUS
  | typeof WITHDRAWN_ERROR_STATUS;

export type GenericError =
  | WithdrawnError
  | NotFoundError
  | ForbiddenError
  | BadRequestError
  | ServerError;
export class UserReadableError extends Error {
  readableByEndUser: boolean;
  constructor(...args: any) {
    super(...args);
    this.readableByEndUser = true;
  }
}

export class WithdrawnError extends UserReadableError {
  type: typeof WITHDRAWN_ERROR_TYPE;
  constructor(...args: any) {
    super(...args);
    this.type = WITHDRAWN_ERROR_TYPE;
  }
}

export class NotFoundError extends UserReadableError {
  type: typeof NOT_FOUND_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = NOT_FOUND_ERROR_TYPE;
  }
}

export class ForbiddenError extends UserReadableError {
  type: typeof FORBIDDEN_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = FORBIDDEN_ERROR_TYPE;
  }
}

export class BadRequestError extends UserReadableError {
  type: typeof BAD_REQUEST_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = BAD_REQUEST_ERROR_TYPE;
  }
}

export class ServerError extends UserReadableError {
  type: typeof SERVER_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = SERVER_ERROR_TYPE;
  }
}
