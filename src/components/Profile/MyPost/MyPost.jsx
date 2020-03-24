import React from 'react'
import {PostItem} from './PostItem/PostItem'
import cl from './MyPost.module.css'

export const MyPost = () => {

    return (
        <div>My posts
            <textarea></textarea>
            <button>Добавить</button>
  <div>New ppost</div>
           <div>
           <PostItem message='Hi! How are you?' />
           <PostItem message="This is my first post" />
           </div>
       </div>
    )
}



 