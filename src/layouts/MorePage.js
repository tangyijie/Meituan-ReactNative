/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';

class MorePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            gps:{
                lat:0,
                lng:0
            }
        };
      }
    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={this.moveToCenter.bind(this)}>
                    <Text>定位</Text>
                </TouchableOpacity>
            </View>
        )
    }
    getGPS(){
        Geolocation.getCurrentPosition().then(
            data => {
                this.getCity(data.latitude,data.longitude);
            }
        )
    }
    getCity(lat,long){
        Geolocation.reverseGeoCodeGPS(lat,long).then(
            data =>{
                alert(data.city);
            }
        )
        Geolocation.reverseGeoCode(lat,long).then(
            data =>{
                console.info(data);
            }
        )
    }
}
var styles = StyleSheet.create({
})
function select(store) {
    return {}
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(MorePage);