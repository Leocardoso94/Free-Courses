import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// libs
import './../bower_components/font-awesome/css/font-awesome.min.css';

// Containers
import Container from './containers/container';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Container />
	</Provider>
	, document.getElementById('app'));
