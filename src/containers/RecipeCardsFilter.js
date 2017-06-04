import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import * as actions from '../actions';
import { getVisibleRecipes, getIsFetching, getErrorMessage } from '../reducers';
import { Header } from 'semantic-ui-react';
import RecipeCards from '../components/RecipeCards';

class FilterRecipeCards extends Component {
	fetchData() {
		const { filter, fetchRecipes } = this.props;
		fetchRecipes(filter);
	}
	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			this.fetchData();
		}
	}
	render() {
		const { recipes, isFetching, errorMessage, toggleFavorite, toggleCooked, filterByTag } = this.props;
		if (errorMessage && !recipes.length) {
			return <Header as="h3"
				textAlign="center" 
				color="grey"
				style={{ fontWeight: 900, margin: '3em auto' }}>
					&mdash; Can't fetch recipes because of "{errorMessage}".
					<br />
					<a style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); this.fetchData(); }}>&mdash; Retry.</a>
			</Header>;
		}
		if (!isFetching && !recipes.length) {
			return <Header as="h3"
				textAlign="center"
				color="grey"
				style={{ fontWeight: 900, margin: '3em auto' }}>
					&mdash; Meh, empty. There are no such recipes in this collection, try elsewhere.
			</Header>;
		}
		return <RecipeCards recipes={recipes} isFetching={isFetching && !recipes.length} onToggleFavorite={toggleFavorite} onToggleCooked={toggleCooked} onFilterByTag={filterByTag} />;
	}
}

FilterRecipeCards = withRouter(connect((state, router) => {
	const filter = queryString.parse(router.location.search).filter || 'all';
	return {
		recipes: getVisibleRecipes(state, filter),
		isFetching: getIsFetching(state, filter),
		errorMessage: getErrorMessage(state, filter),
		filter
	}
}, actions)(FilterRecipeCards));

export default FilterRecipeCards;