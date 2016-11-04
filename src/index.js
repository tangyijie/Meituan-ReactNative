/**
 * Created by mrd on 16/11/2.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import {connect} from 'react-redux';
import HomePage from './layouts/HomePage';
import Tabs from './components/Tabs/Tabs';
import Login from './components/Login';

let initialRoute={
    title:"首页",
    component:HomePage
};

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex : 1}}>
                <Login />
                <Navigator
                    style={{flex : 1}}
                    initialRoute={initialRoute}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump; 			//页面切换动画效果
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                    navigationBar ={
                        <Tabs />
                    }
                    sceneStyle={{paddingTop: (Platform.OS === 'android' ? 0 : 16)}}
                />
            </View>
        )
    }
}

function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);