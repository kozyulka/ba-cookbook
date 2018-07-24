import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from "redux-saga";

import Recipes from './containers/Recipes';
import RecipeCreation from './containers/RecipeCreation';
import RecipeView from './containers/RecipeView';
import RecipeEditing from './containers/RecipeEditing';
import { reducer, initialState } from './store/reducer';
import { watcherSaga } from './store/sagas';
import Main from './containers/Main';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  compose(
    applyMiddleware(...middlewares),
    reduxDevTools,
  ),
);

sagaMiddleware.run(watcherSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path='/' render={() => <Redirect to='recipes' />} exact />
              <Route path='/recipes/create' component={RecipeCreation} exact />
              <Route path='/recipes/edit/:id' component={RecipeEditing} />
              <Route path='/recipes/:id' component={RecipeView} />
              <Route path='/recipes' component={Recipes} exact />
            </Switch>
          </ConnectedRouter>
        </Main>
      </Provider>
    );
  }
}

export default App;
