import React from 'react'
import cl from './Nav.module.css'
import {NavLink} from 'react-router-dom'

export const Nav = () => {

    return (
        <div className={cl.side}>
            <ul>
                <li className={cl.item}>
                    <NavLink to="/profile" activeClassName={cl.active}>О нас</NavLink>
                </li>
                <li className={cl.item}>
                    <NavLink to="/dialogs" activeClassName={cl.active}>Контакты</NavLink>
                </li>
                <li className={cl.item}><a href="#">Стратегия</a></li>
                <li className={cl.item}><a href="#">О компании</a></li>
                <li className={cl.item}><a href="#">Справка</a></li>
            </ul>
        </div>
    )
}