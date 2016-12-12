/**
 * Created by mrd on 16/11/24.
 */
'use strict';

import {StyleSheet,Platform} from 'react-native';

export const style = StyleSheet.create({
    ModalTitle:{
        flexDirection:'row',
        height:(Platform.OS === 'android' ? 44 : 60),
        paddingTop: (Platform.OS === 'android' ? 0 : 16),
        backgroundColor:'#36b9af',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    }
})