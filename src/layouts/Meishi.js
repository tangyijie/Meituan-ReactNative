/**
 * Created by mrd on 16/11/14.
 */

import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,Dimensions,Image} from 'react-native';
import {connect} from 'react-redux';
import {goBack} from '../actions/cats';

class Meishi extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#ffffff"}}>
                <TouchableOpacity onPress={this.goBack.bind(this)} style={{paddingTop:20}}>
                    <Text>美食</Text>
                </TouchableOpacity>
            </View>
        )
    }
    goBack(){
        this.props.dispatch(goBack());
        if(this.props.navigator) {
            this.props.navigator.pop();
        }
    }
}

var styles = StyleSheet.create({
});

function select(store) {
    return {

    }
}

export default connect(select)(Meishi);