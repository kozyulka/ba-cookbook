import actionTypes from './actionTypes';

const { SET_RECIPES, SET_RECIPE } = actionTypes;
const initialState = {
    recipes: [],
    selectedRecipe: undefined,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: action.recipes,
            };

        case SET_RECIPE:
            return {
                ...state,
                selectedRecipe: action.recipe,
            };

        default: return state;
    }
};

export {
    reducer,
    initialState,
};
