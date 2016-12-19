/**
 * Created by mrd on 16/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Icon } from 'react-native-elements';

import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, Modal, TextInput,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');


class MultiSelect extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = { dropDownState:false ,firstSelect:props.selectData.firstData[0],secSelect:props.selectData.secData[0],thSelect:props.selectData.thData[0],showPage:0};
    }
    render() {
        return(
            <View>
                <View style={styles.multiSelect} {...this.props.style}>
                    <TouchableOpacity onPress={() => this.openSelect(1)}>
                        <View style={styles.selectItem}>
                            <Text>  </Text>
                            <Text>{this.state.firstSelect}</Text>
                            <Icon name="angle-down" size={16} color="#000" type='font-awesome'/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.openSelect(2)}>
                        <View style={[styles.selectItem,{borderLeftWidth:1,borderRightWidth:1,borderColor:'#ababab'}]}>
                            <Text>  </Text>
                            <Text>{this.state.secSelect}</Text>
                            <Icon name="angle-down" size={16} color="#000" type='font-awesome'/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.openSelect(3)}>
                        <View style={styles.selectItem}>
                            <Text>  </Text>
                            <Text>{this.state.thSelect}</Text>
                            <Icon name="angle-down" size={16} color="#000" type='font-awesome'/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{position:"absolute"}}>
                    {this.dropDown(this.state.showPage)}
                </View>
            </View>
        )
    }

    openSelect(page){
        this.setState({showPage:page});
        this.setState({dropDownState:!this.state.dropDownState});
    }

    dropDown(page){
        if(this.state.dropDownState){
            var data = [];
            switch (page){
                case 1:
                    data = this.props.selectData.firstData;
                    break;
                case 2:
                    data = this.props.selectData.secData;
                    break;
                case 3:
                    data = this.props.selectData.thData;
                    break;

            }
            return(
                <View style={{height:height-88,width:width,backgroundColor:"transparent"}}>
                    <View  style={{height:height-88,width:width,backgroundColor:"#000000",opacity:0.5,position:"absolute"}}></View>
                    <View style={{backgroundColor:"#ffffff"}}>
                        {this.renderItem(data)}
                    </View>
                </View>
            )
        }else{
            return null;
        }
    }

    renderItem(data){
        var body = [];
        for(let i=0;i<data.length;i++){
            body.push(
                <TouchableOpacity key={i}>
                    <View style={styles.secSelectItem}>
                        <Text>{data[i]}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return body;
    }
}

var styles = StyleSheet.create({
    multiSelect:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:width,
        height:44,
        alignItems: 'center',
    },
    selectItem:{
        flexDirection:'row',
        height:30,
        width:width/3,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:5,
        paddingRight:5
    },
    secSelectItem:{
        borderTopWidth:1,
        borderTopColor:"#efefef",
        height:44,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingLeft:30
    }
})

function select(store) {
    return {

    }
}

export default connect(select)(MultiSelect);