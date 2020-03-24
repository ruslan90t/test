import React from 'react';
import { Header } from './components/Header/Header'
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';

function App() {
  return (
    <div className="grid">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}
// git remote add origin https://github.com/ruslan90t/samWay.git
// git push -u origin master
export default App;
