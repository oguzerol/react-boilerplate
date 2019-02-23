import React from 'react';
import { Switch } from 'react-router-dom';

import { MainLayout } from 'components/Layout/layout';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { AppRoute } from 'utils/layoutUtils';

import { HOME } from './routes';

import GlobalStyle from './global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <AppRoute exact path={HOME} layout={MainLayout} component={HomePage} />
        <AppRoute layout={MainLayout} component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
