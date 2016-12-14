/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';

import {style} from '../contants/styles';

class Indicator extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {indicatorState:"one"};
    }
    render() {
        return(
            <View>
                <View style={[style.ModalTitle,{backgroundColor:'#ffffff',height:44,paddingTop:0}]}>
                    <View style={[style.Indicator]}>
                        <TouchableOpacity onPress={() => {this.setState({indicatorState:"one"})}}>
                            <View style={[style.IndicatorItem,{borderTopLeftRadius:5,borderBottomLeftRadius:5,width:66,backgroundColor:(("one"==this.state.indicatorState)?"#36b9af":"#ffffff")}]}>
                                <Text style={[{color:("one"==this.state.indicatorState?"#ffffff":"#36b9af")}]}>{this.props.indicatorData[0]}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.setState({indicatorState:"two"})}}>
                            <View style={[style.IndicatorItem,{borderTopRightRadius:5,borderBottomRightRadius:5,width:66,backgroundColor:("one"==this.state.indicatorState?"#ffffff":"#36b9af")}]}>
                                <Text style={[{color:("one"==this.state.indicatorState?"#36b9af":"#ffffff")}]}>{this.props.indicatorData[1]}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({

})

function select(store) {
    return {

    }
}

export default connect(select)(Indicator);