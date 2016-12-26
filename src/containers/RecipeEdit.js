import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../actions';
import { getRecipe } from '../reducers';
import { Segment, Icon, Embed, Image, Divider, Form, Input, Dropdown, Menu, Button } from 'semantic-ui-react';

class Recipe extends Component {
	fetchData() {
		const { id, fetchRecipe } = this.props;
		fetchRecipe(id);
	}
	componentDidMount() {
		if (this.props.recipe && Array.isArray(this.props.recipe.tags)) {
			this.setState({
				tagsNew: [...this.props.recipe.tags.map(t => '#' + t)],
				tagsOptions: [...this.props.recipe.tags.map(t => { return { text: '#' + t, value: '#' + t } })]
			})
		}
		this.fetchData();
	}
	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			this.fetchData();
		}
	}
	state = {
		formData: {},
		// tagsNew: [...this.props.recipe.tags.map(t => '#' + t)],
		// tagsOptions: [...this.props.recipe.tags.map(t => { return { text: '#' + t, value: '#' + t } })]
	}
	handleSubmit = (event, { formData }) => {
		event.preventDefault();
		const { id } = this.props;
		this.props.addRecipe(id, {
			// Switch Case To Title Case
			title: _.startCase(_.toLower(formData.title.trim())),
			description: formData.description.trim(),
			photo: formData.photo.trim(),
			video: formData.video.trim(),
			ingredients: formData.ingredients.trim().split('\n').filter(Boolean),
			directions: formData.directions.trim().split('\n').filter(Boolean),
			// store tags as plain strings without hashes
			tags: formData.tags.map(t => t.replace('#', ''))
		});
	}
	handleTagsAddition = (event, { value }) => {
		value = (value.startsWith('#') ? value : '#' + value).replace(/ /g, '');
		this.setState({
			tagsOptions: [...this.state.tagsOptions.filter(t => t.value !== value), { text: value, value }]
		});
	}
	handleTagsChange = (event, { value }) => {
		this.setState({
			// always convert last item to a #hashtag, merge with the original array and deduplicate it
			tagsNew: [...new Set(value.concat(('#' + value.pop()).replace('##', '#').replace(/ /g, '')))]
		})
	}
	handleTagsKeyDown = (event) => {
		if (event.which === 32) {
			event.preventDefault();
			// don't even try to add an empty tag
			if (event.target.value.trim() !== '') {
				this.handleTagsAddition(event, { value: event.target.value });
				this.handleTagsChange(event, { value: [...this.state.tagsNew, event.target.value] });
			}
		}
	}
	render() {
		const { id, recipe, deleteRecipe } = this.props;
		if (recipe === undefined) return null; // dirty: check for isFetching properly
		
		const { title, description, photo, video, ingredients, directions } = recipe;
		const { tagsNew, tagsOptions } = this.state;
		return (
			<Segment basic padded>
				{
					video
					?	<Embed url={video} placeholder={photo} />
					:	<Image src={photo} shape="rounded" centered fluid alt={title} />
				}
				<Segment basic vertical>
					<Form onSubmit={this.handleSubmit}>
						<Form.Field name="title" size="huge" style={{ fontWeight: 900 }} control={Input} type="text" placeholder="e.g. Spaghetti With Tomato And Walnut Pesto" defaultValue={title} />
						<Form.TextArea name="description" placeholder="e.g. Basil is a mere garnish in this nutty, cheesy, peak-season pesto sauce." rows="3" defaultValue={description} />
						<Form.Field name="tags" control={Dropdown} type="text" icon="dropdown" placeholder="e.g. #tomatoes #bake #15min" fluid multiple search scrolling selection allowAdditions noResultsMessage="Type new #hashtag and press Enter or use Space to automagically create tags as you type." options={tagsOptions} value={tagsNew} onAddItem={this.handleTagsAddition} onChange={this.handleTagsChange} onKeyDown={this.handleTagsKeyDown} />
						<Form.Group widths="equal">
							<Form.Field name="photo" control={Input} type="text" icon="photo" iconPosition="left" placeholder="e.g. http://rcps.com/photos/577d247f.jpg" defaultValue={photo} />
							<Form.Field name="video" control={Input} type="text" icon="video" iconPosition="left" placeholder="e.g. http://rcps.com/videos/4f2c1eb1.mp4" defaultValue={video} />
						</Form.Group>
						<Divider />
						<Form.Group widths="equal">
							<Form.TextArea name="ingredients" label="Ingredients" placeholder="e.g. 3 tablespoons olive oil..." rows="6" defaultValue={ingredients.join('\n')} />
							<Form.TextArea name="directions" label="Directions" placeholder="e.g. Preheat oven to 400°F..." rows="6" defaultValue={directions.join('\n\n')} />
						</Form.Group>
						<Divider />
						<Menu text stackable>
							<Link to={'/recipes/' + id} className="item">
								<Icon name="remove" />Cancel
							</Link>
							<Link to="/" className="item" style={{ color: 'red' }} onClick={deleteRecipe.bind(null, id)}>
								<Icon name="trash outline" />Delete recipe
							</Link>
							<Menu.Item position="right" className="menu">
								<Button type="submit" basic fluid>
									<Icon name="write" />Save as new version
								</Button>
							</Menu.Item>
						</Menu>
					</Form>
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