import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA_QfKpslzjyg1ijCRzKDFd0PohjHmmvkw",
    authDomain: "my-site-b0187.firebaseapp.com",
    databaseURL: "https://my-site-b0187.firebaseio.com",
    projectId: "my-site-b0187",
    storageBucket: "my-site-b0187.appspot.com",
    messagingSenderId: "815226838908"
  };

firebase.initializeApp(config);

ReactDOM.render(<App /> ,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
