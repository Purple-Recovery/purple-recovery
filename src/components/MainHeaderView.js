import React, { Component } from "react";
import { Link } from "react-router-dom";

// This component displays the main header
// Resides client-side only

class MainHeaderView extends Component {
  render() {
    return (
      <div class="h-10 mainHeader">
        {/* todo: update hrefs to homepage, once hosting etc figured out */}
        <div>
          {/* <h1 class="mainHeaderMain">PURPLE RECOVERY</h1> */}
          <a href="https://google.com" class="mainHeaderMain">PURPLE RECOVERY</a>
        </div>
        <div>
          <a href="https://google.com" class="mainHeaderSubtitle">
            COVID-19 INFORMATION FOR UW STUDENTS
          </a>
        </div>
      </div>
    );
  }
}

export default MainHeaderView;
