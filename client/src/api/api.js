import request from 'request-promise-native';

const DOMAIN = 'http://127.0.0.1:9000/api/recipes';

const createRecipe = (data) => {
    return request({
        method: 'POST',
        uri: `${DOMAIN}`,
        json: true,
        body: {
            title: data.title,
            description: data.description,
        },
    });
};

const getRecipe = (id) => {
    return request({
        uri: `${DOMAIN}/${id}`,
        json: true,
    });
}

const editRecipe = (recipe) => {
    return request({
        method: 'PATCH',
        uri: `${DOMAIN}/${recipe._id}`,
        json: true,
        body: {
            title: recipe.title,
            description: recipe.description,
        },
    });
}

const deleteRecipe = (id) => {
    return request({
        method: 'DELETE',
        uri: `${DOMAIN}/${id}`,
    });
};

const getRecipes = () => {
    return request({
        uri: `${DOMAIN}`,
        json: true,
    });
}

export default {
    createRecipe,
    getRecipe,
    editRecipe,
    deleteRecipe,
    getRecipes,
}
