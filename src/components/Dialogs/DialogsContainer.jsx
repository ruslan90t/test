import React from 'react'
import { clickAddMessCreate, updateMessCreate } from '../../redux/messPageReducer'
import { Dialogs } from './Dialogs'


export const DialogsContainer = (props) => {

    //console.log("DialogItem", props);

   let state = props.store.getState().messPage;
   //console.log("DialogItem", state);


    let onChangeMess = (body) => {
       
       return props.store.dispatch(updateMessCreate(body));  // и передаем его параметром в функцию для изменения "messageTemp"
    }
    let onCkickAddMess = () => {
        return props.store.dispatch(clickAddMessCreate()); //даем команду запушить "messageTemp" в массив "messData"
    }


    return (
       <Dialogs updateMessCreate={onChangeMess} clickAddMessCreate={onCkickAddMess} messPage={state} />
    );
}