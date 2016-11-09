/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as user from '../actions/user';

class PersonPage extends Component {
    render() {
        return (
        <View style={{flex:1}}>
            <View style={styles.title}>

            </View>
            <TouchableOpacity onPress={this.Login.bind(this)}>
                <Text>点击登录</Text>
            </TouchableOpacity>
        </View>
        )
    }
    Login(){
        this.props.dispatch(user.showLogin());
    }
}
var styles = StyleSheet.create({
    title:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(PersonPage);