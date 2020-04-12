import { usersAPI, profileAPI } from './../api/api';
import * as axios from 'axios';

const POST_UPDATE = 'POST-UPDATE';
const POSTADD = 'POSTADD';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


//инициализируем начальное состояние
let initialState = {
    postData: [{ id: 1, post: "Hi! How are you?", likeCount: 20 }, { id: 2, post: "This is my first post", likeCount: 12 }],
    //newVal: '',
    profile: null,
    status: ''
}
//если нет state, используем значение по умолчанию state = initialState
const postPageReducer = (state = initialState, action) => {  //тут state == state.messPage из диалог.контейнера

    switch (action.type) {
        // case POST_UPDATE: {
        //     let stateCopy = { ...state };
        //     stateCopy.newVal = action.post;
        //     return stateCopy;
        // }
        case POSTADD: {
            let stateCopy = { ...state };
            let newPost = {
                id: 3,
                // post: action.newVal,
                post: action.newPostText,
                likeCount: 0
            };
            
            stateCopy.postData = [...state.postData];
            if (stateCopy.newVal != '') {
                stateCopy.postData.push(newPost);
            }
            stateCopy.newVal = '';
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile: action.val
            }
        }
        case SET_STATUS: {
            return {
                ...state, 
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const clickActionCreate = (newPostText) => {
    return { type: POSTADD, newPostText };
}
// export const clickActionCreate = () => {
//     return { type: POSTADD };
// }
//создаем экшн креатор и санку
export const setStatus = (status) => {
    return { type: SET_STATUS, status };
}
export const getStatus = (userId) => (dispatch) => {
    //диспатчим АС setUserProfileAC
    profileAPI.getStatus(userId).then(response => {
           
        dispatch(setStatus(response.data));
    });
    }
//санка для обновления статуса
export const updateStatus = (status) => (dispatch) => {
        //диспатчим АС setUserProfileAC
        profileAPI.updateStatus(status).then(response => {
           //// if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            //}    
            
        });
        }


// export const updateActionCreate = (text) => {
//     let action = { type: POST_UPDATE, post: text };
//     return action;
// }
//создаем экшн креатор и санку
export const setUserProfileAC = (val) => ({ type: SET_USER_PROFILE, val})
//thunk creator
export const getUserProfile = (userId) => (dispatch) => {
//диспатчим АС setUserProfileAC
axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId).then(response => {     
    dispatch(setUserProfileAC(response.data));
});

    // usersAPI.getUsersProfile(userId).then(response => {     
    //     dispatch(setUserProfileAC(response.data));
    // });
}

export default postPageReducer;