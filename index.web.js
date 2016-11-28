/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import 'babel-polyfill';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/index';
require('./web/custom_node_modules/react-native-vector-icons/css/stylesheet.css');
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform
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
    // return (
    //     <View>
    //       <Text>22333</Text>
    //     </View>
    // )
  }
}

AppRegistry.registerComponent('meituan', () => meituan);

var app = document.createElement('div');
app.setAttribute('id','meituan');
document.body.appendChild(app);

AppRegistry.runApplication('meituan', {
  rootTag: app
});