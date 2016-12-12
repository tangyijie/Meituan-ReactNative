/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';


class CustomModal extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        return(
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.ModalVisible}
            >
                <View style={{flex : 1}}>
                    {this.props.ModalView(this)}
                </View>
            </Modal>
        )
    }
}

function select(store) {
    return {
        ModalVisible : store.userStore.ModalVisible,
        ModalView : store.userStore.ModalView
    }
}

export default connect(select)(CustomModal);