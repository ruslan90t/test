import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { Input } from '../various/FormsControls/FormsControl';
import { requiredField } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import './../../App.css'; 

const Login = (props) => {
//передаем в форму LoginForm через LoginReduxForm фнкцию onSubmit, в которую приходят данные (formData) из формы
//по умолчанию
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        //console.log('formData', formData);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
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
            <div><Field placeholder={'email'} component={Input} name={'email'} validate={[requiredField]} /></div>
            <div><Field type={'password'} placeholder={'password'} component={Input} name={'password'} validate={[requiredField]} /></div>
            <div><Field type={"checkbox"} component={Input} name={'rememberMe'} /> Запомнить меня</div>
            {/* props.error приходит автоматом если есть ошибка */}
            { props.error && <div className='formSummaryError'>{props.error}</div>}
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
})(LoginForm);

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
