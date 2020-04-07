import * as axios from 'axios'

//создаем все параметры-настройки внутри объекта instance и они присутствуют уже по умолчанию

const instance = axios.create({

    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '40032642-32d2-49fc-be33-3e427fdb928c'
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
       
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then( response => response.data);
           
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get( baseUrl + `users?page=${currentPage}&count=${pageSize}`)
//         .then( response => response.data);
// }
