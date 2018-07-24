import actionTypes from './actionTypes';

export const openRecipes = () => ({
    type: actionTypes.OPEN_RECIPES,
});

export const setRecipes = (recipes) => ({
    type: actionTypes.SET_RECIPES,
    recipes,
});

export const openRecipeCreate = () => ({
    type: actionTypes.OPEN_RECIPE_CREATE,
});

export const saveRecipe = (data) => ({
    type: actionTypes.SAVE_RECIPE,
    data,
});
