/**
 * Created by mrd on 16/11/4.
 */
import * as Type from '../contants/types';

export function showLogin() {
    return  { type : Type.LOGIN_SHOW }
}
export function hideLogin() {
    return  { type : Type.LOGIN_HIDE }
}