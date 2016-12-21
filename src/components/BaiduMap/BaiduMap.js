/**
 * Created by mrd on 16/12/20.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput, WebView} from 'react-native';

//原理大概就是用webview打开一个带百度地图API的HTML,进行导航,说实话,感觉不如自己写集成百度地图的插件,放弃了
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