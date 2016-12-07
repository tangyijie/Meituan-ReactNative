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
    View,
    PermissionsAndroid
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
  componentDidMount(){
    async function requestCameraPermission() {
      try {
        PermissionsAndroid.checkPermission(PermissionsAndroid.PERMISSIONS.CAMERA).then(function (permission) {
          console.info("是否拥有相机权限"+permission);
        });
        const granted = await PermissionsAndroid.requestPermission(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: '申请摄像头权限',
              message: '一个很牛逼的应用想借用你的摄像头，' +
              '然后你就可以拍出酷炫的皂片啦。'
            }
        )
        console.info("获取权限");
        console.info(granted);
        if (granted) {
          console.log("现在你获得摄像头权限了")
        } else {
          console.log("用户并不屌你")
        }
      } catch (err) {
        console.warn(err)
      }
    }
    requestCameraPermission();
  }


}


AppRegistry.registerComponent('meituan', () => meituan);
