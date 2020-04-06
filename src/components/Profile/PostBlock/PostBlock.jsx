import React from 'react'
import cl from './PostBlock.module.css'
import { Preloader } from '../../various/Preloader/Preloader';

export const PostBlock = (props) => {
//console.log('PostBlock', props);

if(!props.profile){

    return <Preloader />
}

    return (
        <div className={cl.postBlock}>
            <div>
                <img src="http://wallpapers-image.ru/1280x800/cars/wallpapers/wallpapers-cars-09.jpg" />
            </div>
    <br/><p>{props.profile.fullName}</p>
            <div>
                
                <img className={cl.ava} src={props.profile.photos.large} alt={props.profile.aboutMe}/> 
               
               <br/>
                Ava++++desc
            </div>
        </div>
    )
}