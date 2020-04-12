import { combineReducers, createStore, applyMiddleware } from 'redux';
import postPageReducer from './postPageReducer';
import messPageReducer from './messPageReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'; 

let reducers = combineReducers({
    postPage: postPageReducer,
    messPage: messPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer  //обязательно называем form
   
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware)); //создаем store средствами библиотеки redux
//applyMiddleware(thunkMiddleware) - магия для создания каких-то слоев
window.store = store; //теперь можно в консоли смотреть данные через вызов store.getState() и т.д (getState() - наш созданный метод для установки state)

export default store;