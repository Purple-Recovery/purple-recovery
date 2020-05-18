import React, {Component} from 'react';
import '../css/App.css';
import {DropANoteController} from './DropANote.js';
import PageView from "./sectionView/ResponsesPageView"
// import 'bootstrap/dist/css/bootstrap.min.css';

// Main app container
// Contains the React Router for the website
class App extends Component {
  responsesLinks =  [
    {
      name: "Prevention and Personal Health",
      links: [
        {
          name: "What to do if you feel sick",
          url: "https://www.washington.edu/coronavirus/#health",
        },
        { 
          name: "COVID-19 Symptoms", 
          url: "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html",
        } 
      ],
    },
    {
      name: "Staff and Student Workers",
      links: [
        {
          name: "Information for Staff and Student Workers",
          url: "https://www.washington.edu/coronavirus/#staff",
        },
        { 
          name: "UWHR's Working during COVID-19", 
          url: "https://hr.uw.edu/coronavirus/",
        },
      ],
    },
    {
      name: "Univesity Operations",
      links: [
        { 
          name: "Research and laboratory operations", 
          url: "https://www.washington.edu/coronavirus/#labs" 
        },
        {
          name: "UW Medicine hospitals and clinics",
          url: "https://www.washington.edu/coronavirus/#uwmedicine",
        },
      ],
    }
  ];

  render() {
    return (
      <body className="landing-page">
        <DropANoteController />
        <PageView sectionName="RESPONSES" subsections={this.responsesLinks}/>
      </body>
    );
  } 
}

export default App;
