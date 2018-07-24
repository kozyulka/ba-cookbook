import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button, Icon, Rating } from 'semantic-ui-react';

const RecipeItem = (props) => {
    return (
        <Item>
            <Item.Content onClick={props.onClick}>
                <Rating icon='star' defaultRating={3} maxRating={5} />
                <Item.Header>{props.title}</Item.Header>
                <Item.Description>{props.description}</Item.Description>
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
};

export default RecipeItem;
