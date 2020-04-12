import { clickAddMessCreate, updateMessCreate } from '../../redux/messPageReducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messPage: state.messPage,
        //isAuth: state.auth.isAuth //теперь прокидываем через ConnectedAuthRedirectComponent //auth <- redux-store, isAuth <- authReducer поля
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        //не нужно после использования форм
        // updateMessCreate: (body) => {

        //     dispatch(updateMessCreate(body));
        // },
        //раньше было без параметров
        // clickAddMessCreate: () => {
        //     dispatch(clickAddMessCreate());
        // }
        clickAddMessCreate: (newMessageBody) => {
            dispatch(clickAddMessCreate(newMessageBody));
        }
    }
}
//раньше было без compose()();
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// export default DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( AuthRedirectComponent );
//идем последовательно снизу вверх. каждая строчка результат вызова предыдущей
export default compose(
    //можно вставлять различные обработчики сюда в зависимости от иерархии вызовов
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect    //результат первого действия запихивается в connect
)(Dialogs);             //первое действие - Dialogs отдается withAuthRedirect
