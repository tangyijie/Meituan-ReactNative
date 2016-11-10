/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,Image} from 'react-native';

import * as State from '../../actions/tabs';

// import HomePage from '../../layouts/HomePage';
// import MorePage from '../../layouts/MorePage';
// import PersonPage from '../../layouts/PersonPage';
// import ShopPage from '../../layouts/ShopPage';


class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TabData:props.TabData
        }
    }

    shouldComponentUpdate(props, state){
        //判断Tab状态是否改变
        if(this.props.TabState!=props.TabState){
            this.state.TabData.forEach(function (item) {
                if(props.TabState==item.TabState){
                    if(props.navigator) {
                        props.navigator.replace({
                            title: item.title,
                            component: item.Component,
                        })
                    }
                    return false;
                }
            });
            return true;
        }
        return true;
    }

    render() {
        return(
            <View style={{height:44, borderWidth:1, borderColor:"#f4f4f4",flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                {this.renderItem()}
            </View>
        )
    }

    renderItem(){
        var self = this;
        return this.props.TabData.map(function(item,i) {
            return (
                <TouchableOpacity onPress={()=>{self.toPage(item)}} style={styles.TabBox} key={i}>
                    <Image source={(self.props.TabState==item.TabState?item.imagePathOn:item.imagePathOff)} style={[styles.TabImage,item.imageStyle]}/>
                    <Text style={(self.props.TabState==item.TabState?styles.TabTextOn:styles.TabTextOff)}>{item.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    toPage(item){
        this.props.dispatch(State.goPage(item))
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
        TabState : store.tabsStore.TabState,
        TabData : store.tabsStore.TabData
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Tabs);