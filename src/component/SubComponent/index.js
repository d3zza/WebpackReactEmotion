import React from 'react';
import { css } from '@emotion/core';
import { body1 } from '../../style/typography';
import { green, blue } from '../../style/colors';
function SubComponent({ msg = 'Hello' }) {
  return (
    <p
      className={'brownMessage'}
      css={css`
        ${body1}
        color: blue;
      `}
    >
      {msg}
    </p>
  );
}

export default SubComponent;
