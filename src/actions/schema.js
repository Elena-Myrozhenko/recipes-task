import { Schema, arrayOf } from 'normalizr';

export const recipe = new Schema('recipes');
export const arrayOfRecipes = arrayOf(recipe);