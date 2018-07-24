import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Button, Segment, Grid, Icon, Rating } from 'semantic-ui-react';

import { deleteRecipe, openRecipes, getRecipe } from '../store/actions'

const mapStateToProps = state => ({
    selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteRecipe, openRecipes, getRecipe }, dispatch);
};

class RecipeView extends React.Component {
    static propTypes = {
        deleteRecipe: PropTypes.func.isRequired,
        openRecipes: PropTypes.func.isRequired,
        getRecipe: PropTypes.func.isRequired,
        selectedRecipe: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
        }),
    }

    static defaultProps = {
        selectedRecipe: {
            title: '',
            description: '',
        },
    }

    constructor() {
        super();

        this.delete = this.delete.bind(this);
    }

    componentWillMount() {
        this.props.getRecipe(this.props.match.params.id);
    }

    delete() {
        this.props.deleteRecipe(this.props.selectedRecipe._id);
        this.props.openRecipes();
    }

    render() {
        return (
            <div className="cookbook" >
                <Grid columns={2} centered padded>
                    <Grid.Column textAlign='center'>
                        <Segment>
                            <Button icon floated='left' onClick={() => this.props.openRecipes()}>
                                <Icon name='long arrow alternate left' />
                                <span>Back to recipes</span>
                            </Button>
                            <Button icon>
                                <Icon name='edit outline' />
                                <span> Edit </span>
                            </Button>
                            <Button icon color='red' onClick={this.delete} floated='right'>
                                <Icon name='trash alternate outline' />
                                <span> Delete</span>
                            </Button>
                        </Segment>
                        <Segment>
                            <Rating icon='star' defaultRating={3} maxRating={5} />
                            <Header as='h1' color='olive'>{this.props.selectedRecipe.title}</Header>
                        </Segment>
                        <Segment>{this.props.selectedRecipe.description}</Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);
