import React, { Component } from "react";
import BreadcrumbNavView from "./BreadcrumbNavView";
import Headliner from "./Headliner";
import SectionPageNavView from "./SectionPageNavView";
import LinkCluster from "./ResponsesSubsection";

// This section will contain links to UW-community published material (The Daily, UW Faculty Messages, UW Facebook Pages, etc.).
// The articles will be displayed as card buttons with the article title on the right and the page cover image in the article on the left (if available).
//
class ResponsesPageView extends Component {
  render() {
  
    let subsections = [];

    for (let subsection of this.props.subsections) {
      subsections.push(
        <LinkCluster name={subsection.name} links={subsection.links} />
      );
    }

    return (
      <div>
        <BreadcrumbNavView />
        <Headliner name={this.props.sectionName} />
        {subsections}
        <SectionPageNavView />
      </div>
    );
  }
}

export default ResponsesPageView;
