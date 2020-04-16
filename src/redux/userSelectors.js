
//плюсы в том что при изменении формата данных на сервере, не недо в каждом месте менять этот формат, он указывается тут
//минус если селектор делает какую-то логику и вчисления, это тормозит и невозможно дебажить
//она возвращает новый массив, что в свою очередь вызывает ненужный ререндер.(даже если данне и не менялись)
//страница селекторов users: state.usersPage.users, ->  users: getUsers(state), (UsersContainer.js)
export const getUsers = (state) => {
    return state.usersPage.users
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetch = (state) => {
    return state.usersPage.isFetch
}
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress
}


