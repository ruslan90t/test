import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({ 
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }

    
 let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    

 return ConnectedAuthRedirectComponent; //с hoc возвращаем две обертки. вторая для прокидывания пропсов isAuth
    //return RedirectComponent; без hoc возвращаем одну контейнерную компоненту-обертку
}

//теперь можно записывать так:
// let некоторое_имя = withAuthRedirect(Компонента);
// export default connect(мап_стэйт_то_пропс)(некоторое_имя);