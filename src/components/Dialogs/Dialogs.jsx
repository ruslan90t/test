import React from 'react'
import cl from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={cl.dialogItem + ' ' + cl.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {

    return (
        <div className={cl.messageItem}>
            {props.mess}
        </div>
    )
}

export const Dialogs = (props) => {

    // let dialogData = [{id: 1,name: "Артем"},{id: 2,name: "Саша"}];
    // let messData = [{id: 1,mes: "привет"},{id: 2,mes: "как дела?"}];

    let dialogElem = props.dataDB.dialogData.map( (el) => ( <DialogItem name={el.name} id={el.id} /> ));

    let messageElem = props.dataDB.messData.map( (el) => (<MessageItem mess={el.mes} />));
    return (
        <div>
            <div className={cl.dialogs}>
                <div className={cl.dialogBox}>
                   {dialogElem}
                </div>
                <div className={cl.messageBox}>
                   {messageElem}
                </div>
            </div>
        </div>
    );
}