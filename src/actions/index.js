import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';
import { browserHistory } from 'react-router';

export const fetchRecipes = (filter) => (dispatch, getState) => {
	if (getIsFetching(getState(), filter)) {
		return new Promise.resolve();
	}
	dispatch({
		type: 'FETCH_RECIPES_REQUEST',
		filter
	});
	return api.fetchRecipes(filter)
		.then(response => {
			dispatch({
				type: 'FETCH_RECIPES_SUCCESS',
				filter,
				response: normalize(response, schema.arrayOfRecipes)
			});
		}, error => {
			dispatch({
				type: 'FETCH_RECIPES_FAILURE',
				filter,
				message: error.message || 'Something went wrong'
			});
		});
}

export const fetchRecipe = (id) => (dispatch, getState) => {
	/*
	 * Resolve a Promise if recipe is already fetching
	 */
	dispatch({
		type: 'FETCH_RECIPE_REQUEST',
		id
	});
	return api.fetchRecipe(id)
		.then(response => {
			dispatch({
				type: 'FETCH_RECIPE_SUCCESS',
				id,
				response: normalize(response, schema.recipe)
			});
		}, error => {
			dispatch({
				type: 'FETCH_RECIPE_FAILURE',
				id,
				message: error.message || 'Something went wrong'
			});
		});
}

export const addRecipe = (id, recipe) => (dispatch) => {
	api.addRecipe(id, recipe).then(response => {
		dispatch({
			type: 'ADD_RECIPE_SUCCESS',
			response: normalize(response, schema.recipe)
		});
		browserHistory.goBack();
	});
}
	
export const deleteRecipe = (id) => (dispatch) =>
	api.deleteRecipe(id).then(response => {
		dispatch({
			type: 'DELETE_RECIPE_SUCCESS',
			id
		})
	});
	
export const toggleFavorite = (id) => (dispatch) =>
	api.toggleFavorite(id).then(response => {
		dispatch({
			type: 'TOGGLE_FAVORITE_SUCCESS',
			response: normalize(response, schema.recipe)
		});
	});

export const toggleCooked = (id) => (dispatch) =>
	api.toggleCooked(id).then(response => {
		dispatch({
			type: 'TOGGLE_COOKED_SUCCESS',
			response: normalize(response, schema.recipe)
		});
	});
	
export const filterByTag = (tag) => ({
	type: 'SET_FILTER_MASK',
	mask: tag
});

export const filterByMask = (event) => ({
	type: 'SET_FILTER_MASK',
	mask: event.target.value
});