/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput , Dimensions,Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const RecommendList = [
    {
        title:"火爆小吃",detail:"10元超值享",detailColor:"#fdbd5d",pic:require('../images/Recommend/IMG_1659_03.png')
    },
    {
        title:"年末约饭",detail:"折扣大桌餐",detailColor:"#fd7622",pic:require('../images/Recommend/IMG_1659_05.png')
    },
    {
        title:"天天满减",detail:"每天有新优惠",detailColor:"#fc5e56",pic:require('../images/Recommend/IMG_1659_07.png')
    },
    {
        title:"本周佳片",detail:"14.9元起",detailColor:"#fd73ba",pic:require('../images/Recommend/IMG_1659_18.png')
    },
    {
        title:"一元巴厘岛",detail:"年末出国特卖",detailColor:"#91d64e",pic:require('../images/Recommend/IMG_1659_13.png')
    },
    {
        title:"变美不贵",detail:"美发五折抢",detailColor:"#3cc9ea",pic:require('../images/Recommend/IMG_1659_15.png')
    }
];

class Recommend extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return(
                <View style={[styles.row,this.props.style]}>
                    {this.renderItem()}
                </View>
            )
    }

    renderItem() {
        let obj =[];
        for(var i = 0; i < RecommendList.length; i++){
            obj.push(
                <View style={styles.card} key={i}>
                    <Text style={styles.title}>{RecommendList[i].title}</Text>
                    <Text style={[styles.description,{color:RecommendList[i].detailColor}]}>{RecommendList[i].detail}</Text>
                    <Image style={styles.image} source={RecommendList[i].pic}/>
                </View>
            );
        }
        return obj;
    }

}

var styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    card:{
        width: width/3-2,
        flexDirection: 'column',
        height:width/3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffffff',
        margin:1,
    },
    title:{
        fontSize:width/20,
        fontWeight:"bold"
    },
    description:{
        fontSize:width/26,
        margin:width/36,
    },
    image:{
        width:width/6,
        height:width/6
    }
})

function select(store) {
    return {

    }
}

export default connect(select)(Recommend);