/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';

import {hideModal} from '../actions/user';

import {style} from '../contants/styles';

class Search extends Component {
    render() {
        return(
            <View style={{flex:1,backgroundColor:"#f3f3f3"}}>
                <View style={[style.ModalTitle,{backgroundColor:"#ffffff",paddingLeft:8,paddingRight:8}]}>
                    <View style={[style.ModalTitleInput,{backgroundColor:"#ebeced",marginRight:10}]}>
                        <View style={{paddingLeft:0}}>
                            <Icon name="search" size={16} color="#8e8e8e" type='font-awesome'/>
                        </View>
                        <View style={{marginLeft:8}}>
                            <TextInput style={[style.ModalInputText]} placeholder="搜索商家、品类或商圈" placeholderTextColor="#8e8e8e"/>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() =>{this.props.dispatch(hideModal())}}>
                        <Text style={{color:"#36b9af",fontSize:16}}>取消</Text>
                    </TouchableOpacity>
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

export default connect(select)(Search);