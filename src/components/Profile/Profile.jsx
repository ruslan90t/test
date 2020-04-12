import React from 'react';
import { PostBlock } from './PostBlock/PostBlock';
import { MyPostContainer } from './MyPost/MyPostContainer';


export const Profile = (props) => {
    
    

    return (
        <div>
            {/* компонент ждет props.postData */}
            <PostBlock  profile={props.profile} 
                        status={props.status}
                        updateStatus={props.updateStatus}/> 
            <MyPostContainer store={props.store} />
        </div>
    )
}