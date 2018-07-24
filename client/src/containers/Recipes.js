import React from 'react';
import PropTypes from 'prop-types';
import { Item, Container, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/Search';
import AddRecipeButton from '../components/AddRecipeButton';
import RecipeItem from '../components/RecipeItem';
import EmptyRecipes from '../components/EmptyRecipes';

import { openRecipeCreate, selectRecipe, deleteRecipe } from '../store/actions'

const mapStateToProps = state => ({
    recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openRecipeCreate, selectRecipe, deleteRecipe }, dispatch)
};

class Recipes extends React.Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
        openRecipeCreate: PropTypes.func.isRequired,
        selectRecipe: PropTypes.func.isRequired,
        deleteRecipe: PropTypes.func.isRequired,
    }

    render() {
        if (this.props.recipes.length === 0) {
            return <EmptyRecipes openRecipeCreate={this.props.openRecipeCreate} />;
        }

        return (
            <Container>
                <Segment.Group horizontal>
                    <Segment>
                        <AddRecipeButton onClick={this.props.openRecipeCreate} />
                    </Segment>
                    <Segment textAlign="right">
                        <Search />
                    </Segment>
                </Segment.Group>
                <Segment>
                    <Item.Group>
                        {this.props.recipes.map(recipe => (
                            <RecipeItem
                                onClick={() => this.props.selectRecipe(recipe)}
                                delete={() => this.props.deleteRecipe(recipe._id)}
                                title={recipe.title}
                                description={recipe.description}
                                key={recipe._id}
                            />
                        ))}
                    </Item.Group>
                </Segment>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
