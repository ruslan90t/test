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
                <li className={cl.item}>
                <NavLink to="/strategy" activeClassName={cl.active}>Стратегия</NavLink>
                    </li>
                <li className={cl.item}>
                <NavLink to="/about" activeClassName={cl.active}>О компании</NavLink>
                    </li>
                <li className={cl.item}>
                <NavLink to="/spravka" activeClassName={cl.active}>Справка</NavLink>
                    </li>
            </ul>
        </div>
    )
}