import _ from 'lodash';
import React, { Component } from 'react';
import { Modal, Segment, Divider, Button, Icon, Form, Dropdown, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';

class AddRecipe extends Component {
	state = { formData: {}, tags: [], tagsOptions: [] }
	handleSubmit = (event, { formData }) => {
		event.preventDefault();
		this.props.onAddRecipe(null, {
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
		this.refs.addRecipeModal.handleClose();
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
			tags: [...new Set(value.concat(('#' + value.pop()).replace('##', '#').replace(/ /g, '')))]
		})
	}
	handleTagsKeyDown = (event) => {
		if (event.which === 32) {
			event.preventDefault();
			// don't even try to add an empty tag
			if (event.target.value.trim() !== '') {
				this.handleTagsAddition(event, { value: event.target.value });
				this.handleTagsChange(event, { value: [...this.state.tags, event.target.value] });
			}
		}
	}
	render() {
		const { children } = this.props;
		const { tags, tagsOptions } = this.state;
		return (
			<Modal trigger={children} size="small" dimmer="inverted" ref="addRecipeModal">
				<Form onSubmit={this.handleSubmit}>
					<Segment padded attached="top">
						<Form.Field name="title" required label="Title" control={Input} type="text" placeholder="e.g. Spaghetti With Tomato And Walnut Pesto" />
						<Form.TextArea name="description" required label="Description" placeholder="e.g. Basil is a mere garnish in this nutty, cheesy, peak-season pesto sauce." rows="2" />
						<Form.Group widths="equal">
							<Form.TextArea name="ingredients" label="Ingredients" placeholder="Anything else we should know?" rows="3" />
							<Form.TextArea name="directions" label="Directions" placeholder="Anything else we should know?" rows="3" />
						</Form.Group>
						<Divider />
						<Form.Group widths="equal">
							<Form.Field name="photo" control={Input} type="text" icon="photo" iconPosition="left" placeholder="e.g. http://rcps.com/photos/577d247f.jpg" />
							<Form.Field name="video" control={Input} type="text" icon="video" iconPosition="left" placeholder="e.g. http://rcps.com/videos/4f2c1eb1.mp4" />
						</Form.Group>
						<Form.Field name="tags" control={Dropdown} type="text" icon="dropdown" placeholder="e.g. #tomatoes #bake #15min" fluid multiple search scrolling selection allowAdditions noResultsMessage="Type new #hashtag and press Enter or use Space to create tags automatically." options={tagsOptions} value={tags} onAddItem={this.handleTagsAddition} onChange={this.handleTagsChange} onKeyDown={this.handleTagsKeyDown} />
					</Segment>
					<Button.Group attached="bottom">
						<Button type="reset" color="grey" onClick={() => this.refs.addRecipeModal.handleClose()}>
							<Icon name="remove" />Cancel
						</Button>
						<Button type="submit" color="green">
							<Icon name="checkmark" />Okay
						</Button>
					</Button.Group>
				</Form>
			</Modal>
		);
	}
}
AddRecipe = connect(undefined, {
	onAddRecipe: addRecipe
})(AddRecipe);

export default AddRecipe;