import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';
import './styles/style.css';

const app = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default app;
