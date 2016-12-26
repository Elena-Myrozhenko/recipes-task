import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './stores';
import App from './components/App';
import Collection from './components/Collection';
import Recipe from './containers/Recipe';
import RecipeEdit from './containers/RecipeEdit';

const history = syncHistoryWithStore(browserHistory, store);
render(
	<Provider store={store}>
		<Router history={history} render={applyRouterMiddleware(useScroll())}>
			<Route path="/recipes/" component={App}>
				<IndexRoute component={Collection} />
				<Route path="/recipes/:id" component={Recipe} />
				<Route path="/recipes/:id/edit" component={RecipeEdit} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);