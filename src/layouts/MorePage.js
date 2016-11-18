/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class MorePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render() {
        return (
            <View style={{flex:1}}>
                <Text>更多</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
})
function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(MorePage);