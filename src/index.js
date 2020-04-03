import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


// let reloadPage = (state) => {
//let reloadPage = () => {
ReactDOM.render(
    <BrowserRouter>
    
        <Provider store={store}>
          {/* <App state={state} store={store} /> */}
          <App />
        </Provider>
    
    </BrowserRouter>,
    document.getElementById('root')
  );
//};


// reloadPage(store.getState());
//reloadPage();

// store.subscribe(() => {
//   //let state = store.getState();
//   // reloadPage(state);
//   reloadPage();
// });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
