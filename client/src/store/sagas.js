import { push } from 'connected-react-router';
import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { setRecipes } from './actions';
import api from '../api/api';

function* watcherSaga() {
  yield takeLatest(actionTypes.OPEN_RECIPE_CREATE, openRecipeCreate);
  yield takeLatest(actionTypes.DELETE_RECIPE, deleteRecipe);
  yield takeLatest(actionTypes.SAVE_RECIPE, saveRecipe);
  yield takeLatest(actionTypes.SELECT_RECIPE, selectRecipe);
  yield takeLatest(actionTypes.OPEN_RECIPES, openRecipes);
  yield takeLatest(actionTypes.GET_RECIPES, getRecipes);
}

function* openRecipeCreate() {
  yield put(push('/recipes/create'));
}

function* openRecipes() {
  yield put(push('/recipes'));
}

function* selectRecipe(action) {
  yield put(push(`/recipes/${action.recipe._id}}`));
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

function* getRecipes() {
  const recipes = yield call(api.getRecipes);

  yield put(setRecipes(recipes));
}


export {
  watcherSaga,
}
