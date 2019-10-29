import React from 'react';
import { body1 } from '../../style/typography';

function SubComponent({ msg = 'Hello' }) {
  return (
    <p className={'brownMessage'} css={body1}>
      {msg}
    </p>
  );
}

export default SubComponent;
