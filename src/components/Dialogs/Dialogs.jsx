import React from 'react';
import cl from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

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

    let dialogElem = props.messPage.dialogData.map(el => (<DialogItem name={el.name} id={el.id} key={el.id} />));
    let messageElem = props.messPage.messData.map(el => (<MessageItem mess={el.mes} key={el.id} />));
    let messageTemp = props.messPage.newMess; //значение промежуточной переменной в стате при наборе текста
//теперь не надо, после использования библиотеки форм
    // let onChangeMess = (e) => {
    //     let body = e.target.value; //обращаемся к значению элемента 
    //     return props.updateMessCreate(body);  // и передаем его параметром в функцию для изменения "messageTemp"
    // }
    // let onClickAddMess = () => {
    //     return props.clickAddMessCreate(); //даем команду запушить "messageTemp" в массив "messData"
    // }

    if (!props.isAuth) return <Redirect to="/login" />;
let onSendMessage = (formData) => {
    //alert(formData.messageBody);
    props.clickAddMessCreate(formData.messageBody);
    //используем старую функцию для отправки сообщения. 
    //оно теперь не имеет промежуточного хранилища
    // пропсы приходят по названию полей из формы 
    //name="messageBody" == formData.messageBody
}
    return (
        <div>

            <div className={cl.dialogs}>
                <div className={cl.dialogBox}>
                    {dialogElem}
                </div>
                <div className={cl.messageBox}>
                    <div>{messageElem}</div>

                    {/* было раньше
                   <div><textarea placeholder="Hi" 
                        onChange={ onChangeMess }
                        value={ messageTemp }
              
                   ></textarea></div>
                   <div><button onClick={ onClickAddMess } >Send</button></div> */}
                    <AddMessageFormRedux onSubmit={onSendMessage} />
                    {/* onSubmit при нажатии, форма передает собранные данные через onSubmit={props.handleSubmit} 
                    в родителя onSubmit={onSendMessage}(это callback родителю) где будут лежать все данные из формы*/}
                </div>
            </div>
        </div>
    );
}
//что-то вроде регистрации Field в системе с указанием имени 
//store.getState().form в консоли выведет настоящее состояние формы
//отрисовываем этот компонент
const AddMessageForm = (props) => {
    // стандартный пропс onSubmit={props.handleSubmit}
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name="messageBody" placeholder="Введите сообщение" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm); //компонент, который надо обернуть контейнерной компонентой

