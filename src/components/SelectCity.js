/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';

import {style} from '../contants/styles';

import {hideLocation} from '../actions/user';

class SelectCity extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {indicatorState:"county"};
    }
    render() {
        return(
            <View>
                <View style={[style.ModalTitle,{backgroundColor:'#ffffff'}]}>
                    <TouchableOpacity onPress={() => {this.props.dispatch(hideLocation())}}>
                        <View>
                            <Text style={[{color:"#36b9af",fontSize:24,paddingLeft:16}]}>x</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[style.Indicator]}>
                        <TouchableOpacity onPress={() => {this.setState({indicatorState:"county"})}}>
                            <View style={[style.IndicatorItem,{borderTopLeftRadius:5,borderBottomLeftRadius:5,backgroundColor:("county"==this.state.indicatorState?"#36b9af":"#ffffff")}]}>
                                <Text style={[{color:("county"==this.state.indicatorState?"#ffffff":"#36b9af")}]}>国内</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.setState({indicatorState:"foreign"})}}>
                            <View style={[style.IndicatorItem,{borderTopRightRadius:5,borderBottomRightRadius:5,backgroundColor:("county"==this.state.indicatorState?"#ffffff":"#36b9af")}]}>
                                <Text style={[{color:("county"==this.state.indicatorState?"#36b9af":"#ffffff")}]}>海外</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[{color:"#36b9af",fontSize:24,paddingRight:16}]}> </Text>
                    </View>
                </View>
                {this.tabRender()}
            </View>
        )
    }
    tabRender(){
        if("county"==this.state.indicatorState) {
            return(
                <Text>county</Text>
            )
        }else{
            return(
                <Text>foreign</Text>
            )
        }
    }
}

function select(store) {
    return {

    }
}

export default connect(select)(SelectCity);