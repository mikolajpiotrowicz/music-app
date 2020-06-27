import React from 'react';
import { hydrate } from 'react-dom';
import Error from './errors/Error';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '../server/routes/routes';
import { ContextProvider } from './AppContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAsterisk, faTable } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyles } from './styles/globalStyles';

library.add(faAsterisk, faTable);

if (module.hot) {
  module.hot.accept();
}
const initialData = window.appData.initialData;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ContextProvider initialState={initialData}>{renderRoutes(routes as any)}</ContextProvider>
    </BrowserRouter>
  );
};

const status = window.appData.statusCode;

if (status !== 200) {
  hydrate(<Error errorCode={status} />, document.querySelector('#app'));
} else {
  hydrate(<AppRouter />, document.querySelector('#app'));
}
