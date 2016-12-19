/**
 * Created by mrd on 16/12/19.
 */
'use strict';

import * as TYPES from '../contants/types';

const initialState = {
    indicatorState : "one"

}

export default function cats(state=initialState, action){
    switch(action.type){
        case TYPES.INDICATOR_ONE:
            return {
                ...state,
                indicatorState:"one"
            }
        case TYPES.INDICATOR_TWO:
            return {
                ...state,
                indicatorState:"two"
            }
        default:
            return state;
    }
}