import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../actions';
import { getRecipe } from '../reducers';
import { Segment, Menu, Popup, Icon, Embed, Image, Header, List, Divider, Grid } from 'semantic-ui-react';

class Recipe extends Component {
	fetchData() {
		const { id, fetchRecipe } = this.props;
		fetchRecipe(id);
	}
	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.fetchData();
		}
	}
	render() {
		const { id, recipe, toggleFavorite, toggleCooked } = this.props;
		if (recipe === undefined) return null; // dirty: check for isFetching properly

		const { title, description, photo, video, ingredients, directions, tags, cooked, favorite, timestamp, versions } = recipe;
		return (
			<Segment basic padded>
				{
					video
					?	<Embed url={video} placeholder={photo} />
					:	<Image src={photo} shape="rounded" centered fluid alt={title} />
				}
				<Segment basic vertical>
					<Header textAlign="center" size="large" style={{ fontWeight: 900 }}>
						{title}
						<Header.Subheader>
							{description}
						</Header.Subheader>
					</Header>
					<List horizontal link style={{ fontWeight: '700' }}>
						{
							tags.map((t, tx) => (<List.Item key={tx}><List.Content>#{t}</List.Content></List.Item>))
						}	
					</List>
					<Divider />
					<Grid stackable doubling columns="2">
						<Grid.Column>
							<Header as="h4">Ingredients</Header>
							{
								ingredients.length > 0
								?	<List bulleted>
										{
											ingredients.map((i, ix) => (<List.Item key={ix}>{i}</List.Item>))
										}
									</List>
								:	null
							}
						</Grid.Column>
						<Grid.Column>
							<Header as="h4">Directions</Header>
							{
								directions.length > 0
								?	<List ordered>
										{
											directions.map((d, dx) => (<List.Item key={dx}>{d}</List.Item>))
										}
									</List>
								:	null
							}
						</Grid.Column>
					</Grid>
					<Divider />
					<Menu text>
						<Menu.Item>
							<Popup trigger={
								<a style={{ color: favorite ? '#FFB70A' : 'grey' }} onClick={() => toggleFavorite(id)}>
									<Icon name="star" />
								</a>
							} positioning="top center" inverted size="tiny">
								<Popup.Content>
									Make this recipe your favorite
								</Popup.Content>
							</Popup>
						</Menu.Item>
						<Menu.Item>
							<Popup trigger={
								<a style={{ color: cooked ? 'black' : 'grey' }} onClick={() => toggleCooked(id)}>
									<Icon name="spoon" />
								</a>
							} positioning="top center" inverted size="tiny">
								<Popup.Content>
									Mark this recipe as cooked
								</Popup.Content>
							</Popup>
						</Menu.Item>
						{
							versions.length > 0
							?	<Menu.Item>
									<Popup trigger={
										<a className="left floated" style={{ fontWeight: '800' }}>
											&times;{versions.length + 1}
										</a>
									} positioning="top center" inverted size="tiny">
										<Popup.Content>
											This recipe has {versions.length + 1} version{versions.length + 1 > 1 ? 's' : ''}
										</Popup.Content>
									</Popup>
								</Menu.Item>
							:	null
						}
						<Menu.Item>
							<em>{moment.unix(timestamp).fromNow()}</em>
						</Menu.Item>
						<Menu.Menu className="right">
							<Link to="/" className="item">
								<Icon name="home" />Home
							</Link>
							<Link to={id + '/edit'} className="item">
								<Icon name="write" />Edit
							</Link>
						</Menu.Menu>
					</Menu>
				</Segment>
			</Segment>
		);
	}
}

Recipe = withRouter(connect((state, { params }) => {
	const { id } = params;
	return {
		recipe: getRecipe(state, id),
		id
	}
}, actions)(Recipe));

export default Recipe;