import React from 'react';
import { Header } from './components/Header/Header'
import './App.css';
import { Nav } from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {
  //console.log("App", props);

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
// git remote add origin https://github.com/ruslan90t/samWay.git
// git push -u origin master
export default App;
