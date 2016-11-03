/**
 * Created by mrd on 16/11/2.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import {connect} from 'react-redux';
import HomePage from './layouts/HomePage';
import Tabs from './components/Tabs/Tabs';

let initialRoute={
    title:"首页",
    component:HomePage
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(props, state){

    }

    render() {
        return (
            <View style={{flex : 1}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={true}
                >
                    <View style={{flex : 1}}>
                        <View style={styles.ModalTitle}>
                            <Text style={styles.ModalTitleText}>X</Text>
                            <Text style={styles.ModalTitleText}>登录</Text>
                            <Text style={styles.ModalTitleText}>注册</Text>
                        </View>

                        <View style={styles.ModalBox}>
                            <Text style={styles.ModalText}>账号</Text>
                            <TextInput style={styles.ModalInputText} placeholder="请输入手机号"/>
                        </View>
                        <View style={styles.ModalBox}>
                            <Text style={styles.ModalText}>密码</Text>
                            <TextInput style={styles.ModalInputText} secureTextEntry={true} placeholder="请输入密码"/>
                        </View>
                        <View style={[styles.ModalBox,{marginTop:20,borderBottomWidth: 0}]}>
                            <TouchableOpacity style={styles.ModalButton}>
                                <Text style={{color:'#ffffff'}}>登      录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Navigator
                    style={{flex : 1}}
                    initialRoute={initialRoute}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump; 			//页面切换动画效果
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                    navigationBar ={
                        <Tabs />
                    }
                    sceneStyle={{paddingTop: (Platform.OS === 'android' ? 0 : 16)}}
                />
            </View>
        )
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
        backgroundColor:'#36b9af',
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
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
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);