import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const MainLayout = props => {
  const { children, center } = props;
  const layoutProps = { center };
  return (
    <S.Layout>
      <S.Wrapper {...layoutProps}>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool,
};

export default MainLayout;
