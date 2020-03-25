import React from 'react'
import cl from './Nav.module.css'

export const Nav = () => {

    return (
        <div className={cl.side}>
            <ul>
                <li className={`${cl.item} ${cl.active}`}><a href="/profile">О нас</a></li>
                <li className={cl.item}><a href="/dialogs">Контакты</a></li>
                <li className={cl.item}><a href="#">Стратегия</a></li>
                <li className={cl.item}><a href="#">О компании</a></li>
                <li className={cl.item}><a href="#">Справка</a></li>
            </ul>
        </div>
    )
}