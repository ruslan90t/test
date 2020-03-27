import React from 'react'
import cl from './PostItem.module.css'

export const PostItem = (props) => {

    return (

        <div className={cl.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1879671/34a7ab13-248b-4866-845e-4f86b6a6cc18/s1200?webp=false" />
                  {props.message}
            <div>
    <span>{props.likeCount}</span>
            </div>
        </div>

    )
}
