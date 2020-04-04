import React from 'react';
import { Header } from './components/Header/Header'
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  //console.log("App", props);

  return (
    
    
      <div className="grid">
        <Header />
        <Nav />
        <div className="content">
          {/* <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} /> */}

          <Route path='/profile' render={ () =>  <Profile store={props.store} />  } />
                                              
          <Route path='/dialogs' render={ () =>  <DialogsContainer store={props.store}/> } />

          <Route path='/users' render={ () =>  <UsersContainer store={props.store}/> } />
        </div>
      </div>
  );
}
// git remote add origin https://github.com/ruslan90t/samWay.git
// git push -u origin master
export default App;
