/**
 * Created by mrd on 16/11/21.
 */
import React, {Component} from 'react';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, PanResponder,Modal, TextInput, ListView,ActivityIndicator} from 'react-native';

var _scrollView: ScrollView;
//刷新栏高度
var refreshHeadHeight = 44;
//刷新敏感度
var refreshHeight = 1;

export default class RefreshListview extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态 刷新状态为已完成 下拉状态为不下拉
        this.state = {refreshState:"done",touchState:false};
    }

    componentWillMount(){

        // 手势
        // onStartShouldSetResponder(evt)当用户开始触摸时,是否响应
        // onMoveShouldSetResponder(evt)当触摸点开始移动时,是否响应
        // 当以上任一为true时,执行以下方法
        // onResponderGrant(evt)高亮时执行
        // onResponderReject(evt)响应者另有其人时执行
        // onResponderMove(evt)当移动时执行
        // onResponderRelease(evt)当触摸停止时执行

        this.gestureHandlers = {
            onStartShouldSetResponder: (evt) => {
                console.info("Start");
                return true;
            },
            onMoveShouldSetResponder: (evt,gesture) => {
                console.info("Move");
                return true;
            },
            onResponderGrant: (evt) =>{
                // 滑动判定
                console.info("Grant");
                this.setState({touchState:true});
            },
            onResponderTerminationRequest: (evt) => {
                console.info("Request");
                return false
            },
            onResponderEnd: (evt) => {
                console.info("end");
            },
            onResponderRelease: (evt) =>{
                console.info("Release");
                // 若完整下拉出刷新头 则执行刷新事件
                if(_scrollView.scrollProperties.offset<refreshHeight){
                    console.info("开始刷新");
                    // 若当前状态为已完成
                    if(this.state.refreshState=="done"){
                        // 将状态更变为正在刷新
                        this.setState({refreshState:"loading"});
                        // 执行刷新事件
                        this.props.onRefresh();
                        var self = this;
                        // 播放刷新动画
                        _scrollView.scrollTo({y: refreshHeight})
                        setTimeout(function () {
                            // 大概2秒后关闭刷新动画
                            _scrollView.scrollTo({y: refreshHeadHeight});
                        },2000)
                    }
                }
                if(_scrollView.scrollProperties.offset>=refreshHeight&&_scrollView.scrollProperties.offset<refreshHeadHeight){
                    // 若将刷新头拉出 但并未完整拉出 则不刷新 并恢复成没下拉的状态
                    _scrollView.scrollTo({y: refreshHeadHeight});
                }
                // 滑动判定关闭
                this.setState({touchState:false});
            }
        }

    }

    render() {
        return(
            <ListView
                {...this.props}
                {...this.gestureHandlers}
                ref = {(scrollView) => { _scrollView = scrollView; }}
                onScroll = {this.mScroll.bind(this)}
                renderHeader = {this.mRenderHeader.bind(this)}

            />
            )
    }

    componentDidMount() {
        // 页面渲染完成时
        if(Platform.OS=="ios"){
            // 隐藏刷新头
            _scrollView.scrollTo({y: refreshHeadHeight});
        }else {
            // android会出现渲染卡顿的情况,给延迟,关闭动画,才能隐藏刷新头
            setTimeout(function () {
                _scrollView.scrollTo({y: refreshHeadHeight,animated: false});
            },1)
        }
    }

    mScroll(){
        //处理因为滑动惯性导致刷新头显示
        //若在非触摸情况下 将刷新头下拉
        if(!this.state.touchState&&_scrollView.scrollProperties.offset<refreshHeadHeight&&this.state.refreshState=="done"){
            //隐藏刷新头
            _scrollView.scrollTo({y: refreshHeadHeight});
            //设置状态是为了让他不再进入这个判断
            this.setState({refreshState:"loading"});
        }
        //当刷新头复位时
        if(_scrollView.scrollProperties.offset==refreshHeadHeight){
            // 刷新完成
            this.setState({refreshState:"done"});
        }
    }

    mRenderHeader(){
        //刷新样式
        return(
                <View>
                    <View style={{height: refreshHeadHeight,position:"relative",top:0}}>
                        <View style={{flexDirection:'row',height:refreshHeadHeight,justifyContent: 'center',alignItems: 'center'}}>
                            <ActivityIndicator size="small" color="gray" />
                            <Text>下拉刷新</Text>
                        </View>
                    </View>
                    {this.props.renderHeader()}
                </View>
            )
    }
}

var styles = StyleSheet.create({

})

