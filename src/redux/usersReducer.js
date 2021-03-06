import { usersAPI } from './../api/api';




const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CUR_PAGE = 'CUR_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_FETCH = 'TOGGLE_FETCH';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';
// let a = 'https://im0-tub-by.yandex.net/i?id=49f810ee067ed8d61b3657915e4c09e4&n=13',
//     b = 'https://i.pinimg.com/originals/6e/46/0c/6e460ceb4ecf9a1574d1dc52a6a836b4.png',
//     c = 'https://www.fabulatech.com/img/main/fabulatech-logo-1600.png',
//     d = 'https://www.druzbahotel.sk/wp-content/uploads/2016/11/logo-hp.png';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetch: false,
    followingProgress: false
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {  //при изменении элемента в массиве, использовать этот метод создания копии
                    if (u.id === action.userId) {
                        return { ...u, follow: true }  //возвращаем копию выбранного объекта, с измененным follow
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            //склеиваем 2 массива, копию старого и новый, пришедший
            //console.log('SET_USERS');
            return { ...state, users: action.users }

        case CUR_PAGE:
            return { ...state, currentPage: action.currentPage }
        case TOTAL_COUNT:

            return { ...state, totalCount: action.totalCount }

        case TOGGLE_FETCH:
            return { ...state, isFetch: action.isFetch }

        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.progress
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return { type: FOLLOW, userId }
};
export const unfollowAC = (userId) => {

    return { type: UNFOLLOW, userId }
}
//придут данные с сервера или еще откуда, и их закинем в state
export const setUsersAC = (users) => {

    return { type: SET_USERS, users }
}
export const curPageAC = (curPage) => {

    return { type: CUR_PAGE, currentPage: curPage }
}
export const totalCountAC = (count) => {
    return { type: TOTAL_COUNT, totalCount: count }
}
export const isFetchCA = (isFetch) => ({ type: TOGGLE_FETCH, isFetch })
export const followingProgressAC = (progress) => ({ type: FOLLOWING_PROGRESS, progress })


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(isFetchCA(true));
        dispatch(curPageAC(currentPage));
        
        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setUsersAC(data.items));
            //console.log('getUsersThunk-responce', data);
            dispatch(curPageAC(currentPage));
            dispatch(isFetchCA(false));
            dispatch(totalCountAC(data.totalCount));
        });
    }
}


export default usersReducer;