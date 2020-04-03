// import React from 'react';
// import cl from './Users.module.css'
// import * as axios from 'axios';
// import userPhoto from '../../assets/img/kristallTreid.png'


// export const Users = (props) => {
//     //console.log(props)


//     let a = 'https://im0-tub-by.yandex.net/i?id=49f810ee067ed8d61b3657915e4c09e4&n=13',
//         b = 'https://i.pinimg.com/originals/6e/46/0c/6e460ceb4ecf9a1574d1dc52a6a836b4.png',
//         c = 'https://www.fabulatech.com/img/main/fabulatech-logo-1600.png',
//         d = 'https://www.druzbahotel.sk/wp-content/uploads/2016/11/logo-hp.png';

//  let getUsers = () => {
//     if (props.users.length == 0) {

//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then( response => {
//             props.setUsers(response.data.items)
//         });
  
//     }
//  }

//     return (
//         <div>
//             <button onClick={ getUsers }>Get users</button>
//             {
//                 props.users.map(u => <div key={u.id}> <span>
//                     <div>
//                         <img src={ u.photos.large ? u.photos.large : `${userPhoto}`} />
//                     </div>
//                     <div>
//                         {/* вызываем функции, переданные в userReducer под соответствующими названиями полей */}
//                         {u.follow
//                             ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//                             : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

//                     </div>
//                 </span>
//                     <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{"u.status"}</div>
//                         </span>
//                         <span>
//                             <div>{"u.location.city"}</div>
//                             <div></div>
//                         </span>
//                     </span>
//                 </div>)
//             }
//         </div>
//     )
// }