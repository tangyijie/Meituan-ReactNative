/**
 * Created by mrd on 16/11/14.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,Dimensions,Image} from 'react-native';
import {connect} from 'react-redux';
import {goBack} from '../actions/cats';

class NavTitle extends Component {
    render(){
        //判断是否有自定义标题
        if(typeof (this.props.route.component.WrappedComponent)!="undefined" && typeof (this.props.route.component.WrappedComponent.prototype.customNavigationBar)!="undefined"){
            return(
                <View style={{zIndex:50}}>
                    {this.props.route.component.WrappedComponent.prototype.customNavigationBar(this)}
                </View>
            )
        }else{
            return (
                <View style={[styles.navTitle,{zIndex:50}]}>
                    {this.backButton()}
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{this.props.route.title}</Text>
                    </View>
                    {this.rightButton()}
                </View>
            )
        }
    }
    backButton(){
        if(this.props.navigator.state.routeStack.length>1){
            return(
                <TouchableOpacity style={styles.button} onPress={this.goBack.bind(this)}>
                    <View>
                        <Text style={styles.buttonText}>返回</Text>
                    </View>
                </TouchableOpacity>
            )
        }else{
            return(
                <View style={styles.button}>

                </View>
            )
        }
    }
    goBack(){
        this.props.dispatch(goBack());
        if(this.props.navigator) {
            this.props.navigator.pop();
        }
    }
    rightButton(){
        return(
            <View style={styles.button}>

            </View>
        )
    }
}

var styles = StyleSheet.create({
    navTitle:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        flex:4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleText:{
        color:"#ffffff",
        fontSize:16
    },
    buttonText:{
        color:"#ffffff",
    }
})

function select(store) {
    return {
        Location: store.userStore.Location,
        status: store.userStore.status
    }
}
export default connect(select)(NavTitle);