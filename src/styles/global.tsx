import { createGlobalStyle } from 'styled-components';

import runescapePlain from '../fonts/RuneScape-Plain-12.ttf';
import runescapeBold from '../fonts/RuneScape-Bold-12.ttf';

export default createGlobalStyle`
  @font-face {
      font-family: 'Runescape';
      src: local('Runescape'), url(${runescapePlain}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: 'Runescape';
    src: local('Runescape'), url(${runescapeBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%
  }

  body {
    background-color: #292929;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
  
`;
