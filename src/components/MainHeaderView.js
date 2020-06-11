import React, { Component } from "react";
import { Link } from "react-router-dom";

// This component displays the main header
// Resides client-side only

class MainHeaderView extends Component {
  render() {
    return (
      <div class="h-10 mainHeader">
        {/* todo: update hrefs to homepage, Completed! https://purple-recovery.web.app/ */}
        <h1>
          {/* <h1 class="mainHeaderMain">PURPLE RECOVERY</h1> */}
          <a href="https://purple-recovery.web.app/" class="mainHeaderMain">
            PURPLE RECOVERY
          </a>
        </h1>
        <h2>
          <a href="https://purple-recovery.web.app/" class="mainHeaderSubtitle">
            COVID-19 INFORMATION FOR UW STUDENTS
          </a>
        </h2>
      </div>
    );
  }
}

export default MainHeaderView;
