/**
 * Created by mrd on 16/11/15.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,Dimensions,Image} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{flexDirection:'row',height: 60}}>
                <View style={styles.HLTitle}>
                    <Text>上海头条</Text>
                </View>
                <Swiper height={60} horizontal={false}
                        width={width*0.8} autoplay={true}
                        showsPagination={false}
                        style={{flexDirection: 'column',width:width*0.8}}>
                    <View style={styles.page}>
                        <View style={styles.item}>
                            <Text style={styles.text}>4</Text>
                            <Text style={styles.text}>1</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>4</Text>
                            <Text style={styles.text}>2</Text>
                        </View>
                    </View>
                    <View style={styles.page}>
                        <View style={styles.item}>
                            <Text style={styles.text}>4</Text>
                            <Text style={styles.text}>3</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.text}>4</Text>
                            <Text style={styles.text}>4</Text>
                        </View>
                    </View>
                </Swiper>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    HLTitle:{
        flexDirection: 'column',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height:60
    },
    page:{
        height:60,
    },
    item:{
        flexDirection:'row',
        height:30,
        alignItems: 'center',
    },
    text:{
        fontSize:16,

    }
});

function select(store) {
    return {
    }
}

export default connect(select)(Headline);