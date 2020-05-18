import React, {Component} from 'react';
import '../css/App.css';
import {DropANoteController} from './DropANote.js';
import ResponsesPageView from "./sectionView/ResponsesPageView"
// import 'bootstrap/dist/css/bootstrap.min.css';

// Main app container
// Contains the React Router for the website
class App extends Component {
  responsesLinks =  [
    {
      name: "Health, wellness, and prevention",
      links: [
        { name: "Hall health FAQ", url: "https://google.com" },
        {
          name: "What to do if you're experiencing symptoms",
          url: "https://google.com",
        },
      ],
    },
    {
      name: "Staff and Student Workers",
      links: [
        { name: "UAW 421, Student Union Homepage", url: "https://google.com" },
        {
          name: "ASE and other hourly workers FAQ",
          url: "https://google.com",
        },
      ],
    },
    {
      name: "Classes, Academics, & Commencement",
      links: [
        { name: "Library Hours", url: "https://google.com" },
        {
          name: "Tutoring Resources",
          url: "https://google.com",
        },
      ],
    }
  ];

  render() {
    return (
      <body className="landing-page">
        <DropANoteController />
        <ResponsesPageView sectionName="RESPONSES" subsections={this.responsesLinks}/>
      </body>
    );
  } 
}

export default App;
