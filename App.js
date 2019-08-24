import React, { Component } from 'react';
//import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

//import AppReducer from './src/reducers';
import AppNavigator from './src/AppNavigator';
//const loggerMiddleware = createLogger();

export default class App extends Component {
  // store = createStore(AppReducer,
  //   applyMiddleware(
  //     thunkMiddleware,
  //   )
  // );
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}