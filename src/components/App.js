import React, {Component} from 'react';
import '../css/App.css';
import {DropANoteController} from './DropANote.js';

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
