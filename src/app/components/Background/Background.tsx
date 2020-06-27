import React, {PropsWithChildren, useCallback, useContext, useEffect, useState} from 'react';
import { BackgroundWrapper } from './styled';
import {AppContext} from '../../AppContext';

export const Background: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const appContext = useContext(AppContext);
  const { state } = appContext;
  const { vibrantColors } = state;

  return <BackgroundWrapper colors={vibrantColors}>{children}</BackgroundWrapper>;
};
