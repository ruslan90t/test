import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { Header } from './Header';
import { setAuthAC, getAuth } from './../../redux/authReducer';
import { authAPI } from './../../api/api';



class HeaderContainer extends React.Component{

    componentDidMount(){  //в get запросе withCredentials: true идет 2-м параметром
        //console.log('HeaderContainer props', this.props);  
  this.props.getAuth();
    }


render(){

    return ( <Header {...this.props} /> )
}

}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, 
    //{ setAuthAC },
    { getAuth }
     )(HeaderContainer);