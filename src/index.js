import React from 'react';
import { hydrate, render } from 'react-dom';
import { register } from './registerServiceWorker';
import Container from './containers/container';
import ContextProvider from './contexts';

// style
import './index.scss';

// libs
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './../node_modules/flag-icon-css/css/flag-icon.min.css';

register();

const rootElement = document.getElementById('app');

if (rootElement.hasChildNodes()) {
  hydrate(
    <ContextProvider>
      <Container />
    </ContextProvider>,
    rootElement,
  );
} else {
  render(
    <ContextProvider>
      <Container />
    </ContextProvider>,
    rootElement,
  );
}
