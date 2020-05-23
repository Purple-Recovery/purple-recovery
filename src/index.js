import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Firebase imports
import firebase from 'firebase/app';
// import 'firebase/auth'; 
import 'firebase/database';

// CSS imports
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase config
var config = {
  apiKey: "AIzaSyBoMTaX9jqWAx3hrraavh31Ajj4FR45bfo",
  authDomain: "purple-recovery.firebaseapp.com",
  databaseURL: "https://purple-recovery.firebaseio.com",
  projectId: "purple-recovery",
  storageBucket: "purple-recovery.appspot.com",
  messagingSenderId: "544763160010",
  appId: "1:544763160010:web:9916b5f78b5efd20141b33",
  measurementId: "G-RSF6M57LY2"
};
firebase.initializeApp(config);

// Render App
ReactDOM.render(<App />, document.getElementById('root'));

