import * as axios from 'axios';
export const API_KEY = '09565852-eae1-412d-b9cc-da8116f41656';

//создаем все параметры-настройки внутри объекта instance и они присутствуют уже по умолчанию
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API_KEY': API_KEY
    }
});
export const authAPI = {
    me() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            // headers: {
            //     'API_KEY': API_KEY
            // }
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
                'API-KEY': API_KEY
            }
        })
        //конечный вариант
        // return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getUsersProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object');
        //начальный способ до делегирования и создания profileAPI
    //    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, {
    //     withCredentials: true,
    //     headers: {
    //         'API_KEY': API_KEY
    //     }
    //    });
    //делегирование выполнения в нормальный метод
        return profileAPI.getUsersProfile(userId);
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get( baseUrl + `users?page=${currentPage}&count=${pageSize}`)
//         .then( response => response.data);
// }
export const profileAPI = {
  
    getUsersProfile(userId) {
       return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, {
        withCredentials: true,
        // headers: {
        //     'API_KEY': API_KEY
        // }
       });  
    },
    getStatus(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/`+ userId, {
         withCredentials: true,
        //  headers: {
        //      'API_KEY': API_KEY
        //  }      
        });  
     },
     updateStatus(status, ) {
        //было так, но пишет что put & post не поддерживаются
        // return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status/6979`, {
        //  withCredentials: true,
        // //  headers: {
        // //      'API_KEY': API_KEY
        // //  }
        // },
        // {status: status});  
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/6979`, {
            withCredentials: true,
           //  headers: {
           //      'API_KEY': API_KEY
           //  }
           },
           {status: status}); 
     },
}