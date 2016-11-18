/**
 * Created by mrd on 16/11/2.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import {connect} from 'react-redux';

import HomePage from './layouts/HomePage';
import Tabs from './components/Tabs';
import Login from './components/Login';
import NavTitle from './components/NavTitle';

import {getLocation} from './actions/user';

let initialRoute={
    title:"首页",
    component:HomePage
};

class App extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getLocation());
    }
    render() {
        return (
            <View style={{flex : 1}}>
                <Login />
                <Navigator
                    style={{flex : 1}}
                    initialRoute={initialRoute}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <View style={{flex:1}}>
                                <NavTitle route={route} navigator={navigator} />
                                <Component {...route.params} navigator={navigator} />
                            </View>
                        )
                    }}
                    navigationBar ={
                        <Tabs />
                    }
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