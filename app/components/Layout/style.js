import styled, { css } from 'styled-components';

const Content = styled.div`
  display: flex;
  width: 100%;
  color: black;
`;

const Layout = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props =>
    props.center &&
    css`
      max-width: 1440px;
    `};
`;

export { Layout, Content, Wrapper };
