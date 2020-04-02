import React from 'react'
import cl from './Nav.module.css'
import {NavLink} from 'react-router-dom'

export const Nav = () => {

    return (
        <div className={cl.side}>
            <ul>
                <li className={cl.item}>
                    <NavLink to="/profile" activeClassName={cl.active}>Профиль</NavLink>
                </li>
                <li className={cl.item}>
                    <NavLink to="/dialogs" activeClassName={cl.active}>Сообщения</NavLink>
                </li>
                <li className={cl.item}>
                <NavLink to="/users" activeClassName={cl.active}>Пользователи</NavLink>
                    </li>
                <li className={cl.item}>
                <NavLink to="/about" activeClassName={cl.active}>Музыка</NavLink>
                    </li>
                <li className={cl.item}>
                <NavLink to="/spravka" activeClassName={cl.active}>Настройки</NavLink>
                    </li>
            </ul>
        </div>
    )
}