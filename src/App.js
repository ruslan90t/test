import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Nav } from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { getAuth } from './redux/authReducer';
import { compose } from 'redux';
import { initApp } from './redux/appReducer';
import { Preloader } from './components/various/Preloader/Preloader';

class App extends React.Component{



  componentDidMount(){  //в get запросе withCredentials: true идет 2-м параметром
    //console.log('HeaderContainer props', this.props);  
this.props.initApp();
}
  //console.log("App", props);
render(){

if(!this.props.initialized){
  return <Preloader />
}


  return (
    
      <div className="grid">
       <HeaderContainer />
        <Nav />
        <div className="content">
          {/* <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} /> */}

          <Route path='/profile/:userId?' render={ () =>  <ProfileContainer  />  } />
                                              
          <Route path='/dialogs' render={ () =>  <DialogsContainer /> } />

          <Route path='/users' render={ () =>  <UsersContainer /> } />

          <Route path='/login' render={ () =>  <Login /> } />
        </div>
      </div>
  );
}
}

// git remote add origin https://github.com/ruslan90t/samWay.git
// git push -u origin master
const mapStateToProps = (state) => ({
  initialized: state.app.initialized //combine в redux-store.js - app: appReducer
})


//оборачиваем withRouter чтоб не было проблем в работой Route
export default compose(
  withRouter,
    connect(mapStateToProps,{ initApp }))(App);
