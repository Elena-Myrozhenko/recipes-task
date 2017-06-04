import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import queryString from 'query-string';
import { Container, Segment, Divider, Header, Grid } from 'semantic-ui-react';
import Quote from '../../components/Quote/Quote';
import Nav from '../../components/Nav/Nav';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipeCards.css';
import { getVisibleRecipes, getIsFetching, getErrorMessage } from '../../reducers';
import { fetchRecipes, toggleFavorite, toggleCooked, filterByTag } from '../../actions';

class RecipeCards extends Component {
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
		return (
			<Container>
				<Segment basic>
					<Segment basic vertical padded="very">
						<Quote />
					</Segment>
					<Divider />
					<Nav />
					{
						errorMessage
						?	<Header as="h3"
								textAlign="center" 
								color="grey"
								style={{ fontWeight: 900, margin: '3em auto' }}>
									&mdash; Can't fetch recipes because of "{errorMessage}".
									<br />
									<a style={{ cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); this.fetchData(); }}>&mdash; Retry.</a>
							</Header>
						:	!isFetching && !recipes.length
							?	<Header as="h3"
									textAlign="center"
									color="grey"
									style={{ fontWeight: 900, margin: '3em auto' }}>
										&mdash; Meh, empty. There are no such recipes in this collection, try elsewhere.
								</Header>
							:	<Segment basic vertical loading={isFetching} style={{ minHeight: '300px' }}>
									<Grid stackable doubling columns="3" className={
										classnames({
											'masonry': false
										})
									}>
										{
											recipes.map(recipe =>
												<Grid.Column key={recipe.id}>
													<RecipeCard
														{...recipe}
														onCutleryClick={toggleCooked.bind(this, recipe.id)}
														onStarClick={toggleFavorite.bind(this, recipe.id)}
														onTagClick={filterByTag}
													/>
												</Grid.Column>
											)
										}
									</Grid>
								</Segment>
					}
				</Segment>
			</Container>
		);
	}
}

RecipeCards = withRouter(connect((state, router) => {
	const filter = queryString.parse(router.location.search).filter || 'all';
	return {
		recipes: getVisibleRecipes(state, filter),
		isFetching: getIsFetching(state, filter),
		errorMessage: getErrorMessage(state, filter),
		filter
	}
}, { fetchRecipes, toggleFavorite, toggleCooked, filterByTag })(RecipeCards));

export default RecipeCards;