import React from 'react';
import cl from './Users.module.css';
import userPhoto from '../../assets/img/kristallTreid.png';

export const UserRend = (props) => {
    let res = Math.ceil(props.totalCount / props.pageSize); //округляем в большую сторону, чтоб не укорачивались страницы при делении с остатком
    let sum = [];
    for (let i = 1; i <= res; i++) {
        sum.push(i);
    }
    console.log("UserRend", props);
    return (
        <div>

            {sum.map(o => {
                return <span onClick={() => { props.setCurPage(o) }}
                    className={(props.currentPage === o) && (cl.selectedPage)}>{o}</span>
            })}
            
            {/* <button onClick={ this.getUsers }>Get users</button> */}
            {
                props.users.map(u => <div key={u.id}> <span>
                    <div>
                        {/* {u.photos.large || u.photos.small ? alert('1') : true} */}
                        <img src={u.photos.large ? u.photos.large : `${userPhoto}`} />
                    </div>
                    <div>
                        {/* вызываем функции, переданные в userReducer под соответствующими названиями полей */}
                        {u.follow
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

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