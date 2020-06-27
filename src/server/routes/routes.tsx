/* eslint-disable react/display-name */
import React from 'react';
import { AppRoot } from '../../app/components/Root';
import { MusicPlayer } from '../../app/pages/MusicPlayer';
import Error, { ErrorProps } from '../../app/errors/Error';
import { Debug } from '../../app/pages/Debug';

export const routes = [
  {
    component: AppRoot,
    routes: [
      { path: '/', exact: true, component: MusicPlayer },
      { path: '/debug', exact: true, component: Debug },
      {
        path: '/*',
        render: (props: ErrorProps) => <Error errorCode={404} {...props} />,
      },
    ],
  },
];
