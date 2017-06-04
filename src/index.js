import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import store from './stores';
import Collection from './components/Collection';
import Recipe from './containers/Recipe';
import RecipeEdit from './containers/RecipeEdit';
import Wiki from './components/Wiki/Wiki';
import Footer from './components/Footer/Footer';
import './index.css';

export const history = createHistory();

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Switch>
					<Route path="/" exact component={Collection} />
					<Route path="/:id" exact component={Recipe} />
					<Route path="/:id/edit" exact component={RecipeEdit} />
				</Switch>
				<Wiki />
				<Footer />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);