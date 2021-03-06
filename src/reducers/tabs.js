/**
 * Created by mrd on 16/11/3.
 */
'use strict';

import * as TYPES from '../contants/types';
import HomePage from '../layouts/HomePage';
import MorePage from '../layouts/MorePage';
import PersonPage from '../layouts/PersonPage';
import ShopPage from '../layouts/ShopPage';

const initialState = {
    TabState:"HomePage",
    TabData:[
        {
            title:"首页",
            Component:HomePage,
            TabState:"HomePage",
            imagePathOn:require("../images/Tabs/homepage1.png"),
            imagePathOff:require("../images/Tabs/homepage.png"),
            imageStyle:{}
        },
        {
            title:"商家",
            Component:ShopPage,
            TabState:"ShopPage",
            imagePathOn:require("../images/Tabs/shop1.png"),
            imagePathOff:require("../images/Tabs/shop.png"),
            imageStyle:{}
        },
        {
            title:"个人",
            Component:PersonPage,
            TabState:"PersonPage",
            imagePathOn:require("../images/Tabs/person1.png"),
            imagePathOff:require("../images/Tabs/person.png"),
            imageStyle:{}
        },
        {
            title:"更多",
            Component:MorePage,
            TabState:"MorePage",
            imagePathOn:require("../images/Tabs/more1.png"),
            imagePathOff:require("../images/Tabs/more.png"),
            imageStyle:{height:6,marginTop:10,marginBottom:10}
        },
    ]
};

export default function tabs(state=initialState, action){
    for(var i = 0;i<initialState.TabData.length;i++){
        if(action.type==initialState.TabData[i].TabState){
            return{
                ...state,
                TabState: action.type
            }
        }
    }
    return state;
}