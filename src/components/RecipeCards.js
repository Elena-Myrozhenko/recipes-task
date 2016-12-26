import React, { PropTypes } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import classnames from 'classnames';
import RecipeCard from './RecipeCard';
import './RecipeCards.css';

const RecipeCards = ({ recipes, isFetching, onToggleCooked, onToggleFavorite, onFilterByTag }) => (
	<Segment basic vertical loading={isFetching} style={{ minHeight: '300px' }}>
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
							onCutleryClick={() => onToggleCooked(recipe.id)}
							onStarClick={() => onToggleFavorite(recipe.id)}
							onTagClick={onFilterByTag}
						/>
					</Grid.Column>
				)
			}
		</Grid>
	</Segment>
);

RecipeCards.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		photo: PropTypes.string,
		video: PropTypes.string,
		ingredients: PropTypes.array.isRequired,
		directions: PropTypes.array.isRequired,
		tags: PropTypes.array.isRequired,
		cooked: PropTypes.bool.isRequired,
		favorite: PropTypes.bool.isRequired,
		timestamp: PropTypes.number.isRequired,
		versions: PropTypes.array.isRequired
	}).isRequired).isRequired,
	onToggleCooked: PropTypes.func.isRequired,
	onToggleFavorite: PropTypes.func.isRequired,
	onFilterByTag: PropTypes.func.isRequired
}

export default RecipeCards;