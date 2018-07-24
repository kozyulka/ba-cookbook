import request from 'request-promise-native';

const DOMAIN = 'http://127.0.0.1:9000/api/recipes';

const createRecipe = (data) => {
    return request({
        method: 'POST',
        uri: `${DOMAIN}`,
        body: {
            title: data.title,
            description: data.description,
        },
        json: true,
    });
};

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
    deleteRecipe,
    getRecipes,
}
