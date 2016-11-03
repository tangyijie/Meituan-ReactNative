/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,Image} from 'react-native';

import * as State from '../../actions/tabs';

import HomePage from '../../layouts/HomePage';
import MorePage from '../../layouts/MorePage';
import PersonPage from '../../layouts/PersonPage';
import ShopPage from '../../layouts/ShopPage';

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    shouldComponentUpdate(props, state){
        if(this.props.TabState!=props.TabState){
            switch (props.TabState){
                case "HomePage":
                    if(props.navigator) {
                        props.navigator.replace({
                            title: '首页',
                            component: HomePage,
                        })
                    }
                    return false;
                case "MorePage":
                    if(props.navigator) {
                        props.navigator.replace({
                            title: '更多',
                            component: MorePage,
                        })
                    }
                    return false;
                case "PersonPage":
                    if(props.navigator) {
                        props.navigator.replace({
                            title: '个人',
                            component: PersonPage,
                        })
                    }
                    return false;
                case "ShopPage":
                    if(props.navigator) {
                        props.navigator.replace({
                            title: '商家',
                            component: ShopPage,
                        })
                    }
                    return false;
                default:
                    return true;
            }
        }
        return true;
    }

    render() {
        return(
            <View style={{height:44, borderWidth:1, borderColor:"#f4f4f4",flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                <TouchableOpacity onPress={this.toHomePage.bind(this)} style={styles.TabBox}>
                    <Image source={(this.props.TabState=="HomePage"?require('./homepage1.png'):require('./homepage.png'))} style={styles.TabImage}/>
                    <Text style={(this.props.TabState=="HomePage"?styles.TabTextOn:styles.TabTextOff)}>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toShopPage.bind(this)} style={styles.TabBox}>
                    <Image source={(this.props.TabState=="ShopPage"?require('./shop1.png'):require('./shop.png'))} style={styles.TabImage}/>
                    <Text style={(this.props.TabState=="ShopPage"?styles.TabTextOn:styles.TabTextOff)}>商家</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toPersonPage.bind(this)} style={styles.TabBox}>
                    <Image source={(this.props.TabState=="PersonPage"?require('./person1.png'):require('./person.png'))} style={styles.TabImage}/>
                    <Text style={(this.props.TabState=="PersonPage"?styles.TabTextOn:styles.TabTextOff)}>我的</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toMorePage.bind(this)} style={styles.TabBox}>
                    <Image source={(this.props.TabState=="MorePage"?require('./more1.png'):require('./more.png'))} style={[styles.TabImage,{height:6,marginTop:10,marginBottom:10}]}/>
                    <Text style={(this.props.TabState=="MorePage"?styles.TabTextOn:styles.TabTextOff)}>更多</Text>
                </TouchableOpacity>
            </View>
        )
    }
    toShopPage() {
        this.props.dispatch(State.goShopPage());
    }
    toHomePage() {
        this.props.dispatch(State.goHomePage());
    }
    toPersonPage() {
        this.props.dispatch(State.goPersonPage());
    }
    toMorePage() {
        this.props.dispatch(State.goMorePage());
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
    TabTextOff:{
        flex:1,
        margin:1,
    },
    TabTextOn:{
        flex:1,
        margin:1,
        color:"#36b9af",
    }
})

function select(store) {
    return {
        TabState : store.tabsStore.TabState
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Tabs);