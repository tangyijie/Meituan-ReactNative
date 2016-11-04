/**
 * Created by mrd on 16/11/3.
 */
import * as Type from '../contants/types';
export function goHomePage() {
    return  { type : Type.TAB_HOME }
}
export function goMorePage() {
    return  { type : Type.TAB_MORE }
}
export function goPersonPage() {
    return  { type : Type.TAB_PERSON }
}
export function goShopPage() {
    return  { type : Type.TAB_SHOP }
}