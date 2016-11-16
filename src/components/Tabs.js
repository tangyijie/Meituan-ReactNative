/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,Image} from 'react-native';

import * as State from '../actions/tabs';

class Tabs extends Component {

    constructor(props) {
        super(props);
        //将初始化的TAB源存入state
        this.state = {
            TabData:props.TabData
        }
    }

    shouldComponentUpdate(props, state){
        //判断Tab状态是否改变
        if(this.props.TabState!=props.TabState){
            //遍历state源,跳转分页
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
        if(this.props.navigator.state.routeStack.length<=1){
            return(
                <View style={{height:44, borderWidth:1, borderColor:"#f4f4f4",flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}}>
                    {this.renderItem()}
                </View>
            )
        }else{
            return null;
        }

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
export default connect(select)(Tabs);