/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,WebView,ListView,Image} from 'react-native';
import {connect} from 'react-redux';

import MoreDetailPage from './MoreDetailPage';

let APPDATA = [
    {
        name:"美团",uri:"http://i.meituan.com/"
    },
    {
        name:"饿了么",uri:"http://www.ele.me/",icon:"http://static11.elemecdn.com/apple-touch-icon.png?v=2"
    },
    {
        name:"百度外卖",uri:"http://waimai.baidu.com/"
    },
    {
        name:"欧冶寄托",uri:"http://jituo.ouyeel.com/oyjtmobile/app",icon:"http://jituo.ouyeel.com/favicon.ico"
    }
];

class MorePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render() {
        return (
            <View style={{flex:1}}>
                <ListView
                    dataSource = {(new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(APPDATA)}
                    renderRow = {this.listItem.bind(this)}
                />
            </View>
        )
    }

    listItem(data, sectionID, rowID, highlightRow){
        return(
            <TouchableOpacity onPress={()=>{this.openItem(data)}}>
                <View style={styles.Item}>
                    <Image source={{uri:(data.icon?data.icon:data.uri+"/favicon.ico")}} style={{height:30,width:30}}/>
                    <View style={{paddingLeft: 30}}>
                        <Text>{data.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            )
    }

    openItem(data){
        this.props.navigator.push(
            {
                title:data.name,
                component:MoreDetailPage,
                uri:data.uri
            }
        );
    }
}
var styles = StyleSheet.create({
    Item:{
        borderTopWidth:1,
        borderTopColor:"#efefef",
        borderBottomWidth:1,
        borderBottomColor:"#efefef",
        height:60,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingLeft:30,
    }
})
function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(MorePage);