/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput , Dimensions,Image} from 'react-native';

const { width, height } = Dimensions.get('window');

const RecommendList = [];

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
        for(var i = 0; i<6; i++){
            obj.push(
                <View style={styles.card} key={i}>
                    <Text style={styles.title}>人气外卖</Text>
                    <Text style={styles.description}>会员免单福利</Text>
                    <Image style={styles.image} source={require("../images/loadingPic.png")}/>
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