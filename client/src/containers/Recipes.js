import React from 'react';
import PropTypes from 'prop-types';
import { Item, Grid, Segment, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddRecipeButton from '../components/AddRecipeButton';
import RecipeItem from '../components/RecipeItem';
import EmptyRecipes from '../components/EmptyRecipes';

import { openRecipeCreate, openRecipe, deleteRecipe, openRecipeEdit, editRecipe } from '../store/actions'

const mapStateToProps = state => ({
    recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openRecipeCreate, openRecipe, deleteRecipe, openRecipeEdit, editRecipe }, dispatch)
};

class Recipes extends React.Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })).isRequired,
        openRecipeCreate: PropTypes.func.isRequired,
        openRecipe: PropTypes.func.isRequired,
        openRecipeEdit: PropTypes.func.isRequired,
        deleteRecipe: PropTypes.func.isRequired,
    }

    constructor() {
        super();

        this.state = {
            recipes: [],
            search: '',
        };

        this.search = this.search.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    componentDidMount() {
        this.setState({
            recipes: this.props.recipes,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.recipes !== this.props.recipes) {
            this.setState({
                recipes: this.props.recipes,
            });
        }

        if (prevState.search !== this.state.search) {
            this.filterRecipes(this.state.search, this.props.recipes);
        }
    }

    search(event) {
        this.setState({
            search: event.target.value,
        });
    }

    filterRecipes(searchString, recipes) {
        if (this.state.search.length === 0) {
            this.setState({
                recipes,
            });

            return;
        }

        const filteredRecipes = recipes.filter((recipe) => {
            if (recipe.title.includes(searchString) || recipe.description.includes(searchString)) {
                return true;
            }

            return false;
        });

        this.setState({
            recipes: filteredRecipes,
        });
    }

    changeRating(event, rating, recipe) {
        event.stopPropagation();

        this.props.editRecipe({
            ...recipe,
            rating,
        });
    }

    render() {
        if (this.props.recipes.length === 0) {
            return <EmptyRecipes openRecipeCreate={this.props.openRecipeCreate} />;
        }

        return (
            <div className="cookbook">
                <Grid centered padded>
                    <Grid.Column width="9">
                        <Segment.Group horizontal>
                            <Segment>
                                <AddRecipeButton onClick={this.props.openRecipeCreate} />
                            </Segment>
                            <Segment textAlign="right">
                                <Input
                                    icon='search'
                                    placeholder='Search...'
                                    value={this.state.search}
                                    onChange={this.search}
                                />
                            </Segment>
                        </Segment.Group>
                        <Segment>
                            <Item.Group>
                                {this.state.recipes.map(recipe => (
                                    <RecipeItem
                                        onClick={() => this.props.openRecipe(recipe._id)}
                                        delete={() => this.props.deleteRecipe(recipe._id)}
                                        edit={() => this.props.openRecipeEdit(recipe._id)}
                                        rate={(event, props) => this.changeRating(event, props.rating, recipe)}
                                        recipe={recipe}
                                        key={recipe._id}
                                    />
                                ))}
                            </Item.Group>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
