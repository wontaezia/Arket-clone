import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const store = createStore(rootReducer);

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  * {
  box-sizing: border-box;
  }
  a {
  text-decoration: none;
  color: inherit;
  }
  img {
    max-width: 100%;
  }
  button,
  input {
    outline: 0;
    border: 0;
    background: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
);
