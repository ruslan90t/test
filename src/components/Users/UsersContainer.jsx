import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, curPageAC, isFetchCA } from '../../redux/usersReducer';
import { totalCountAC } from './../../redux/usersReducer';
import { UserRend } from './UserRend';
import * as axios from 'axios'
import { Preloader } from './../various/Preloader/Preloader';

class Users extends React.Component {

    componentDidMount() {
        // if (this.props.users.length == 0) {
        this.props.setIsFetch(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetch(false);
                this.props.setUsers(response.data.items);
                console.log('data', response.data);
                this.props.setTotalCount(response.data.totalCount);
            });
        // }
    }
    componentDidUpdate() { }
    componentWillUnmount() { }
    setCurPage = (numPage) => {

        this.props.setIsFetch(true);
        this.props.curPage(numPage);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetch(false);
                this.props.setUsers(response.data.items);
            });
    }
    render() {


        return <>
            {this.props.isFetch
                ? <Preloader />
                : null}
            {//console.log("UsersContainer", this.props)}
            }
            <UserRend users={this.props.users}
                currentPage={this.props.currentPage}
                setCurPage={this.setCurPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}

            />
        </>
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
        totalCount: state.usersPage.totalCount,
        isFetch: state.usersPage.isFetch

    }
}
//обращение из компоненты будет к follow, unfollow,setUsers -> они передадутся в пропсах
/* заменяем на короткую схему. передаем ссылки на реальный объект с actionCreate    |
let mapDispatchToProps = (dispatch) => {                                            |
                                                                                    |
    return {                                                                        |
        follow: (userId) => {                                                       v
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
        },
        setIsFetch: (val) => {
            dispatch(isFetchCA(val));
        }
    }
}
*/
export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    //для показа пользователей сразу, при заходе на страницу. имитация нажатия кнопки
    setUsers: setUsersAC,
    curPage: curPageAC,
    setTotalCount: totalCountAC,
    setIsFetch: isFetchCA
})(Users);

