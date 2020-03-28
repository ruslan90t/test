import React from 'react'
import {MyPost} from './MyPost/MyPost'
import cl from './Profile.module.css'
import { PostBlock } from './PostBlock/PostBlock'


export const Profile = (props) => {
  
    return (
        <div>
            {/* компонент ждет props.postData */}
            <PostBlock postData={props.dataDB.postData}  /> 
            <MyPost postData={props.dataDB.postData} newVal={props.dataDB.newVal} dispatch={props.dispatch}/>
        </div>
    )
}