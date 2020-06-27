import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { ContextProvider, Props as ContextProviderProps } from '../app/AppContext';
import { routes } from './routes/routes';
import { Request, Response } from './models/express';
import { Locals } from './models/locals';

export const renderClient = (
  req: Request,
  res: Response<{ locals: Locals }>,
  initialData: ContextProviderProps['initialState'],
) => {
  res.locals.appData.initialData = initialData;

  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <ContextProvider initialState={initialData}>{renderRoutes(routes as any)}</ContextProvider>
      </StaticRouter>,
    ),
  );
  const styleTags = sheet.getStyleTags();
  res.render('index', {
    content,
    styleTags,
  });
};
