const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let a = 'https://im0-tub-by.yandex.net/i?id=49f810ee067ed8d61b3657915e4c09e4&n=13',
    b = 'https://i.pinimg.com/originals/6e/46/0c/6e460ceb4ecf9a1574d1dc52a6a836b4.png',
    c = 'https://www.fabulatech.com/img/main/fabulatech-logo-1600.png',
    d = 'https://www.druzbahotel.sk/wp-content/uploads/2016/11/logo-hp.png';

let initialState = {
        users: [
            // { id: 1, photo: a, follow: true, fullName: "Артем", status: "Ok", location: {city: "Minsk", country: "Belarus"} },
            // { id: 2, photo: b, follow: false, fullName: "Илья", status: "Ok" , location: {city: "Moscow", country: "Russia"} },
            // { id: 3, photo: c, follow: false, fullName: "Олег", status: "No", location: {city: "Kiev", country: "Ukraine"}  },
            // { id: 4, photo: d, follow: false, fullName: "Виталик", status: "Zzz.." , location: {city: "London", country: "England"} },
            // { id: 5, photo: a, follow: true, fullName: "Петя", status: "Yes", location: {city: "Gomel", country: "Belarus"} },
            // { id: 6, photo: b, follow: true, fullName: "Саша", status: "Ok", location: {city: "Vitebsk", country: "Belarus"} }
        ]
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {  //при изменении элемента в массиве, использовать этот метод создания копии
                if(u.id === action.userId){
                    return {...u, follow: true}  //возвращаем копию выбранного объекта, с измененным follow
                }
                return u;
            })
        }
       
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {  
                if(u.id === action.userId){
                    return {...u, follow: false}  
                }
                return u;
            })
        }

        case SET_USERS: 
            //склеиваем 2 массива, копию старого и новый, пришедший
        return { ...state, users: [ ...state.users, ...action.users ]} 
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return { type: FOLLOW, userId }
 };
export const unfollowAC = (userId) => {
    
       return {type: UNFOLLOW, userId}
 }
 //придут данные с сервера или еще откуда, и их закинем в state
export const setUsersAC = (users) => {
    
    return {type: SET_USERS, users}
}
export default usersReducer;