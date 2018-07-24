import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Button, Segment, Grid, Icon } from 'semantic-ui-react';

import { deleteRecipe, openRecipes } from '../store/actions'

const mapStateToProps = state => ({
    selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteRecipe , openRecipes}, dispatch);
};

class RecipeView extends React.Component {
    static propTypes = {
        selectedRecipe: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
        deleteRecipe: PropTypes.func.isRequired,
    }

    constructor() {
        super();

        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.deleteRecipe(this.props.selectedRecipe._id);
        this.props.openRecipes();
    }

    render() {
        return (
            <Grid columns={2} centered padded>
                <Grid.Column textAlign='center'>
                    <Segment>
                        <Button icon>
                            <Icon name='long arrow alternate left' />
                            <span>Back to recipes</span>
                        </Button>
                        <Button icon>
                            <Icon name='edit outline' />
                        </Button>
                        <Button icon color='red' onClick={this.delete}>
                            <Icon name='trash alternate outline' />
                        </Button>
                    </Segment>
                    <Segment>
                        <Header as='h1' color='yellow'>{this.props.selectedRecipe.title}</Header>
                    </Segment>
                    <Segment>{this.props.selectedRecipe.description}</Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);
