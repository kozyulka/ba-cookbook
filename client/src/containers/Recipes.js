import React from 'react';
import { Item, Container, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/Search';
import AddRecipeButton from '../components/AddRecipeButton';
import Recipe from '../components/Recipe';
import EmptyRecipes from '../components/Recipe';

import { openRecipeCreate } from '../store/actions'

const mapStateToProps = state => ({
    recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openRecipeCreate }, dispatch)
};

class Recipes extends React.Component {
    render() {
        if (this.props.recipes.length === 0) {
            return <EmptyRecipes />;
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
                        {this.props.recipes.map((recipe, index) => (
                            <Recipe
                                title={recipe.title}
                                description={recipe.description}
                                key={index}
                            />
                        ))}
                    </Item.Group>
                </Segment>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
