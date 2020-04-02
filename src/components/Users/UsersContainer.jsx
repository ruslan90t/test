import React from 'react'
import { connect } from 'react-redux';
import { Users } from './Users';
import { followAC, unfollowAC } from '../../redux/usersReducer';
import { setUsersAC } from './../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
//обращение из компоненты будет к follow, unfollow,setUsers -> они передадутся в пропсах
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        //для показа пользователей сразу, при заходе на страницу. имитация нажатия кнопки
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);