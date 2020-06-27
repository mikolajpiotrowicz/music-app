import React from 'react';
import NotFoundError from './NotFoundError';
import ForbiddenError from './ForbiddenError';
import ServerError from './ServerError';

export type ErrorProps = {
  errorCode: number;
};

const Error = ({ errorCode }: ErrorProps) => {
  switch (errorCode) {
    case 403:
      return <ForbiddenError />;
    case 404:
      return <NotFoundError />;
    default:
      return <ServerError />;
  }
};

export default Error;
