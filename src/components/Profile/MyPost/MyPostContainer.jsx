import React from 'react'
import {MyPost} from './MyPost'
import {clickActionCreate, updateActionCreate} from '../../../redux/postPageReducer'

export const MyPostContainer = (props) => {

    // console.log("MyPostContainer", props);

    let state = props.store.getState(); // получаем в state структуру store и обращаемся через него к нужным полям
     
    //console.log("state", state);

    let click = () => {  
        props.store.dispatch(clickActionCreate());
    }

    let onChangePost = (text) => {
        props.store.dispatch(updateActionCreate(text));
    }

    return (
        <MyPost postPage={state.postPage} 
        clickActionCreate={ click } updateActionCreate={ onChangePost }/>
    )
}



