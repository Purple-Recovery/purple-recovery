import React, { Component } from "react";
import {Link} from "react-router-dom"

class SectionPageNav extends Component {
  render() {
    return (
      <div class="sectionPageNav">
        <div>
          <h2 id="sectionPagNavTitle">OTHER SECTIONS</h2>
        </div>
        <div>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/resources">
            <p>Resources</p>
          </Link>
          <Link to="/responses">
            <p>Responses</p>
          </Link>
          <Link to="/community">
            <p>Community</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SectionPageNav;
