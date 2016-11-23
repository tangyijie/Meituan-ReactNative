/**
 * Created by mrd on 16/11/15.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,Dimensions,Image} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[{flexDirection:'row',height: 60},this.props.style]}>
                <View style={styles.HLTitle}>
                    <Text style={{color:"red",fontSize:20,width:55}}>上海头条</Text>
                </View>
                <Swiper height={60} horizontal={false}
                        width={width*0.8} autoplay={true}
                        showsPagination={false}
                        style={{flexDirection: 'column',width:width*0.8}}>
                    {this.renderPage()}
                </Swiper>
            </View>
        )
    }
    renderPage(){
        let pageList = [];
        for(var i = 0 ;i<this.props.headlineData.length/2;i++){
            pageList.push(
                <View style={styles.page} key={i*100}>
                    {this.renderItem(i)}
                </View>
            )
        }
        return pageList;
    }
    renderItem(page){
        let itemList = [];
        for(var i = page*2;i<page*2+2&&i<this.props.headlineData.length;i++){
            itemList.push(
                <View style={styles.item} key={i}>
                    <View style={styles.type}>
                        <Text style={{fontSize:12,color:"red"}}>{this.props.headlineData[i].type}</Text>
                    </View>
                    <Text style={styles.text} numberOfLines={1}>{this.props.headlineData[i].text}</Text>
                </View>
            )
        }
        return itemList;
    }
}

var styles = StyleSheet.create({
    HLTitle:{
        flexDirection: 'column',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height:60
    },
    page:{
        height:60,
    },
    item:{
        flexDirection:'row',
        height:30,
        alignItems: 'center',
    },
    text:{
        marginLeft:5,
        flex:1,
        width:100
    },
    type:{
        alignItems: 'center',
        justifyContent: 'center',
        width:32,
        height:18,
        borderColor:"red",
        borderWidth:1,
        borderRadius:5
    }
});

function select(store) {
    return {
        headlineData: store.headlineStore.headlineData
    }
}

export default connect(select)(Headline);