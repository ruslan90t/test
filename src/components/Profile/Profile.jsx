import React from 'react'
import { PostBlock } from './PostBlock/PostBlock'
import { MyPostContainer } from './MyPost/MyPostContainer'


export const Profile = (props) => {
     //console.log("Profile", props);
    return (
        <div>
            {/* компонент ждет props.postData */}
            <PostBlock   /> 
            <MyPostContainer store={props.store} />
        </div>
    )
}