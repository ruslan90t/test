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

export default authReducer;