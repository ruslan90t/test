import {MyPost} from './MyPost'
import {clickActionCreate, updateActionCreate} from '../../../redux/postPageReducer'
import { connect } from 'react-redux';

// export const MyPostContainer = (props) => {

//     // console.log("MyPostContainer", props);

//     let state = props.store.getState(); // получаем в state структуру store и обращаемся через него к нужным полям
     
//     //console.log("state", state);

//     let click = () => {  
//         props.store.dispatch(clickActionCreate());
//     }

//     let onChangePost = (text) => {
//         props.store.dispatch(updateActionCreate(text));
//     }

//     return (
//         <MyPost postPage={state.postPage} 
//         clickActionCreate={ click } updateActionCreate={ onChangePost }/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        postData: state.postPage.postData,
        newVal: state.postPage.newVal
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // clickActionCreate: () => {
        //     dispatch(clickActionCreate());
        // },
        // updateActionCreate: (text) => {
        //     dispatch(updateActionCreate(text));
        // }
        clickActionCreate: (newPostText) => {
            dispatch(clickActionCreate(newPostText));
        },
    }
}
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)( MyPost );

