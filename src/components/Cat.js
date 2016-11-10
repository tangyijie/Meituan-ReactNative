/**
 * Created by mrd on 16/11/9.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';

class Cat extends Component {
    render() {
        return (
            <Swiper height={200} paginationStyle={{bottom:5}}>
                <View style={styles.slide1}>
                    <Text>1111</Text>
                </View>
                <View style={styles.slide2}>
                    <Text>22222</Text>
                </View>
            </Swiper>
        )
    }
}

var styles = StyleSheet.create({
    slide1: {
        flex: 1,
        backgroundColor: '#cccccc'
    },
    slide2: {
        flex: 1,
        backgroundColor: '#dddddd'
    }
});

function select(store) {
    return {}
}

export default connect(select)(Cat);