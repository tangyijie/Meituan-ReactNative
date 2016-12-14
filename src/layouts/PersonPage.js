/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity,ScrollView,Dimensions,Image} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

import * as user from '../actions/user';

import {style} from '../contants/styles';

var _scrollView: ScrollView;


var firstViewData = [
    {ico:"credit-card",name:"我的钱包",detail:"",color:"#fd9426"},
    {ico:"money",name:"余额",detail:"￥0",color:"#fd9426"},
    {ico:"cc",name:"抵用券",detail:"39",color:"#8b96fc"},
    {ico:"id-card-o",name:"会员卡",detail:"",color:"#8b96fc"},
];
var secViewData = [
    {ico:"user",name:"好友去哪",detail:"和好友分享吃喝玩乐好去处",color:"#6ab6fc"},
    {ico:"commenting-o",name:"我的评价",detail:"",color:"#6ab6fc"},
    {ico:"star",name:"我的收藏",detail:"",color:"#fc5d6e"},
    {ico:"diamond",name:"会员中心",detail:"V0",color:"#fc5d6e"},
    {ico:"archive",name:"积分商城",detail:"有304积分,来试试手气!",color:"#fc5d6e"},
];
var threeViewData = [
    {ico:"phone",name:"客服中心",detail:"",color:"#86d356"},
    {ico:"info",name:"关于美团",detail:"我要合作",color:"#86d356"},
];

class PersonPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {hideNav:true,opacity:1};
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#f0efed"}}>
                <View style={[style.NavTitle,{justifyContent: 'flex-end',backgroundColor:(this.state.hideNav?"transparent":"#36b9af"),position:"absolute",zIndex:50,right:0,width:width}]}>
                    <View style={styles.TitleRight}>
                        <Icon name="gear" size={20} color="#fff" type='font-awesome'/>
                        <Icon name="bell" size={20} color="#fff" type='font-awesome'/>
                    </View>
                </View>
                <ScrollView
                    ref = {(scrollView) => { _scrollView = scrollView; }}
                    scrollEventThrottle={100}
                    onScroll = {this.mScroll.bind(this)}
                >
                    <View style={[styles.NavTitle,{justifyContent: 'flex-start',backgroundColor:"#36b9af"}]}>
                        {this.renderUserInfo()}
                    </View>
                    <View style={styles.card}>
                        {this.renderItem(firstViewData)}
                    </View>
                    <View style={styles.card}>
                        {this.renderItem(secViewData)}
                    </View>
                    <View style={styles.card}>
                        {this.renderItem(threeViewData)}
                    </View>
                </ScrollView>
            </View>
        )
    }

    Login(){
        this.props.dispatch(user.showLogin());
    }
    renderItem(data){
        var body = [];
        for(let i =0;i<data.length;i++){
            body.push(
                <View style={styles.item} key={i}>
                    <View style={styles.subItem}>
                        <View style={{width:36}}>
                            <Icon name={data[i].ico} size={20} color={data[i].color} type='font-awesome'/>
                        </View>
                        <Text>{data[i].name}</Text>
                    </View>
                    <View style={styles.subItem}>
                        <Text style={{color:'#a3a3a3'}}>{data[i].detail}</Text>
                        <Text style={{color:'#a3a3a3'}}>  ></Text>
                    </View>
                </View>
            )
        }
        return body
    }
    //用户头像【暂时只有未登录状态,已登录状态这个以后再填吧】
    renderUserInfo(){
        return(
            <View style={{flexDirection:'row',alignItems: 'center',opacity:this.state.opacity}}>
                <Image style={{width:50,height: 50,margin:15}} source={require('../images/loadingPic.png')}/>
                <TouchableOpacity onPress={this.Login.bind(this)}>
                    <Text style={{fontSize:16,color:"#fff"}}>请点击登录</Text>
                </TouchableOpacity>
            </View>
        )
    }

    mScroll(event){
        if(event.nativeEvent.contentOffset.y<(Platform.OS === 'android' ? 44 : 60)){
            this.setState({opacity:(1-event.nativeEvent.contentOffset.y/(Platform.OS === 'android' ? 44 : 60))});
        }
        //控制顶部导航显示
        if(event.nativeEvent.contentOffset.y<(Platform.OS === 'android' ? 50 : 66)){
            this.setState({hideNav:true});
        }else{
            this.setState({hideNav:false})
        }
    }

    customNavigationBar(page){
        //取消预设顶部导航
        return null;
    }
}
var styles = StyleSheet.create({
    TitleRight:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:10,
        width:60
    },
    NavTitle:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 132 : 148),
        paddingTop: (Platform.OS === 'android' ? 44 : 60),
        backgroundColor:'#36b9af',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        marginTop:3,
        marginBottom:3,
    },
    item:{
        flexDirection:'row',
        height:46,
        backgroundColor:"#ffffff",
        marginTop:1,
        marginBottom:1,
        justifyContent:'space-between',
        alignItems: 'center'
    },
    subItem:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
    }
})
function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(PersonPage);