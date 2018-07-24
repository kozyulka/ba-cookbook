import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

const RecipeForm = () => {
    return (
        <Form>
            <Segment>
                <Form.Input fluid label='Recipe name' placeholder='Enter recipe title' />
                <Form.TextArea label='Recipe description' placeholder='Enter recipe details' />
            </Segment>

            <Segment>
                <Button color='red'>Cancel</Button>
                <Button color='yellow'>Save Recipe</Button>
            </Segment>
        </Form>
    );
};

export default RecipeForm;
