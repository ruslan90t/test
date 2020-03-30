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
    //console.log("Dialogs", props);
    // let dialogData = [{id: 1,name: "Артем"},{id: 2,name: "Саша"}];
    // let messData = [{id: 1,mes: "привет"},{id: 2,mes: "как дела?"}];
    // console.log("Dialogs", props);

    let dialogElem = props.messPage.dialogData.map( (el) => ( <DialogItem name={el.name} id={el.id} /> ));
    let messageElem = props.messPage.messData.map( (el) => (<MessageItem mess={el.mes} />));
    let messageTemp = props.messPage.newMess; //значение промежуточной переменной в стате при наборе текста

    let onChangeMess = (e) => {
       let body = e.target.value; //обращаемся к значению элемента 
       return props.updateMessCreate(body);  // и передаем его параметром в функцию для изменения "messageTemp"
    }
    let onClickAddMess = () => {
        return props.clickAddMessCreate(); //даем команду запушить "messageTemp" в массив "messData"
    }

    return (
        <div>
            <div className={cl.dialogs}>
                <div className={cl.dialogBox}>
                   {dialogElem}
                </div>
                <div className={cl.messageBox}>
                   <div>{messageElem}</div>
                   <div><textarea placeholder="Hi" 
                        onChange={ onChangeMess }
                        value={ messageTemp }
              
                   ></textarea></div>
                   <div><button onClick={ onClickAddMess } >Send</button></div>
                </div>
            </div>
        </div>
    );
}

