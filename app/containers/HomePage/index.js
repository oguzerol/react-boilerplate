import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import injectReducer from 'utils/injectReducer';
import { handleChangeName } from './actions';
import reducer from './reducer';

import { createStructuredSelector } from 'reselect';
import { makeSelectUsername } from './selectors';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        <input
          type="text"
          id="username"
          type="text"
          placeholder={this.props.username}
          onChange={this.props.onChangeName}
        />

        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeName: evt => dispatch(handleChangeName(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
