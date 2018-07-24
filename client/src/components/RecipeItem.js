import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button, Icon, Rating } from 'semantic-ui-react';

const RecipeItem = (props) => {
    return (
        <Item>
            <Item.Content onClick={props.onClick}>
                <Rating
                    icon='star'
                    rating={props.recipe.rating}
                    maxRating={5}
                    onRate={props.rate}
                />
                <Item.Header>{props.recipe.title}</Item.Header>
                <Item.Description>{props.recipe.description}</Item.Description>
            </Item.Content>
            <Button.Group size="massive">
                <Button icon onClick={props.edit}>
                    <Icon name='edit outline' />
                </Button>
                <Button icon color='red' onClick={props.delete}>
                    <Icon name='trash alternate outline' />
                </Button>
            </Button.Group>
        </Item>
    );
};

RecipeItem.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    rate: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
};

export default RecipeItem;
