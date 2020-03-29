import React from 'react';
import { Header } from './components/Header/Header'
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  //console.log("App", props);

  return (
    <BrowserRouter>
      <div className="grid">
        <Header />
        <Nav />
        <div className="content">
          {/* <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} /> */}

          <Route path='/profile' render={ () =>  <Profile store={props.store} />  } />
                                              
          <Route path='/dialogs' render={ () =>  <DialogsContainer store={props.store}/> } />
        </div>
      </div>
    </BrowserRouter>
  );
}
// git remote add origin https://github.com/ruslan90t/samWay.git
// git push -u origin master
export default App;
