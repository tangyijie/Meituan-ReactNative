/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,ListView,ActivityIndicator,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';

import Cat from '../components/Cat';
import Headline from '../components/Headline';
import Recommend from '../components/Recommend';
import Card from '../components/Card';
import RefreshListview from '../components/RefreshListview';
import QRCodeScreen from './QRCodeScreen';
import QrcodePage from './QrcodePage';
import SelectCity from '../components/SelectCity';

import * as userActions from '../actions/user';


class HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    // 渲染
    render() {
        return (
            <View style={{flex:1,backgroundColor: "#f3f3f3"}}>
                <RefreshListview
                    onRefresh={this.onRefresh}
                    removeClippedSubviews={false}
                    renderHeader={this.listHeader.bind(this)}
                    dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.props.listData)}
                    renderRow={this.listItem}
                />
            </View>
        )
    }
    // onRefresh(pulling, pullok, pullrelease){
    //     return(
    //         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 44}}>
    //             <ActivityIndicator size="small" color="gray" />
    //             {pulling ? <Text>当前PullList状态: pulling...</Text> : null}
    //             {pullok ? <Text>当前PullList状态: pullok......</Text> : null}
    //             {pullrelease ? <Text>当前PullList状态: pullrelease......</Text> : null}
    //         </View>
    //     )
    // }
    //下拉刷新执行的操作
    onRefresh(){
        console.info("哈哈哈 我刷新了");
    }
    //页面listItem的样式
    listItem(item, sectionID, rowID, highlightRow){
        return(
            <Card data={item} />
        )
    }
    //页面顶部跟随滚动的部分
    listHeader(){
        return(
                <View>
                    <Cat navigator={this.props.navigator} style={{backgroundColor: "#ffffff"}}/>
                    <Headline style={{backgroundColor: "#ffffff",marginTop:2}}/>
                    <Recommend style={{marginTop:8,marginBottom:8}}/>
                    <View style={{justifyContent: 'center',alignItems: 'center',height:44,backgroundColor: "#ffffff",marginTop:2}}>
                        <Text style={{color: "#aaaaaa"}}>- 猜你喜欢 -</Text>
                    </View>
                </View>
            )
    }
    //该页面自定义的顶部导航
    customNavigationBar(page) {
        return(
            <View style={styles.title}>
                <View style={[styles.titleRow,{marginRight:6,marginLeft:6}]}>
                    <TouchableOpacity style={styles.titleRow} onPress={() =>{
                        page.props.dispatch(userActions.showModal(this.selectCity))
                    }}>
                            <Text style={{color:'#fff'}} numberOfLines={1}>{page.props.Location} </Text>
                            <Icon name="angle-down" size={16} color="#fff" type='font-awesome'/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.titleInput}>
                    <View style={styles.titleInput}>
                        <View>
                            <Icon name="search" size={16} color="#36b9af" type='font-awesome'/>
                        </View>
                        <Text style={{color:'#aaaaaa',fontSize:12}}>  搜索商家、类品或商圈</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.titleRow,{paddingLeft:20}]}>
                    <TouchableOpacity onPress={()=>{
                        if(Platform.OS==="android"){
                            page.props.navigator.push(
                            {
                                title:"二维码",
                                component:QrcodePage,
                                passProps: {
                                    onSucess: this.qrcodeSucess,
                                    }
                            });
                        }else{
                            page.props.navigator.push(
                            {
                                title:"二维码",
                                component:QRCodeScreen,
                                passProps: {
                                    onSucess: this.qrcodeSucess,
                                    }
                            });
                        }
                    }}>
                        <View style={styles.titleRow}>
                            <Icon name="qrcode" size={16} color="#fff" type='font-awesome'/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.titleRow}>
                        <Icon name="bell" size={16} color="#fff" type='font-awesome'/>
                    </View>
                </View>
            </View>
        )
    }
    //点击选择城市
    selectCity(page){
        return(
            <SelectCity />
            // <View>
            //     <View style={[style.ModalTitle,{backgroundColor:'#ffffff'}]}>
            //         <View>
            //             <Text style={[{color:"#36b9af",fontSize:24,paddingLeft:16}]}>x</Text>
            //         </View>
            //         <View style={[style.Indicator]}>
            //             <TouchableOpacity onPress={() => {page.setState({indicatorState:"county"})}}>
            //                 <View style={[style.IndicatorItem,{borderTopLeftRadius:5,borderBottomLeftRadius:5,backgroundColor:("county"==page.state.indicatorState?"#36b9af":"#ffffff")}]}>
            //                     <Text style={[{color:("county"==page.state.indicatorState?"#ffffff":"#36b9af")}]}>国内</Text>
            //                 </View>
            //             </TouchableOpacity>
            //             <TouchableOpacity onPress={() => {page.setState({indicatorState:"foreign"})}}>
            //                 <View style={[style.IndicatorItem,{borderTopRightRadius:5,borderBottomRightRadius:5,backgroundColor:("county"==page.state.indicatorState?"#ffffff":"#36b9af")}]}>
            //                     <Text style={[{color:("county"==page.state.indicatorState?"#36b9af":"#ffffff")}]}>海外</Text>
            //                 </View>
            //             </TouchableOpacity>
            //         </View>
            //         <View>
            //             <Text style={[{color:"#36b9af",fontSize:24,paddingRight:16}]}> </Text>
            //         </View>
            //     </View>
            //     <Text>2333333</Text>
            // </View>
        )
    }
    //当扫码成功时执行的操作
    qrcodeSucess(result){
        console.info(result);
    }
}

var styles = StyleSheet.create({
    title:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleInput:{
        flexDirection:'row',
        height:30,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        padding:5,
        flex:3

    },
    titleRow:{
        flexDirection:'row',
        flex:1,
        justifyContent: 'center'
    },
    titleColumn:{
        flexDirection: 'column',
        flex:1
    },
    titleIcon:{
        margin:40
    }
})

function select(store) {
    return {
        listData: store.dataStore.foodData.concat(store.dataStore.takeoutData)
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(HomePage);