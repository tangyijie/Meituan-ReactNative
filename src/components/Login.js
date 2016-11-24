/**
 * Created by mrd on 16/11/4.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';

import * as User from '../actions/user';

class Login extends Component {
    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.LoginModalVisible}
            >
                <View style={{flex : 1}}>
                    <View style={styles.ModalTitle}>
                        <TouchableOpacity onPress={this.close.bind(this)}>
                            <Text style={[styles.ModalTitleText,{fontSize:28}]}>×</Text>
                        </TouchableOpacity>
                        <Text style={styles.ModalTitleText}>登录</Text>
                        <Text style={styles.ModalTitleText}>注册</Text>
                    </View>
                    <View style={styles.ModalBox}>
                        <Text style={styles.ModalText}>账号</Text>
                        <TextInput style={styles.ModalInputText} placeholder="请输入手机号" underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.ModalBox}>
                        <Text style={styles.ModalText}>密码</Text>
                        <TextInput style={styles.ModalInputText} secureTextEntry={true} placeholder="请输入密码" underlineColorAndroid="transparent"/>
                    </View>
                    <View style={[styles.ModalBox,{marginTop:20,borderBottomWidth: 0}]}>
                        <TouchableOpacity style={styles.ModalButton}>
                            <Text style={{color:'#ffffff'}}>登      录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
    close(){
        this.props.dispatch(User.hideLogin());
    }
}
var styles = StyleSheet.create({
    ModalInputText:{
        height:33,
        flexDirection: 'column',
        flex: 8
    },
    ModalText:{
        flexDirection: 'column',
        flex: 1,
    },
    ModalBox:{
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor:'#cccccc'
    },
    ModalButton:{
        flexDirection: 'column',
        backgroundColor:'#36b9af',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height:44,
        borderRadius:5
    },
    ModalTitle:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ModalTitleText:{
        flexDirection: 'column',
        color:'#ffffff',
        padding:5,
        justifyContent: 'center',
    }
})

function select(store) {
    return {
        LoginModalVisible : store.userStore.LoginModalVisible
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Login);