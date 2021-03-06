/**
 * Created by mrd on 16/11/4.
 */
import { Geolocation } from 'react-native-baidu-map';

import * as TYPES from '../contants/types';

export function showLogin() {
    return  { type : TYPES.LOGIN_SHOW }
}
export function hideLogin() {
    return  { type : TYPES.LOGIN_HIDE }
}

export function showModal(View, Animated='slide') {
    return { type : TYPES.MODAL_SHOW, View, Animated }
}
export function hideModal() {
    return { type : TYPES.MODAL_HIDE }
}

export function getLocation() {
    return function (dispatch) {
        dispatch({type : TYPES.GETING_LOCATION});
        Geolocation.getCurrentPosition().then(
            data => {
                Geolocation.reverseGeoCodeGPS(data.latitude,data.longitude).then(
                    data => {
                        dispatch({type : TYPES.LOCATION_DONE,location:data.city});
                    }
                ).catch(
                    error => {
                        alert("获取地理位置失败");
                        dispatch({type : TYPES.LOCATION_ERROR});
                    }
                );
            }
        ).catch(
            error => {
                alert("获取地理位置失败");
                dispatch({type : TYPES.LOCATION_ERROR});
            }
        );
    }
}
