import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import register from './registerServiceWorker';
import reducers from './reducers';

// style
import './index.scss';

// libs
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './../node_modules/flag-icon-css/css/flag-icon.min.css';

import Container from './containers/container';


register();

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Container />
  </Provider>
  , document.getElementById('app')
);
