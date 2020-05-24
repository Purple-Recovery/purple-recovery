import React, {Component} from 'react';
import '../css/App.css';
import {DropANoteController} from './DropANote.js';
import PageView from "./sectionPage/PageView"
import DashboardView from './dashboard/DashboardView';
import MainHeaderView from './MainHeaderView';
import BannerView from './dashboard/BannerView';

// import 'bootstrap/dist/css/bootstrap.min.css';

// Main app container
// Contains the React Router for the website
class App extends Component {


  render() {
    return (
      <body className="landing-page">
        <MainHeaderView></MainHeaderView>
        <BannerView></BannerView>
        <DropANoteController />
        <DashboardView></DashboardView>
      </body>
    );
  } 
}

export default App;
