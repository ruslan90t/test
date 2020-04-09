import * as axios from 'axios';


//создаем все параметры-настройки внутри объекта instance и они присутствуют уже по умолчанию
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API_KEY': '20b777e9-0551-4ac2-8698-69bffee964e9'
    }
});
export const authAPI = {
    me() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API_KEY': '20b777e9-0551-4ac2-8698-69bffee964e9'
            }
        });
    }
}

export const usersAPI = {
    getUsers(currentPage=3, pageSize=5) {
        
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
       
    },
    follow(userId) {
        return  instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        //начальный вариант
     return  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '20b777e9-0551-4ac2-8698-69bffee964e9'
            }
        })
        //конечный вариант
        // return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getUsersProfile(userId) {
       return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, {
        withCredentials: true,
        headers: {
            'API_KEY': '20b777e9-0551-4ac2-8698-69bffee964e9'
        }
       });
        
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get( baseUrl + `users?page=${currentPage}&count=${pageSize}`)
//         .then( response => response.data);
// }
