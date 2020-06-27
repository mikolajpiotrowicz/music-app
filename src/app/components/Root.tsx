import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { SwitchProps } from 'react-router-dom';

interface Props {
  route: {
    routes: RouteConfig[] | undefined;
    extraProps?: any;
    switchProps?: SwitchProps;
  };
}

export const AppRoot = ({ route }: Props) => {
  return <main>{renderRoutes(route.routes)}</main>;
};
