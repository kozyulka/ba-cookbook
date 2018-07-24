import React from 'react';
import AddRecipeButton from './AddRecipeButton';
import { Image, Grid, Container, Segment } from 'semantic-ui-react';
import image from '../assests/pig_standing.png';

const EmptyRecipes = (props) => {
    return (
        <Container>
            <Segment padded='very'>
        <Grid centered padded verticalAlign='middle' >
            <Grid.Column width="6" textAlign='center'>
                <Grid.Row>
                    <div className="text-welcome">
                        Welcome! You don't have any recipes yet. Let's change that! <br/> Oink Oink :)
                    </div>
                </Grid.Row>
                <Grid.Row>
                    <AddRecipeButton onClick={props.openRecipeCreate} />
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width="8">
                <Image src={image} size='medium' />
            </Grid.Column>
        </Grid>
        </Segment>
        </Container>
    );
};

export default EmptyRecipes;
