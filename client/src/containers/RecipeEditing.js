import React from 'react';
import RecipeForm from '../components/RecipeForm';
import { Container } from 'semantic-ui-react'

class RecipeEditing extends React.Component {
    render() {
        return (
            <Container>
                <RecipeForm />
            </Container>
        );
    }
}

export default RecipeEditing;
