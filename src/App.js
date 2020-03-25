import React from 'react';
import { Header } from './components/Header/Header'
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="grid">
      <Header />
      <Nav />
      <div className="content">
      <Route path='/profile' component={Profile} />
      <Route path='/dialogs' component={Dialogs} />
      </div>
    </div>
    </BrowserRouter>
  );
}
// git remote add origin https://github.com/ruslan90t/samWay.git
// git push -u origin master
export default App;
