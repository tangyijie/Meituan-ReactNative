/**
 * Created by mrd on 16/11/10.
 */
'use strict';

import Meishi from '../layouts/Meishi';

const initialState = {
    catState : "",
    catData : [
        {name: "美食",pic:require("../images/Cats/meishi.png"),component:Meishi},
        {name: "电影",pic:require("../images/Cats/dianying.png"),component:Meishi},
        {name: "酒店住宿",pic:require("../images/Cats/jiudian.png"),component:Meishi},
        {name: "休闲娱乐",pic:require("../images/Cats/xiuxian.png"),component:Meishi},
        {name: "外卖",pic:require("../images/Cats/waimai.png"),component:Meishi},

        {name: "机票/火车票",pic:require("../images/Cats/jipiao.png"),component:Meishi},
        {name: "KTV",pic:require("../images/Cats/ktv.png"),component:Meishi},
        {name: "周边游",pic:require("../images/Cats/zhoubian.png"),component:Meishi},
        {name: "丽人",pic:require("../images/Cats/liren.png"),component:Meishi},
        {name: "景点",pic:require("../images/Cats/jingdian.png"),component:Meishi},
        
        {name: "高端酒店",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "足疗按摩",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "洗浴/汗蒸",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "母婴亲子",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "结婚",pic:require("../images/loadingPic.png"),component:Meishi},

        {name: "主题公园",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "动植物园",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "学习培训",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "家装",pic:require("../images/loadingPic.png"),component:Meishi},
        {name: "全部分类",pic:require("../images/loadingPic.png"),component:Meishi},
    ]
};

export default function cats(state=initialState, action){
    if(action.type=="INIT_PAGE"){
        return{
            ...state,
            catState: ""
        }
    }
    for(var i = 0;i<initialState.catData.length;i++){
        if(action.type==initialState.catData[i].name){
            return{
                ...state,
                catState: action.type
            }
        }
    }
    return initialState;
}