import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button, Icon } from 'semantic-ui-react';

const RecipeItem = (props) => {
    return (
        <Item>
            <Item.Content onClick={props.onClick}>
                <Item.Header>{props.title}</Item.Header>
                <Item.Description>{props.description}</Item.Description>
            </Item.Content>
            <Button.Group size="massive">
                <Button icon>
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
};

export default RecipeItem;
