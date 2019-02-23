
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import { createStructuredSelector } from 'reselect';
import { makeSelectUsername } from './selectors';


/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    console.log(this.props.username);
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});


const mapDispatchToProps = dispatch => ({
  handleChangeName: e => {
    dispatch(handleChangeName(e.target.value));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);