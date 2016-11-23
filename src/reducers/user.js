/**
 * Created by mrd on 16/11/3.
 */
'use strict';

import * as TYPES from '../contants/types';

const initialState = {
    LoginModalVisible : false,
    Location : "定位中...",
    status: null
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
        case TYPES.GETING_LOCATION:
            return {
                ...state,
                status:"doing"
            }
        case TYPES.LOCATION_DONE:
            return {
                ...state,
                status:"done",
                Location:action.location
            }
        case TYPES.LOCATION_ERROR:
            return{
                ...state,
                status:"error",
                Location:"请选择"
            }
        default:
            return state;
    }

}