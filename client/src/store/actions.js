import actionTypes from './actionTypes';

export const openRecipes = () => ({
    type: actionTypes.OPEN_RECIPES,
});

export const setRecipes = (recipes) => ({
    type: actionTypes.SET_RECIPES,
    recipes,
});

export const getRecipes = () => ({
    type: actionTypes.GET_RECIPES,
});

export const openRecipeCreate = () => ({
    type: actionTypes.OPEN_RECIPE_CREATE,
});

export const saveRecipe = (data) => ({
    type: actionTypes.SAVE_RECIPE,
    data,
});

export const selectRecipe = (recipe) => ({
    type: actionTypes.SELECT_RECIPE,
    recipe,
});

export const deleteRecipe = (id) => ({
    type: actionTypes.DELETE_RECIPE,
    id,
});
