/**
 * Created by mrd on 16/11/3.
 */
import React, {Component} from 'react';
import {StyleSheet, Navigator, Platform, View, Text, TouchableOpacity, TextInput,ListView,ActivityIndicator,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';

import Cat from '../components/Cat';
import Headline from '../components/Headline';
import Recommend from '../components/Recommend';
import Card from '../components/Card';
import RefreshListview from '../components/RefreshListview';


class HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    // 构造
    render() {
        return (
            <View style={{flex:1,backgroundColor: "#f3f3f3"}}>
                <RefreshListview
                    onRefresh={this.onRefresh}
                    removeClippedSubviews={false}
                    renderHeader={this.listHeader.bind(this)}
                    dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.props.listData)}
                    renderRow={this.listItem}
                />
            </View>
        )
    }
    // onRefresh(pulling, pullok, pullrelease){
    //     return(
    //         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 44}}>
    //             <ActivityIndicator size="small" color="gray" />
    //             {pulling ? <Text>当前PullList状态: pulling...</Text> : null}
    //             {pullok ? <Text>当前PullList状态: pullok......</Text> : null}
    //             {pullrelease ? <Text>当前PullList状态: pullrelease......</Text> : null}
    //         </View>
    //     )
    // }

    onRefresh(){
        console.info("哈哈哈 我刷新了");
    }

    listItem(item, sectionID, rowID, highlightRow){
        return(
            <Card data={item} />
        )
    }
    listHeader(){
        return(
                <View>
                    <Cat navigator={this.props.navigator} style={{backgroundColor: "#ffffff"}}/>
                    <Headline style={{backgroundColor: "#ffffff",marginTop:2}}/>
                    <Recommend style={{marginTop:8,marginBottom:8}}/>
                    <View style={{justifyContent: 'center',alignItems: 'center',height:44,backgroundColor: "#ffffff",marginTop:2}}>
                        <Text style={{color: "#aaaaaa"}}>- 猜你喜欢 -</Text>
                    </View>
                </View>
            )
    }
    customNavigationBar(page) {
        // return(
        //     <View style={styles.title}>
        //         <View style={styles.titleRow}>
        //             <Text style={{color:'#fff'}}>{page.props.Location} </Text>
        //         </View>
        //         <View style={styles.titleInput}>
        //             <View>
        //             </View>
        //             <Text style={{color:'#aaaaaa',fontSize:12}}>  搜索商家、类品或商圈</Text>
        //         </View>
        //         <View style={styles.titleRow}>
        //             <View style={styles.titleRow}>
        //             </View>
        //             <View style={styles.titleRow}>
        //             </View>
        //         </View>
        //     </View>
        // )
        return(
            <View style={styles.title}>
                <View style={styles.titleRow}>
                    <Text style={{color:'#fff'}}>{page.props.Location} </Text>
                    <Icon name="angle-down" size={16} color="#fff" type='font-awesome'/>
                </View>
                <View style={styles.titleInput}>
                    <View>
                        <Icon name="search" size={16} color="#36b9af" type='font-awesome'/>
                    </View>
                    <Text style={{color:'#aaaaaa',fontSize:12}}>  搜索商家、类品或商圈</Text>
                </View>
                <View style={styles.titleRow}>
                    <View style={styles.titleRow}>
                        <Icon name="qrcode" size={16} color="#fff" type='font-awesome'/>
                    </View>
                    <View style={styles.titleRow}>
                        <Icon name="bell" size={16} color="#fff" type='font-awesome'/>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    title:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleInput:{
        flexDirection:'row',
        height:30,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        padding:5,
        flex:3

    },
    titleRow:{
        flexDirection:'row',
        flex:1,
        justifyContent: 'center'
    },
    titleColumn:{
        flexDirection: 'column',
        flex:1
    },
    titleIcon:{
        margin:40
    }
})

function select(store) {
    return {
        listData: store.dataStore.foodData.concat(store.dataStore.takeoutData)
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(HomePage);