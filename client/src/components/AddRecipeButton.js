import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react'

const AddRecipeButton = ({ onClick }) => (
    <div>
        <Button icon labelPosition='left' color='olive' onClick={onClick} >
            <Icon name='add' />
            Add recipe
        </Button>
    </div>
);

AddRecipeButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default AddRecipeButton;
