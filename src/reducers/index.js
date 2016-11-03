/**
 * Created by mrd on 16/11/3.
 */
import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
    userStore: userReducer,
});