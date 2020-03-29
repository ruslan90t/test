import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let reloadPage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App 
            state={state} 
            dispatch={store.dispatch.bind(store)}  />
        </React.StrictMode>,
        document.getElementById('root')
      );
};


reloadPage(store.getState());

store.subscribe( () => {
  let state = store.getState();
  reloadPage(state);
} );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
