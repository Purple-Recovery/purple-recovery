import React, { Component } from "react";
import { Link } from "react-router-dom";

// This component displays the main header
// Resides client-side only

class MainHeaderView extends Component {
  render() {
    return (
      <div class="h-10 mainHeader">
        <div>
          <h1 class="mainHeaderMain">PURPLE RECOVERY</h1>
        </div>
        <div>
          <h2 class="mainHeaderSubtitle">
            COVID-19 INFORMATION FOR UW STUDENTS
          </h2>
        </div>
      </div>
    );
  }
}

export default MainHeaderView;
