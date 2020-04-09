import { usersAPI } from './../api/api';
import * as axios from 'axios';

const AUTHORIZED = 'AUTHORIZED';


//инициализируем начальное состояние
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTHORIZED: 

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthAC = (userId, email, login) => ({type: AUTHORIZED, data: {userId, email, login} });
export const getAuth = () => (dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API_KEY': '20b777e9-0551-4ac2-8698-69bffee964e9'
            }
        }).then(response => {
       if(response.data.resultCode === 0){
           let { id, email, login } = response.data.data;
        dispatch(setAuthAC(id, email, login));      
       }
        
       
    });
}
export default authReducer;