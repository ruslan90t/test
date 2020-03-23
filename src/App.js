import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid">
   <div className="header">
     <div className="logo">
       <img src="https://cdn3.sportngin.com/attachments/photo/7734/8653/Spartans_2100_1300_large.png"/>
     </div>
   </div>
   <div className="side">
     <ul>
     <li><a href="#">О нас</a></li>
     <li><a href="#">Контакты</a></li>
     <li><a href="#">Стратегия</a></li>
     <li><a href="#">О компании</a></li>
     <li><a href="#">Справка</a></li>
     </ul>
   </div>
   <div className="content">
     <img src="http://wallpapers-image.ru/1280x800/cars/wallpapers/wallpapers-cars-09.jpg"/>
   </div>
    </div>
  );
}

export default App;
