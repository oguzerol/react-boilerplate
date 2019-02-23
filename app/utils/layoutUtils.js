import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';

import { HOME } from 'containers/App/routes';

export const AppRoute = ({
  component: Component,
  layout: Layout,
  privateRoute,
  layoutStyle,
  ...rest
}) => {
  const renderLayout = props => (
    <Layout {...layoutStyle}>
      <Component {...props} />
    </Layout>
  );
  const renderRedirect = (props, path) => (
    <Redirect
      to={{
        pathname: path,
        state: { from: props.location },
      }}
    />
  );
  const Redirection = (isAuth = true, props) =>
    isAuth ? renderLayout(props) : renderRedirect(props, HOME);
  return (
    <Route
      {...rest}
      render={props =>
        privateRoute ? Redirection(props) : renderLayout(props)
      }
    />
  );
};

AppRoute.propTypes = {
  location: PropTypes.object,
};
