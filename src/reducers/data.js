/**
 * Created by mrd on 16/11/17.
 */
'use strict';

// type:类型 shopName:店家名称
// startingPrice:起送价(外卖) delivery:配送费(外卖)
// discount:优惠(外卖){startingPrice:满,discount:减}
// sales:销量 outbid:竞价 distance:距离
// zone:区域 profiles:简介
// price:价格 original:原价
// pic:图片source

const initialState = {
    foodData : [
        {
            type : "food", shopName : "上海虾满堂", distance : 800,
            zone : "宝山城区/吴淞等", profiles : "超值烤鱼一份",
            price : 38 , original : 128,
            sales: 498,
            pic: {uri: 'http://p0.meituan.net/200.0/deal/528a245c7085eebe88ba356855d84e5577509.jpg@120_0_400_400a%7C267h_267w_2e_100q'}
        }
    ],
    takeoutData : [
        {
            type : "takeout", shopName : "热火功夫麻辣烫", distance : 2400,
            startingPrice : 30,delivery : 0,
            discount:[
                { startingPrice : 25 , discount : 6},
                { startingPrice : 50 , discount : 12},
            ],
            sales : 1251, outbid:0,
            pic : {uri: 'http://p1.meituan.net/200.0/deal/ff7d3f49fa0391b90c8b0f901272c4a625186.jpg@120_0_400_400a%7C267h_267w_2e_100q'}
        },{
            type : "takeout", shopName : "葵姨瓦煲饭", distance : 2220,
            startingPrice : 50,delivery : 3,
            discount:[
                { startingPrice : 25 , discount : 6},
                { startingPrice : 40 , discount : 10}
            ],
            sales : 1284, outbid:0,
            pic: {uri :'http://p0.meituan.net/200.0/deal/81862c6a1d4c0cf1c0be235b36aac0a042490.jpg'}
        },{
            type : "takeout", shopName : "豪大大鸡排(宝山店)", distance : 1800,
            startingPrice : 40,delivery : 3,
            discount:[
                { startingPrice : 25 , discount : 6},
                { startingPrice : 35 , discount : 8}
            ],
            sales : 1324, outbid:0,
            pic: {uri :'http://p1.meituan.net/200.0/deal/53a9cf3dd70a8fd4ea031022f1c1e03d27743.jpg@29_0_442_442a%7C267h_267w_2e_90Q'}
        },{
            type : "takeout", shopName : "阿牛嫂(木桶饭煲仔饭)", distance : 1500,
            startingPrice : 25,delivery : 3,
            discount:[
                { startingPrice : 25 , discount : 8},
                { startingPrice : 35 , discount : 10}
            ],
            sales : 695, outbid:0,
            pic: {uri :'http://p1.meituan.net/200.0/deal/eaf77dcc0f95cf30c677522a4c87fefa591116.jpg@151_0_338_338a%7C267h_267w_2e_100Q'}
        }
    ]

};

export default function data(state=initialState, action){
    return state;
}