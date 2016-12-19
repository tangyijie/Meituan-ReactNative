/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,Dimensions,ListView} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';

import Indicator from '../components/Indicator';
import MultiSelect from '../components/MultiSelect';
import Card from '../components/Card';

const { width, height } = Dimensions.get('window');

import {style} from '../contants/styles';

var selectData = {
    firstData:["全部分类","甜点饮品","生日蛋糕","火锅","自助餐","小吃快餐","日本料理","韩国料理","西餐"],
    secData:["全城","浦东新区","徐汇区","长宁区"],
    thData:["智能排序","离我最近","好评优先","人气最高"]}

class ShopPage extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#efefef"}}>
                <ListView
                    dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.props.listData)}
                    renderRow={this.listItem}
                />
            </View>
        )
    }
    //该页面自定义的顶部导航
    customNavigationBar(page) {
        return (
            <View style={[style.NavTitle,{justifyContent: 'center',backgroundColor:'#ffffff',height:(Platform.OS === 'android' ? 88 : 104),flexDirection: 'column'}]}>
                <View style={{justifyContent:"space-between",flexDirection:'row',alignItems: 'center',width:width}}>
                    <View style={{marginLeft:20}}>
                        <Icon name="map-marker" size={24} color="#36b9af" type='font-awesome'/>
                    </View>
                    <Indicator indicatorData={["全部商家","优惠商家"]}/>
                    <View style={{marginRight:20}}>
                        <Icon name="search" size={20} color="#36b9af" type='font-awesome'/>
                    </View>
                </View>
                <View style={[styles.title]}>
                    <MultiSelect selectData={selectData} style={{borderTopWidth:1,borderColor:'#ababab',borderBottomWidth:1}}/>
                </View>
            </View>
        )
    }
    listItem(item, sectionID, rowID, highlightRow){
        return(
            <Card data={item} />
        )
    }
}
var styles = StyleSheet.create({
    title:{
        flexDirection:'row',
        height:44
    }
})
function select(store) {
    return {
        listData: store.dataStore.foodData.concat(store.dataStore.takeoutData)
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(ShopPage);