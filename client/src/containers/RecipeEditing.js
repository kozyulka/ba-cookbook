import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Segment, Grid } from 'semantic-ui-react';

import { openRecipes, getRecipe, editRecipe } from '../store/actions';

const mapStateToProps = state => ({
    selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openRecipes, getRecipe, editRecipe }, dispatch);
};

class RecipeEditing extends React.Component {
    static propTypes = {
        openRecipes: PropTypes.func.isRequired,
        getRecipe: PropTypes.func.isRequired,
        editRecipe: PropTypes.func.isRequired,
        selectedRecipe: PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
        }),
    }

    static defaultProps = {
        selectedRecipe: {
            _id: '',
            title: '',
            description: '',
        },
    }

    constructor() {
        super();

        this.state = {
            recipe: {
                _id: '',
                title: '',
                description: '',
            },
        }

        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }

    componentWillMount() {
        this.props.getRecipe(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedRecipe !== this.props.selectedRecipe) {
            this.setState({
                recipe: this.props.selectedRecipe,
            });
        }
    }

    save() {
        if (this.state.recipe.title.length === 0) {
            return alert('No recipe title');
        }

        if (this.state.recipe.description.length === 0) {
            return alert('No recipe description');
        }

        this.props.editRecipe({
            _id: this.state.recipe._id,
            title: this.state.recipe.title,
            description: this.state.recipe.description,
        });
    }

    delete() {
        this.props.deleteRecipe(this.props.selectedRecipe._id);
        this.props.openRecipes();
    }

    setTitle(event) {
        this.setState({
            recipe: {
                ...this.state.recipe,
                title: event.target.value,
            }
        });
    }

    setDescription(event) {
        this.setState({
            recipe: {
                ...this.state.recipe,
                description: event.target.value,
            }
        });
    }

    render() {
        return (
            <Grid centered padded>
                <Grid.Column textAlign='center' width="9">
                    <Form>
                        <Segment padded>
                            <Form.Input
                                fluid
                                label='Recipe name'
                                placeholder='Enter recipe title'
                                value={this.state.recipe.title}
                                onChange={this.setTitle}
                            />
                            <Form.TextArea
                                label='Recipe description'
                                placeholder='Enter recipe details'
                                value={this.state.recipe.description}
                                onChange={this.setDescription}
                            />
                        </Segment>

                        <Segment>
                            <Button color='red' onClick={this.props.openRecipes}>Cancel</Button>
                            <Button color='olive' onClick={this.save} floated='right'>Save changes</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditing);
