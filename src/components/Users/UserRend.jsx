import React from 'react';
import cl from './Users.module.css';
import userPhoto from '../../assets/img/kristallTreid.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'
import { usersAPI } from './../../api/api';

export const UserRend = (props) => {
   // console.log('UserRend', props);
    //let res = Math.ceil(props.totalCount / props.pageSize); //округляем в большую сторону, чтоб не укорачивались страницы при делении с остатком
    let sum = [];
    for (let i = 1; i <= 6; i++) {
        sum.push(i);
    }
    
    return (
        <div>

            {sum.map(o => {
                return <span onClick={() => { props.setCurPage(o); console.log("o", o) }}
                    className={(props.currentPage === o) && (cl.selectedPage)}>{o}</span>
            })}
            
            {/* <button onClick={ this.getUsers }>Get users</button> */}
            {
                props.users.map(u => <div key={u.id}> <span>
                    <div>
                        {/* {u.photos.large || u.photos.small ? alert('1') : true} */}
                        <NavLink to={'/profile/' + u.id} >
                            <img className={cl.user} src={u.photos.large ? u.photos.large : `${userPhoto}`} key={u.id}/>
                        </NavLink>
                    </div>
                    <div>
                        {/* вызываем функции, переданные в userReducer под соответствующими названиями полей */}
                        {u.follow
                            ? <button onClick={() => {  //в delete запросе withCredentials: true идет 2-м параметром
                                props.followingProgress(true);
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': '40032642-32d2-49fc-be33-3e427fdb928c'
                                //     }
                                // })
                                usersAPI.unfollow(u.id)
                                .then(response => {
                                   if(response.data.resultCode === 0){
                                    props.unfollow(u.id);
                                   }
                                   props.followingProgress(false);
                                });
                             }}>Unfollow</button>
                            : <button onClick={() => {  //в post запросе withCredentials: true идет 3-м параметром
                                props.followingProgress(true);
                                usersAPI.follow(u.id)
                                .then(response => {
                                    console.log("follow", response)
                                   if(response.data.resultCode === 0){
                                    props.follow(u.id);
                                   }
                                   props.followingProgress(false);
                                });
                                 }}>Follow</button>}

                    </div>
                </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{"u.status"}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div></div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}