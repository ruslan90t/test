import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, curPageAC } from '../../redux/usersReducer';
import { totalCountAC } from './../../redux/usersReducer';
import { UserRend } from './UserRend';
import * as axios from 'axios'

class Users extends React.Component {

    componentDidMount() {
        // if (this.props.users.length == 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log('data', response.data);
                this.props.setTotalCount(response.data.totalCount);
            });
        // }
    }
    componentDidUpdate() {}
    componentWillUnmount() {}
    setCurPage = (numPage) => {

        this.props.curPage(numPage);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {

        return <UserRend users={this.props.users}
            currentPage={this.props.currentPage}
            setCurPage={this.setCurPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
        />
    }

}

let mapStateToProps = (state) => {

    return {
        //передается в презентационную компоненту для вызова callback с параметрами
        //имя props - значение из state
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount

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
        },
        curPage: (num) => {
            dispatch(curPageAC(num));
        },
        setTotalCount: (val) => {
            dispatch(totalCountAC(val));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);