/**
 * Created by mrd on 16/11/4.
 */
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';

import * as TYPES from '../contants/types';

export function showLogin() {
    return  { type : TYPES.LOGIN_SHOW }
}
export function hideLogin() {
    return  { type : TYPES.LOGIN_HIDE }
}

export function getLocation() {
    return function (dispatch) {
        dispatch({type : TYPES.GETING_LOCATION});
        return Geolocation.getCurrentPosition().then(
            data => {
                Geolocation.reverseGeoCodeGPS(data.latitude,data.longitude).then(
                    data =>{
                        dispatch({type : TYPES.LOCATION_DONE,location:data.city});
                    }
                )

            }
        )
    }
}
