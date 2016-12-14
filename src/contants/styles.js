/**
 * Created by mrd on 16/11/24.
 */
'use strict';

import {StyleSheet,Platform,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    ModalTitle:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ModalTitleInput:{
        flexDirection:'row',
        height:30,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        padding:5,
        flex:3
    },
    ModalInputText:{
        height:22,
        flexDirection: 'column',
        width:width/3*2
    },
    Indicator:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IndicatorItem:{
        height:30,
        width:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#36b9af'
    },
    NavTitle:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'center',
        alignItems: 'center',
    }
})