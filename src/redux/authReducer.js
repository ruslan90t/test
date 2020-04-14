import { usersAPI, API_KEY } from './../api/api';
import * as axios from 'axios';


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
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
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
    
    axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email,
        password,
        rememberMe}, {
            withCredentials: true,
        }).then(response => {
console.log('const login', response);
        if (response.data.resultCode === 0) {

            dispatch(getAuth());
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