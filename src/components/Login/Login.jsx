import React from 'react';
import {reduxForm, Field} from 'redux-form';

export const Login = () => {
//передаем в форму LoginForm через LoginReduxForm фнкцию onSubmit, в которую приходят данные (formData) из формы
//по умолчанию
    const onSubmit = (formData) => {
        console.log('onSubmit', formData);
    }

    return ( <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div> )
}

const LoginForm = (props) => {
  
//store.getState().form в консоли можно посмотреть состояние form
//вводим данные, не жмем кнопку, и вводим store.getState().form. смотрим значения values/ 
//можно смотреть параметры: изменен. посещен ли и т.д
//объект называется как мы его назвали  (form: 'login' // уникальное имя в прилоге)
//props.handleSubmit внутренний пропс
    return (    
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} component={'input'} name={'login'}/></div>
            <div><Field placeholder={'Password'} component={'input'} name={'Password'} /></div>
            <div><Field type={"checkbox"} component={'input'} name={'rememberMe'} /> Запомнить меня</div>
            <div><button>Login</button></div>
            {/* <div><input placeholder={'Login'} /></div>
            <div><input placeholder={'Password'} /></div>
            <div><input type={"checkbox"}/> Запомнить меня</div>
            <div><button>Login</button></div> */}
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' // уникальное имя в прилоге
})(LoginForm)
