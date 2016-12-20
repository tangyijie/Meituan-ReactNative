/**
 * Created by mrd on 16/12/20.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput, WebView} from 'react-native';

class MoreDetailPage extends Component {
    render() {
        return(
            <WebView source={{uri:this.props.route.uri}} />
        )
    }
}

var styles = StyleSheet.create({

})

function select(store) {
    return {

    }
}

export default connect(select)(MoreDetailPage);