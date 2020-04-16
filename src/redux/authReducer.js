import { usersAPI, API_KEY } from './../api/api';
import * as axios from 'axios';
import { stopSubmit } from 'redux-form';


const AUTHORIZED = 'AUTHORIZED';


//инициализируем начальное состояние
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userId: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTHORIZED: {
            // console.log('AUTHORIZED', action.data);
            return {
                ...state,
                ...action.data,
                userId: action.data.userId,

            }
        }


        default:
            return state;
    }
}

export const setAuthAC = (userId, email, login, isAuth) => ({ type: AUTHORIZED, data: { userId, email, login, isAuth } });
export const getAuth = () => (dispatch) => {
    //если return то вызов getAuth вернет промисы
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
    }).then(response => {
console.log('getAuth', response);
        if (response.data.resultCode === 0) {

            let { id, login , email} = response.data.data;

            dispatch(setAuthAC(id, email, login, true));
        }


    });
}

export const login = (email, password, rememberMe = false) => (dispatch) => {
    //подсветка формы по имени поля email: 'Email is wrong'
    // let action = stopSubmit('login',{email: 'Email is wrong'}); //ActionCreator из коробки, говорит что нельзя сабмитить форму
    //вывели сюда для теста
    // let action = stopSubmit('login',{_error: 'Пароль или логин неправильные'});//общая на систему ошибка без конкретики
    // dispatch(action); 
    // return;
    
    axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email,
        password,
        rememberMe}, {
            withCredentials: true,
        }).then(response => {
//console.log('const login', response);
        if (response.data.resultCode === 0) {

            dispatch(getAuth());
        }else {                    //'login'-имя формы;{email: 'email is wrong'}-проблемное поле
            // let action = stopSubmit('login',{email: 'email is wrong'}); //ActionCreator из коробки, говорит что нельзя сабмитить форму
            // dispatch(action);    
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('login',{_error: message}));      
        }
});
}
//при отправке на сервер, удалится cookie
export const logout = () => (dispatch) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
        withCredentials: true,
    }).then(response => {
        console.log('const logout', response);
        if (response.data.resultCode === 0) {

            dispatch(setAuthAC(null, null, null, false));
        };
});
}
export default authReducer;