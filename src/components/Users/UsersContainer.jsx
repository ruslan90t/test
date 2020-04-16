import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, curPageAC, isFetchCA, followingProgressAC } from '../../redux/usersReducer';
import { totalCountAC, getUsersThunkCreator } from './../../redux/usersReducer';
import { UserRend } from './UserRend';
import * as axios from 'axios'
import { usersAPI } from './../../api/api';
import { Preloader } from '../various/Preloader/Preloader'
import { getTotalCount, getPageSize, getUsers, getCurrentPage, getIsFetch, getFollowingProgress } from '../../redux/userSelectors';

class UsersContainer extends React.Component {


    componentDidMount() {
        // if (this.props.users.length == 0) {
            
        this.props.setIsFetch(true);
        //console.log('startDidMount', this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{}, {
            withCredentials: true,
            headers: {
                'API_KEY': '40032642-32d2-49fc-be33-3e427fdb928c'
            }
        }).then(data => {
            this.props.setIsFetch(false);
            this.props.setUsers(data.data.items);
            this.props.setTotalCount(data.data.totalCount);

            });
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     console.log('UsersContainer-responce',data);
           
        //         this.props.setIsFetch(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalCount(data.totalCount);
        //     });
        } 
        //все выше переместили в getUsersThunkCreator. this.props.setIsFetch был переименован от isFetchCA(актион креатор). 
        //там нужно диспатчить именно актион-креаторы
        //this.props.getUsers(this.props.currentPage, this.props.pageSize);
    
    componentDidUpdate() { }
    componentWillUnmount() { }
    setCurPage = (numPage) => {
      
        //this.props.getUsers( numPage, this.props.pageSize);
        this.props.setIsFetch(true);
        this.props.curPage(numPage);
        console.log('setCurPage', this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`,{}, {
                                    withCredentials: true,
                                    headers: {
                                        'API_KEY': '40032642-32d2-49fc-be33-3e427fdb928c'
                                    }
                                }).then(data => {
                console.log('setCurPage-responce', data);   
                this.props.setIsFetch(false);
                this.props.setUsers(data.data.items);
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
                followingProgress={this.props.followingProgress}

            />
        </>
    }

}
//было раньше
// let mapStateToProps = (state) => {

//     return {
//         //передается в презентационную компоненту для вызова callback с параметрами
//         //имя props - значение из state
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetch: state.usersPage.isFetch,
//         followingProgress: state.usersPage.followingProgress

//     }
// }
//будем использовать селекторы
let mapStateToProps = (state) => {

        return {
            //передается в презентационную компоненту для вызова callback с параметрами
            //имя props - значение из state
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalCount: getTotalCount(state),
            currentPage: getCurrentPage(state),
            isFetch: getIsFetch(state),
            followingProgress: getFollowingProgress(state)
    
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
    setIsFetch: isFetchCA,
    followingProgress: followingProgressAC,
    getUsers: getUsersThunkCreator
})(UsersContainer);

