import React from 'react';
import { Container, Segment, Divider } from 'semantic-ui-react';
import Quote from './Quote';
import Nav from './Nav';
import RecipeCardsFilter from '../containers/RecipeCardsFilter';

const Collection = () => (
	<Container>
		<Segment basic>
			<Segment basic vertical padded="very">
				<Quote />
			</Segment>
			<Divider />
			<Nav />
			<RecipeCardsFilter />
		</Segment>
	</Container>
);

export default Collection;