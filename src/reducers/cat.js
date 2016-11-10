/**
 * Created by mrd on 16/11/10.
 */
'use strict';

import * as TYPES from '../contants/types';

const initialState = {
    catData : [
        {name: "美食",pic:""},{name: "电影",pic:""},
        {name: "酒店住宿",pic:""},{name: "休闲娱乐",pic:""},
        {name: "外卖",pic:""},{name: "机票/火车票",pic:""},
        {name: "KTV",pic:""},{name: "周边游",pic:""},
        {name: "丽人",pic:""},{name: "景点",pic:""},
        {name: "美食",pic:""},{name: "美食",pic:""},
        {name: "美食",pic:""},{name: "美食",pic:""},
        {name: "美食",pic:""},{name: "美食",pic:""},
        {name: "美食",pic:""},{name: "美食",pic:""},
        {name: "美食",pic:""},{name: "美食",pic:""},
        {name: "美食",pic:""},{name: "美食",pic:""},
    ]
};

export default function tabs(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}