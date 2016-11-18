/**
 * Created by mrd on 16/11/3.
 */
import { combineReducers } from 'redux';
import userReducer from './user';
import tabsReducer from './tabs';
import catsReducer from './cat';
import headlineReducer from './headline';
import dataReducer from './data';

export default combineReducers({
    userStore: userReducer,
    tabsStore: tabsReducer,
    catsStore: catsReducer,
    headlineStore: headlineReducer,
    dataStore: dataReducer
});