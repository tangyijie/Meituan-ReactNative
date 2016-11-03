/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/index';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import App from './src/index';

export default class meituan extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true,
      store: configureStore(()=>{this.setState({isLoading: false})})
    }
  }

  render() {
    return (
        <Provider store={this.state.store}>
          <App/>
        </Provider>
    );
  }
}


AppRegistry.registerComponent('meituan', () => meituan);
