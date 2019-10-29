import React, { Fragment } from 'react';
import { render } from 'react-dom';
import GlobalStyles from './style/global';
import Fonts from './style/fonts';
import App from './component/App';

const onDOMReady = () => {
  console.log('onDOMReady');
  document.body.classList.remove('loading');
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  render(
    <Fragment>
      <GlobalStyles />
      <Fonts />
      <App />
    </Fragment>,
    document.getElementById('app')
  );
};

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  onDOMReady();
} else {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      onDOMReady();
      document.removeEventListener('DOMContentLoaded', onDOMReady, false);
    },
    false
  );
}

if (module.hot) {
  module.hot.accept();
}
