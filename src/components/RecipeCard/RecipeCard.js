import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Popup, Image, Icon, List, Accordion } from 'semantic-ui-react';

const RecipeCard = ({
  onStarClick,
  onCutleryClick,
  onTagClick,
  id,
  title,
  description,
  photo,
  video,
  ingredients,
  directions,
  tags,
  cooked,
  favorite,
  timestamp,
  versions,
}) => (
  <Card fluid>
    <Card.Content extra>
      <span className="left floated">
        <Popup
          trigger={
            <Icon
              name="star"
              style={{ color: favorite ? '#FFB70A' : 'inherit' }}
              onClick={onStarClick}
            />
          }
          position="top center"
          inverted
          size="tiny"
        >
          <Popup.Content>Make this recipe your favorite</Popup.Content>
        </Popup>
        <Popup
          trigger={
            <Icon
              name="spoon"
              style={{ color: cooked ? 'black' : 'inherit' }}
              onClick={onCutleryClick}
            />
          }
          position="top center"
          inverted
          size="tiny"
        >
          <Popup.Content>Mark this recipe as cooked</Popup.Content>
        </Popup>
        {video ? (
          <Popup
            trigger={
              <Link to={'/' + id}>
                <Icon name="video" />
              </Link>
            }
            position="top center"
            inverted
            size="tiny"
          >
            <Popup.Content>Wow, video in this recipe! Much amaze!</Popup.Content>
          </Popup>
        ) : null}
        {versions.length > 0 ? (
          <Popup
            trigger={<a style={{ fontWeight: '800' }}>&times;{versions.length + 1}</a>}
            position="top center"
            inverted
            size="tiny"
          >
            <Popup.Content>
              This recipe has {versions.length + 1} version{versions.length + 1 > 1 ? 's' : ''}
            </Popup.Content>
          </Popup>
        ) : null}
      </span>
      <span className="right floated">
        <Popup
          trigger={<em>{moment.unix(timestamp).fromNow()}</em>}
          position="top center"
          inverted
          size="tiny"
        >
          <Popup.Content>
            {moment.unix(timestamp).format('dddd, MMMM Do YYYY, HH:mm:ss')}
          </Popup.Content>
        </Popup>
      </span>
    </Card.Content>
    {photo ? (
      <Link to={'/' + id}>
        <Image src={photo} alt={title} fluid />
      </Link>
    ) : null}
    <Card.Content>
      <Link to={'/' + id} className="header" style={{ fontWeight: '900' }}>
        {title}
      </Link>
      <Card.Meta>
        <List horizontal link style={{ fontWeight: '700' }}>
          {tags.map((t, tx) => (
            <List.Item key={tx} onClick={onTagClick.bind(null, '#' + t)}>
              <List.Content>
                <a>#{t}</a>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    {ingredients.length > 0 || directions.length > 0 ? (
      <Card.Content>
        <Accordion
          panels={[
            {
              title: {
                content: (
                  <span>
                    <Icon name="shopping basket" />Ingredients <small>({ingredients.length})</small>
                  </span>
                ),
              },
              content: {
                content: ingredients.length > 0 && (
                  <List bulleted>
                    {ingredients.map((i, ix) => <List.Item key={ix}>{i}</List.Item>)}
                  </List>
                ),
              },
            },
            {
              title: {
                content: (
                  <span>
                    <Icon name="ordered list" />Directions <small>({directions.length})</small>
                  </span>
                ),
              },
              content: {
                content: directions.length > 0 && (
                  <List ordered>
                    {directions.map((d, dx) => <List.Item key={dx}>{d}</List.Item>)}
                  </List>
                ),
              },
            },
          ]}
        />
      </Card.Content>
    ) : null}
  </Card>
);

RecipeCard.propTypes = {
  onStarClick: PropTypes.func.isRequired,
  onCutleryClick: PropTypes.func.isRequired,
  onTagClick: PropTypes.func.isRequired,
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
  versions: PropTypes.array.isRequired,
};

export default RecipeCard;
