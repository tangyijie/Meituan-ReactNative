/**
 * Created by mrd on 16/11/3.
 */
'use strict';

import * as TYPES from '../actions/types';

const initialState = {
    TabState:"HomePage"
};

export default function tabs(state=initialState, action){
    switch(action.type){
        case TYPES.TAB_HOME:
            return {
                ...state,
                TabState:"HomePage"
            }
        case TYPES.TAB_MORE:
            return {
                ...state,
                TabState:"MorePage"
            }
        case TYPES.TAB_PERSON:
            return {
                ...state,
                TabState:"PersonPage"
            }
        case TYPES.TAB_SHOP:
            return {
                ...state,
                TabState:"ShopPage"
            }
        default:
            return state;
    }
}