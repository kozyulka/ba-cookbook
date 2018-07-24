import { push } from 'connected-react-router';
import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { setRecipes, setRecipe } from './actions';
import api from '../api/api';

function* watcherSaga() {
  yield takeLatest(actionTypes.OPEN_RECIPE_CREATE, openRecipeCreate);
  yield takeLatest(actionTypes.DELETE_RECIPE, deleteRecipe);
  yield takeLatest(actionTypes.SAVE_RECIPE, saveRecipe);
  yield takeLatest(actionTypes.OPEN_RECIPE, openRecipe);
  yield takeLatest(actionTypes.OPEN_RECIPE_EDIT, openRecipeEdit);
  yield takeLatest(actionTypes.GET_RECIPE, getRecipe);
  yield takeLatest(actionTypes.EDIT_RECIPE, editRecipe);
  yield takeLatest(actionTypes.EDIT_RECIPE_RATING, editRecipeRating);

  yield takeLatest(actionTypes.OPEN_RECIPES, openRecipes);
  yield takeLatest(actionTypes.GET_RECIPES, getRecipes);
}

function* openRecipeCreate() {
  yield put(push('/recipes/create'));
}

function* openRecipe(action) {
  yield put(push(`/recipes/${action.id}`));
}

function* openRecipeEdit(action) {
  yield put(push(`/recipes/edit/${action.id}`));
}

function* getRecipe(action) {
  const recipe = yield call(api.getRecipe, action.id);

  yield put(setRecipe(recipe));
}

function* editRecipe(action) {
  yield call(api.editRecipe, action.recipe);
  yield openRecipes();
  yield getRecipes();
}

function* editRecipeRating(action) {
  yield call(api.editRecipe, action.recipe);
  yield getRecipe({ id: action.recipe._id });
  yield getRecipes();
}

function* saveRecipe(action) {
  yield call(api.createRecipe, action.data);
  yield put(push('/recipes'));
  yield getRecipes();
}

function* deleteRecipe(action) {
  yield call(api.deleteRecipe, action.id);
  yield getRecipes();
}

function* openRecipes() {
  yield put(push('/recipes'));
}

function* getRecipes() {
  const recipes = yield call(api.getRecipes);

  yield put(setRecipes(recipes));
}


export {
  watcherSaga,
}
