/**
 * Created by mrd on 16/11/3.
 */
'use strict';

import * as TYPES from '../contants/types';

const initialState = {
    LoginModalVisible : false
};

export default function user(state=initialState, action){

    switch(action.type){
        case TYPES.LOGIN_SHOW:
            return {
                ...state,
                LoginModalVisible:true
            }
        case TYPES.LOGIN_HIDE:
            return {
                ...state,
                LoginModalVisible:false
            }
        default:
            return state;
    }

}