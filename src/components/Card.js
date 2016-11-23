/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput,Image,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

class Card extends Component {
    render() {
        var item = this.props.data;
        return(
            <View style={[styles.row,{backgroundColor:"#ffffff",marginTop:2,height:height/6,alignItems: 'center',overflow:'hidden'}]}>
                <Image source={require('../images/loadingPic.png')} style={{width:height/7,height:height/7,margin:10}}/>
                <View style={[styles.column,{flex:1}]}>
                    <View style={[styles.row,{justifyContent:"space-between"}]}>
                        <Text style={styles.shopName}>{item.shopName}</Text>
                        {this.renderDistance(item)}
                    </View>
                    {this.renderText(item)}
                </View>
            </View>
        )
    }
    renderText(item){
        if(item.type=="food"){
            return(
                <View style={{paddingTop:10}}>
                    <Text style={{color: "#aaaaaa"}}>[{item.zone}]{item.profiles}</Text>
                    <View style={[styles.row,{alignItems: 'center',justifyContent:"space-between"}]}>
                        <View style={[styles.row,{alignItems: 'center'}]}>
                            <Text style={{color: "#36b9af",fontSize:24}}>￥{item.price}</Text>
                            <Text style={{color: "#aaaaaa"}}> 门市价:￥{item.original}</Text>
                        </View>
                        <Text style={{marginRight:10,color: "#aaaaaa"}}>已售{item.sales}</Text>
                    </View>
                </View>
            )
        }
        if(item.type=="takeout"){
            return(
                <View style={{paddingTop:10}}>
                    <Text style={{color: "#aaaaaa"}}>{item.distance/60}分钟送达</Text>
                    <Text style={{color: "#aaaaaa"}}>起送价￥{item.startingPrice}|配送费￥{item.delivery}</Text>
                    <View style={[styles.row,{justifyContent:"space-between",marginTop:10}]}>
                        <View style={[styles.row]}>
                            {this.renderDiscount(item.discount)}
                        </View>
                        <Text style={{marginRight:10,color: "#aaaaaa"}}>月售{item.sales}</Text>
                    </View>
                </View>
            )
        }
    }
    renderDistance(item){
        if(item.type=="food"){
            return(
                <Text style={{marginRight:10,color: "#aaaaaa"}}>{item.distance}m</Text>
            )
        }
        return null;
    }
    renderDiscount(list){
        return list.map(function (item,i) {
            return (
                <Text style={{color: "#36b9af"}} key={i}>满{item.startingPrice}减{item.discount}{(i==list.length-1?"":",")}</Text>
            )
        })
    }
}

var styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    column:{
        flexDirection: 'column'
    },
    shopName:{
        fontSize:16
    }
})

function select(store) {
    return {

    }
}

export default connect(select)(Card);