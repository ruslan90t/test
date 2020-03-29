import { combineReducers, createStore } from 'redux';
import postPageReducer from './postPageReducer';
import messPageReducer from './messPageReducer';
import sidebarReducer from './sidebarReducer';


let reducers = combineReducers({
    postPage: postPageReducer,
    messPage: messPageReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers);

export default store;