import React from 'react'
import {MyPost} from './MyPost'
import {clickActionCreate, updateActionCreate} from '../../../redux/postPageReducer'

export const MyPostContainer = (props) => {
console.log("MyPostContainer", props);
    //let state = props.store.getState();

    let click = () => {  
        props.dispatch(clickActionCreate());
    }

    let onChangePost = (text) => {
        props.dispatch(updateActionCreate(text));
    }

    return (
        <MyPost postPage={props.store.postPage} dispatch={props.dispatch}
        clickActionCreate={ click } updateActionCreate={ onChangePost }/>
    )
}



