import React from 'react'
import cl from './Profile.module.css'

export const Profile = () => {

    return (
        <div className={cl.content}>
            <div>
                <img src="http://wallpapers-image.ru/1280x800/cars/wallpapers/wallpapers-cars-09.jpg" />
            </div>
            <div>
                Ava+desc
        </div>
            <div>My posts
       <div>New ppost</div>
                <div>
                    <div className={cl.item}><a href="#">post 1</a></div>
                    <div className={cl.item}><a href="#">post 2</a></div>
                </div>
            </div>

        </div>
    )
}