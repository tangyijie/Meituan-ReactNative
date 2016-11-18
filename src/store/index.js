/**
 * Created by mrd on 16/11/2.
 */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from '../reducers';

// export default function configureStore(onComplete: ()=>void){
//     const store = autoRehydrate()(createAppStore)(reducers);
//     let opt = {
//         storage: AsyncStorage,
//         transform: [],
//     };
//     persistStore(store, opt, onComplete);
//     return store;
// }

export default function configureStore(){
    const store = createStore(reducers,applyMiddleware(...middlewares))
    return store;
}

//添加中间件
const middlewares = [
    thunk
];

// let createAppStore = applyMiddleware(...middlewares);
//
//
// let store = createStore(reducers);
//
// let next = store.dispatch;
//
// store.dispatch = logger(store);
//
// function logger(store) {
//     let next = store.dispatch
//     return function dispatchAndLog(action) {
//         let result = next(action)
//         return result
//     }
//
// }