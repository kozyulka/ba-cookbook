import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRecipes } from '../store/actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getRecipes }, dispatch)
};

class Main extends Component {
    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        return <Fragment>{this.props.children}</Fragment>
    }
}

export default connect(null, mapDispatchToProps)(Main);
