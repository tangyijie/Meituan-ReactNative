/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import BarcodeScanner from 'react-native-barcodescanner';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput,Vibration} from 'react-native';

class QrcodePage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            torchMode: 'off',
            cameraType: 'back'
        };
    }
    barcodeReceived(e) {
        Vibration.vibrate();
        this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length-1].passProps.onSucess(e);
        this.props.navigator.pop();
    }
    render() {
        return(
            <BarcodeScanner
                onBarCodeRead={this.barcodeReceived.bind(this)}
                style={{ flex: 1 }}
                torchMode={this.state.torchMode}
                cameraType={this.state.cameraType}
            />
        )
    }
}

var styles = StyleSheet.create({

})

function select(store) {
    return {

    }
}

export default connect(select)(QrcodePage);