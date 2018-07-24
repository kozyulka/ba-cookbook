import { push } from 'connected-react-router';
import { put, takeLatest, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { setRecipes } from './actions';
import api from '../api/api';

function* watcherSaga() {
  yield takeLatest(actionTypes.OPEN_RECIPE_CREATE, openRecipeCreate);
  yield takeLatest(actionTypes.OPEN_RECIPES, openRecipes);
  yield takeLatest(actionTypes.SAVE_RECIPE, saveRecipe);
}

function* openRecipeCreate() {
  yield put(push('/recipes/create'));
}

function* openRecipes() {
  yield put(push('/recipes'));
}

function* saveRecipe(action) {
  yield call(api.createRecipe, action.data);
  yield put(push('/recipes'));
  yield getRecipes();
}

function* getRecipes() {
  const recipes = yield call(api.getRecipes);

  yield put(setRecipes(recipes));
}

export {
  watcherSaga,
}
