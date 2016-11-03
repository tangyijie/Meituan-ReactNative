/**
 * Created by mrd on 16/11/2.
 */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from '../reducers';

export default function configureStore(onComplete: ()=>void){
    const store = autoRehydrate()(createAppStore)(reducers);
    let opt = {
        storage: AsyncStorage,
        transform: [],
    };
    persistStore(store, opt, onComplete);
    return store;
}

let createAppStore = applyMiddleware(...middlewares)(createStore);

//添加中间件
let middlewares = [
    logger,
    thunk
];

let store = createStore(reducers);

let next = store.dispatch;

store.dispatch = logger(store);

function logger(store) {
    let next = store.dispatch
    return function dispatchAndLog(action) {
        let result = next(action)
        return result
    }

}