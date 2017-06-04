import React from 'react';
import { Route } from 'react-router';
import Collection from './Collection';
import Recipe from '../containers/Recipe';
import RecipeEdit from '../containers/RecipeEdit';
import Wiki from './Wiki';
import Footer from './Footer';
import './App.css';

const App = () => (
	<div>
		<Route path="/" exact component={Collection} />
		<Route path="/:id" exact component={Recipe} />
		<Route path="/:id/edit" exact component={RecipeEdit} />
		<Wiki />
		<Footer />
	</div>
);

export default App;