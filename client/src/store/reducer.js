import actionTypes from './actionTypes';

const { SET_RECIPES, SELECT_RECIPE } = actionTypes;
const initialState = {
    recipes: [],
    selectedRecipe: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: action.recipes,
            };
        case SELECT_RECIPE: {
            return {
                ...state,
                selectedRecipe: action.recipe,
            }
        }

        default: return state;
    }
};

export {
    reducer,
    initialState,
};
