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
                userId:action.data.userId,
                isAuth: true,
                
            }
        }
       

        default:
            return state;
    }
}

export const setAuthAC = (userId, email, login) => ({type: AUTHORIZED, data: {userId, email, login} });
export const getAuth = () => (dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            
       if(response.data.resultCode === 0){
         
           let { id, email, login } = response.data.data;
       
        dispatch(setAuthAC(id, email, login));      
       }
        
       
    });
}
export default authReducer;