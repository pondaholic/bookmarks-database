import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Bookmarks from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Bookmarks />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
