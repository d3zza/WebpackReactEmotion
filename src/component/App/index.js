import { css } from '@emotion/core';

import React from 'react';
import SubComponent from '../SubComponent';
import img from './omg.jpg';
import { heading1 } from '../../style/typography';
import { shadow } from '../../style/mixins';
import { green } from '../../style/colors';
function App() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <h1
        css={css`
        ${heading1}
        color: ${green};
      `}
      >
        Hello React Application
      </h1>
      <SubComponent msg="Greetings" />
      <img
        css={css`
          ${shadow}
        `}
        src={img}
        alt=""
      />
    </div>
  );
}

export default App;
