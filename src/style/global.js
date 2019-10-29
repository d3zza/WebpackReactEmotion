import React from 'react';
import { Global, css } from '@emotion/core';
import { blue, brown } from './colors';

export default () => (
  <Global
    styles={css`
      h1 {
        color: ${blue};
      }

      .brownMessage {
        color: ${brown};
      }
    `}
  ></Global>
);
