/**
 * Created by mrd on 16/11/9.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,Dimensions,Image} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');
import {goPage} from '../actions/cats'

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {catData:props.catData};
    }
    shouldComponentUpdate(props, state){
        if(props.catState==""){
            return false
        }
        //判断Tab状态是否改变
        if(this.props.catState!=props.catState){
            //遍历state源,跳转分页
            this.state.catData.forEach(function (item) {
                if(props.catState==item.name){
                    if(props.navigator) {
                        props.navigator.push({
                            title: item.name,
                            component: item.component,
                        });
                        return false;
                    }
                    return false;
                }
            });
            return false;
        }
        return false;
    }
    render() {
        return (
            <Swiper height={180} paginationStyle={{bottom:5}} style={this.props.style}>
                {this.renderView()}
            </Swiper>
        )
    }
    renderView() {
        let body = [];
            for(var i = 0; i<this.state.catData.length/10;i++){
                body.push(
                    <View style={styles.slide} key={i*100}>
                        {this.renderItem(i)}
                    </View>
                )
            };
        return body;
    }
    renderItem(page) {
        let body = [];
        for(var i = page*10; i<page*10+10&&i<this.state.catData.length; i++){
            body.push(
                <TouchableOpacity style={styles.item} key={i} onPress={this.goCat} index={this.state.catData[i]} self={this}>
                    <View style={styles.item} >
                        <Image style={styles.image} source={this.state.catData[i].pic}/>
                        <Text style={styles.text}>{this.state.catData[i].name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return body;
    }
    goCat(){
        this.self.props.dispatch(goPage(this.index))
    }
}

var styles = StyleSheet.create({
    slide: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height:80
    },
    item: {
        width:width/5,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width:width/10,
        height:width/10
    },
    text:{
        fontSize:12,
        paddingTop:5
    }
});

function select(store) {
    return {
        catData : store.catsStore.catData,
        catState : store.catsStore.catState
    }
}

export default connect(select)(Cat);