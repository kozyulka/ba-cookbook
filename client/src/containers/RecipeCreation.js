import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Segment, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openRecipes, saveRecipe } from '../store/actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openRecipes, saveRecipe }, dispatch)
};

class RecipeCreation extends React.Component {
    static propTypes = {
        openRecipes: PropTypes.func.isRequired,
        saveRecipe: PropTypes.func.isRequired,
    }

    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
        };

        this.saveRecipe = this.saveRecipe.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }

    saveRecipe() {
        if (this.state.title.length === 0) {
            return alert('No recipe title');
        }

        if (this.state.description.length === 0) {
            return alert('No recipe description');
        }

        this.props.saveRecipe({
            title: this.state.title,
            description: this.state.description,
        });
    }

    setTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }

    setDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    render() {
        return (
            <Grid columns={2} centered padded>
                <Grid.Column textAlign='center'>
                    <Form>
                        <Segment>
                            <Form.Input
                                fluid
                                label='Recipe name'
                                placeholder='Enter recipe title'
                                value={this.state.title}
                                onChange={this.setTitle}
                            />
                            <Form.TextArea
                                label='Recipe description'
                                placeholder='Enter recipe details'
                                value={this.state.description}
                                onChange={this.setDescription}
                            />
                        </Segment>

                        <Segment>
                            <Button color='red' onClick={this.props.openRecipes}>Cancel</Button>
                            <Button color='yellow' onClick={this.saveRecipe}>Save Recipe</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(null, mapDispatchToProps)(RecipeCreation);
