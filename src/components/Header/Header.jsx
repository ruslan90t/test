import React from 'react';
import cl from'./Header.module.css';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {

    console.log('Header', props);

    return (
        <div className={cl.header}>
            <div className={cl.logo}>
                <img src="https://cdn3.sportngin.com/attachments/photo/7734/8653/Spartans_2100_1300_large.png" />
                { props.isAuth 
                ? <div className={cl.login}> {props.login} </div>
                : <NavLink  to='/login' className={cl.login}> Login </NavLink>
                }
                
            </div>
        </div>
    )

}