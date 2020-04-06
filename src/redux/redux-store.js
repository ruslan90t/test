import { combineReducers, createStore } from 'redux';
import postPageReducer from './postPageReducer';
import messPageReducer from './messPageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';


let reducers = combineReducers({
    postPage: postPageReducer,
    messPage: messPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
   
})

const store = createStore(reducers); //создаем store средствами библиотеки redux

window.store = store; //теперь можно в консоли смотреть данные через вызов store.getState() и т.д (getState() - наш созданный метод для установки state)

export default store;