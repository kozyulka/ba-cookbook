import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';

const Recipe = (props) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header>{props.title}</Item.Header>
                <Item.Description>{props.description}</Item.Description>
            </Item.Content>

            <div className="buttons-container">
                <Button.Group size="massive">
                    <Button icon>
                        <Icon name='edit outline' />
                    </Button>
                    <Button icon color='red'>
                        <Icon name='trash alternate outline' />
                    </Button>
                </Button.Group>
            </div>
        </Item>
    );
};

export default Recipe;
