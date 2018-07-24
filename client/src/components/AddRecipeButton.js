import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const AddRecipeButton = ({ onClick}) => (
    <div>
        <Button icon labelPosition='left' color='yellow' onClick={onClick}>
            <Icon name='add' />
            Add recipe
        </Button>
    </div>
);

export default AddRecipeButton;
