/**
 * Created by mrd on 16/12/20.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput, WebView} from 'react-native';

class BaiduMap extends Component {
    render() {
        return(
            <WebView source={require('./BaiduMap.html')} />
        )
    }
}

var styles = StyleSheet.create({

})

function select(store) {
    return {

    }
}

export default connect(select)(BaiduMap);