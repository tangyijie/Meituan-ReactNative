/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,Image} from 'react-native';

import HomePage from '../../layouts/HomePage';
import MorePage from '../../layouts/MorePage';
import PersonPage from '../../layouts/PersonPage';
import ShopPage from '../../layouts/ShopPage';

class Tabs extends Component {
      constructor(props) {
        super(props);
          console.info(props);
      }
    render() {
        return(
            <View style={{height:44, borderWidth:1, borderColor:"#f4f4f4",flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <TouchableOpacity onPress={this.toHomePage.bind(this)} style={styles.TabBox}>
                    <Image source={require('./homepage.png')} style={styles.TabImage}/>
                    <Text style={styles.TabText}>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toShopPage.bind(this)} style={styles.TabBox}>
                    <Image source={require('./shop.png')} style={styles.TabImage}/>
                    <Text style={styles.TabText}>商家</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toPersonPage.bind(this)} style={styles.TabBox}>
                    <Image source={require('./person.png')} style={styles.TabImage}/>
                    <Text style={styles.TabText}>我的</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMorePage.bind(this)} style={styles.TabBox}>
                    <Image source={require('./more.png')} style={[styles.TabImage,{height:6,marginTop:10,marginBottom:10}]}/>
                    <Text style={styles.TabText}>更多</Text>
                </TouchableOpacity>
            </View>
        )
    }
    toShopPage() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.replace({
                title: '商家',
                component: ShopPage,
            })
        }
    }
    toHomePage() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.replace({
                title: '首页',
                component: HomePage,
            })
        }
    }
    toPersonPage() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.replace({
                title: '个人',
                component: PersonPage,
            })
        }
    }
    toMorePage() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.replace({
                title: '更多',
                component: MorePage,
            })
        }
    }

}

var styles = StyleSheet.create({
    TabBox:{
        flex:1,
        alignItems:'center'
    },
    TabImage:{
        height:22,
        width:22,
        margin:2
    },
    TabText:{
        flex:1,
        margin:1
    }
})

function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Tabs);