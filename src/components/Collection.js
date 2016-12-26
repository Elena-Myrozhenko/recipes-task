import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import Quote from './Quote';
import Nav from './Nav';
import RecipeCardsFilter from '../containers/RecipeCardsFilter';

const Collection = () => (
	<Segment basic>
		<Segment basic vertical padded="very">
			<Quote />
		</Segment>
		<Divider />
		<Nav />
		<RecipeCardsFilter />
	</Segment>
);

export default Collection;