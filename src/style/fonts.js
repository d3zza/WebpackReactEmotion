import React from 'react';
import { Global, css } from '@emotion/core';
import { blue, brown } from './colors';
import '../fonts/DINOT-Bold.ttf';
import '../fonts/DINOT-Bold.woff';
import '../fonts/DINOT-Bold.woff2';

export default () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto:b&display=swap');

      @font-face {
        font-family: 'DINOT';
        src: url('./DINOT-Bold.woff2') format('woff2'), url('./DINOT-Bold.woff') format('woff'),
          url('./DINOT-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
    `}
  ></Global>
);
