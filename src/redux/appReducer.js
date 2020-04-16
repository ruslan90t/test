import { usersAPI, profileAPI } from './../api/api';
import { getAuth } from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';


//инициализируем начальное состояние
let initialState = {

    initialized: false
}
//если нет state, используем значение по умолчанию state = initialState
const appReducer = (state = initialState, action) => {  //тут state == state.messPage из диалог.контейнера

    switch (action.type) {


        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state;
    }
}

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initApp = () => (dispatch) => {
    //только если вызов функции getAuth имеет return
    let promise = dispatch(getAuth());
//как только придет ответ, выполнить установку инициализацию
    promise.then(() => {
        dispatch(setInitialized());
    });
    
}




export default appReducer;