/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';

import Cat from '../components/Cat';
import Headline from '../components/Headline';

class HomePage extends Component {
    // 构造
    render() {
        return (
            <View style={{flex:1}}>
                <Cat navigator={this.props.navigator}/>
                <Headline />
                <View style={{flex:1}}>
                    <Text>HomePage</Text>
                </View>
            </View>
        )
    }
    customNavigationBar() {
        return(
            <View  style={styles.title}>
                <View style={styles.titleRow}>
                    <Text style={{color:'#fff'}}>上海 </Text>
                    <Icon name="angle-down" size={16} color="#fff" type='font-awesome'/>
                </View>
                <View style={styles.titleInput}>
                    <View>
                        <Icon name="search" size={16} color="#36b9af" type='font-awesome'/>
                    </View>
                    <Text style={{color:'#aaaaaa',fontSize:12}}>  搜索商家、类品或商圈</Text>
                </View>
                <View style={styles.titleRow}>
                    <View style={styles.titleRow}>
                        <Icon name="qrcode" size={16} color="#fff" type='font-awesome'/>
                    </View>
                    <View style={styles.titleRow}>
                        <Icon name="bell" size={16} color="#fff" type='font-awesome'/>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    title:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleInput:{
        flexDirection:'row',
        height:30,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        padding:5,
        flex:3

    },
    titleRow:{
        flexDirection:'row',
        flex:1,
        justifyContent: 'center'
    },
    titleColumn:{
        flexDirection: 'column',
        flex:1
    },
    titleIcon:{
        margin:40
    }
})

function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(HomePage);