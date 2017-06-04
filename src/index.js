import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import store from './stores';
import App from './components/App';
export const history = createHistory();

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route path="/" component={App} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);