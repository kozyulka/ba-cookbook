import actionTypes from './actionTypes';

const { SET_RECIPES } = actionTypes;
const initialState = {
    recipes: [
        {
            title: 'potato',
            description: 'nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.',

        },
        {
            title: 'pasta',
            description: 'carbonara',
        }

    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: action.recipes,
            };

        default: return state;
    }
};

export {
    reducer,
    initialState,
};
