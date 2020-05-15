import React, {Component} from 'react';
import '../css/App.css';
import {DropANoteController} from './DropANote.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Main app container
// Contains the React Router for the website
class App extends Component {
  
  render() {
    return (
      <body className="landing-page">
        <DropANoteController />
      </body>
    );
  } 
}

export default App;
