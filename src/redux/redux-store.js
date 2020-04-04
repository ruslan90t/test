import { combineReducers, createStore } from 'redux';
import postPageReducer from './postPageReducer';
import messPageReducer from './messPageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
    postPage: postPageReducer,
    messPage: messPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
   
})

const store = createStore(reducers); //создаем store средствами библиотеки redux

export default store;