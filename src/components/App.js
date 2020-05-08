import React, {Component} from 'react';
import '../css/App.css';
import DropANote from DropANote;

// Main app container
// Contains the React Router for the website
class App extends React.Component {
  
  render() {
    return (
      <body className="landing-page">

        <DropANote />
      </body>
    );
  } 
}

export default App;
