import startCase from "lodash/startCase";
import toLower from "lodash/toLower";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { fetchRecipe, addRecipe, deleteRecipe } from "../../actions";
import { getRecipe } from "../../reducers";
import {
  Container,
  Segment,
  Icon,
  Embed,
  Image,
  Form,
  Input,
  Dropdown,
  Menu,
  Button
} from "semantic-ui-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCamera, faVideo, faTimes, faTrashAlt, faSave } from "@fortawesome/fontawesome-pro-light";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe
    };
  }

  fetchData() {
    const { recipe: { id }, fetchRecipe } = this.props;
    fetchRecipe(id);
  }

  componentDidMount() {
    const { recipe } = this.props;
    if (recipe && Array.isArray(recipe.tags)) {
      this.setState({
        recipe: {
          ...recipe,
          tags: [...recipe.tags.map(t => "#" + t)]
        },
        tagsOptions: [...recipe.tags.map(t => ({ text: "#" + t, value: "#" + t }))]
      });
    }
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipe.id !== prevProps.recipe.id) {
      this.fetchData();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      recipe: {
        id,
        title = "",
        description = "",
        photo = "",
        video = "",
        ingredients = [],
        directions = [],
        tags = []
      }
    } = this.state;
    this.props.addRecipe(id, {
      title: startCase(toLower(title.trim())), // Switch Case To Title Case
      description: description.trim(),
      photo: photo.trim(),
      video: video.trim(),
      ingredients: ingredients.filter(Boolean),
      directions: directions.filter(Boolean),
      tags: tags.map(t => t.replace("#", "")) // store tags as plain strings without hashes
    });
  };

  handleTagsAddition = (event, { value }) => {
    value = (value.startsWith("#") ? value : "#" + value).replace(/ /g, "");
    this.setState({
      tagsOptions: [
        ...this.state.tagsOptions.filter(t => t.value !== value),
        { text: value, value }
      ]
    });
  };

  handleTagsChange = (event, { value }) => {
    const { recipe } = this.state;
    this.setState({
      recipe: {
        ...recipe,
        // always convert last item to a #hashtag, merge with the original array and deduplicate it
        tags: [...new Set(value.concat(("#" + value.pop()).replace("##", "#").replace(/ /g, "")))]
      }
    });
  };

  handleTagsKeyDown = event => {
    if (event.which === 32) {
      event.preventDefault();
      // don't even try to add an empty tag
      if (event.target.value.trim() !== "") {
        this.handleTagsAddition(event, { value: event.target.value });
        this.handleTagsChange(event, {
          value: [...this.state.recipe.tags, event.target.value]
        });
      }
    }
  };

  render() {
    const { deleteRecipe } = this.props;
    const { recipe, tagsOptions } = this.state;
    const { id, title, description, tags, photo, video, ingredients, directions } = recipe;
    return (
      <Container text>
        <Segment basic padded>
          {video ? (
            <Embed url={video} placeholder={photo} />
          ) : (
            <Image src={photo} shape="rounded" centered fluid alt={title} />
          )}
          <Segment basic vertical>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field
                name="title"
                size="huge"
                style={{ fontWeight: 900 }}
                control={Input}
                type="text"
                placeholder="e.g. Spaghetti With Tomato And Walnut Pesto"
                value={title}
                onChange={(event, { value }) =>
                  this.setState({ recipe: { ...recipe, title: value } })
                }
              />
              <Form.TextArea
                name="description"
                placeholder="e.g. Basil is a mere garnish in this nutty, cheesy, peak-season pesto sauce."
                rows="3"
                value={description}
                onChange={(event, { value }) =>
                  this.setState({ recipe: { ...recipe, description: value } })
                }
              />
              <Form.Field
                name="tags"
                control={Dropdown}
                type="text"
                icon="dropdown"
                placeholder="e.g. #tomatoes #bake #15min"
                fluid
                multiple
                search
                scrolling
                selection
                allowAdditions
                noResultsMessage="Type new #hashtag and press Enter (or use Space to automagically create tags as you type)."
                options={tagsOptions}
                value={tags}
                onAddItem={this.handleTagsAddition}
                onChange={this.handleTagsChange}
                onKeyDown={this.handleTagsKeyDown}
              />
              <Form.Group widths="equal">
                <Form.Field
                  name="photo"
                  control={Input}
                  type="text"
                  icon={
                    <Icon fitted>
                      <FontAwesomeIcon fixedWidth icon={faCamera} />
                    </Icon>
                  }
                  iconPosition="left"
                  placeholder="e.g. https://rcps.com/photos/577d247f.jpg"
                  value={photo}
                  onChange={(event, { value }) =>
                    this.setState({ recipe: { ...recipe, photo: value } })
                  }
                />
                <Form.Field
                  name="video"
                  control={Input}
                  type="text"
                  icon={
                    <Icon fitted>
                      <FontAwesomeIcon fixedWidth icon={faVideo} />
                    </Icon>
                  }
                  iconPosition="left"
                  placeholder="e.g. https://rcps.com/videos/4f2c1eb1.mp4"
                  value={video}
                  onChange={(event, { value }) =>
                    this.setState({ recipe: { ...recipe, video: value } })
                  }
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.TextArea
                  name="ingredients"
                  label="Ingredients"
                  placeholder="e.g. 3 tablespoons olive oil..."
                  rows="6"
                  value={ingredients.join("\n")}
                  onChange={(event, { value }) =>
                    this.setState({ recipe: { ...recipe, ingredients: value.split("\n") } })
                  }
                />
                <Form.TextArea
                  name="directions"
                  label="Directions"
                  placeholder="e.g. Preheat oven to 400°F..."
                  rows="6"
                  value={directions.join("\n")}
                  onChange={(event, { value }) =>
                    this.setState({ recipe: { ...recipe, directions: value.split("\n") } })
                  }
                />
              </Form.Group>
              <Menu text stackable>
                <Link to={"/" + id} className="item">
                  <Icon fitted>
                    <FontAwesomeIcon icon={faTimes} />
                  </Icon>Cancel
                </Link>
                <Link
                  to="/"
                  className="item"
                  style={{ color: "red" }}
                  onClick={deleteRecipe.bind(null, id)}
                >
                  <Icon fitted>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Icon>Delete recipe
                </Link>
                <Menu.Item position="right" className="menu">
                  <Button type="submit" basic fluid>
                    <Icon fitted>
                      <FontAwesomeIcon icon={faSave} />
                    </Icon>Save as new version
                  </Button>
                </Menu.Item>
              </Menu>
            </Form>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    (state, { match: { params: { id } } }) => ({
      recipe: getRecipe(state, id) || {
        id: null,
        title: "",
        description: "",
        photo: "",
        video: "",
        ingredients: [],
        directions: [],
        tags: []
      }
    }),
    { fetchRecipe, addRecipe, deleteRecipe }
  )(Recipe)
);
