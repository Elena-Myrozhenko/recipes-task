import classnames from 'classnames';
import queryString from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router';
import { Container, Segment, Header, Grid } from 'semantic-ui-react';
import Logo from '../../components/Logo/Logo';
import Quote from '../../components/Quote/Quote';
import Nav from '../../components/Nav/Nav';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Recipe from '../Recipe';
import RecipeEdit from '../RecipeEdit';
import Wiki from '../../components/Wiki/Wiki';
import Footer from '../../components/Footer/Footer';
import { getVisibleRecipes, getIsFetching, getErrorMessage } from '../../reducers';
import { fetchRecipes, toggleFavorite, toggleCooked, filterByTag } from '../../actions';
import './App.css';

class App extends Component {
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
    const {
      recipes,
      isFetching,
      errorMessage,
      toggleFavorite,
      toggleCooked,
      filterByTag,
      match: { path, isExact },
    } = this.props;
    return (
      <div>
        <Container>
          <Segment basic vertical padded="very">
            <Segment basic vertical padded="very" textAlign="center">
              <Logo small={!(path === '/' && isExact)} />
              <Route path="/" exact component={Quote} />
            </Segment>
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <div>
                    <Nav />
                    {errorMessage ? (
                      <Header
                        as="h3"
                        textAlign="center"
                        color="grey"
                        style={{ fontWeight: 900, margin: '3em auto' }}
                      >
                        &mdash; Can't fetch recipes because of "{errorMessage}".
                        <br />
                        <a
                          style={{ cursor: 'pointer' }}
                          onClick={e => {
                            e.preventDefault();
                            this.fetchData();
                          }}
                        >
                          &mdash; Okay, retry.
                        </a>
                      </Header>
                    ) : !isFetching && !recipes.length ? (
                      <Header
                        as="h3"
                        textAlign="center"
                        color="grey"
                        style={{ fontWeight: 900, margin: '3em auto' }}
                      >
                        &mdash; Meh, empty. There are no such recipes in this collection, try
                        elsewhere.
                      </Header>
                    ) : (
                      <Segment basic vertical loading={isFetching} style={{ minHeight: '300px' }}>
                        <Grid
                          stackable
                          doubling
                          columns="3"
                          className={classnames({
                            masonry: false,
                          })}
                        >
                          {recipes.map(recipe => (
                            <Grid.Column key={recipe.id}>
                              <RecipeCard
                                {...recipe}
                                onCutleryClick={toggleCooked.bind(this, recipe.id)}
                                onStarClick={toggleFavorite.bind(this, recipe.id)}
                                onTagClick={filterByTag}
                              />
                            </Grid.Column>
                          ))}
                        </Grid>
                      </Segment>
                    )}
                  </div>
                )}
              />
              <Route path="/add" exact component={RecipeEdit} />
              <Route path="/:id" exact component={Recipe} />
              <Route path="/:id/edit" exact component={RecipeEdit} />
            </Switch>
          </Segment>
        </Container>
        <Wiki />
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state, router) => {
      const filter = queryString.parse(router.location.search).filter || 'all';
      return {
        recipes: getVisibleRecipes(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter,
      };
    },
    { fetchRecipes, toggleFavorite, toggleCooked, filterByTag }
  )(App)
);
