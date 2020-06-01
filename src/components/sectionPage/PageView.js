import React, { Component } from "react";
import BreadcrumbNavView from "./BreadcrumbNavView";
import HeadlinerView from "./HeadlinerView";
import SectionPageNavView from "./SectionPageNavView";
import LinkClusterView from "./LinkClusterView";

// This component renders a pageview of a given section name and set of links

class PageView extends Component {
  render() {
  
    let subsections = [];

    if(this.props.subsections) {
      for (let subsection of this.props.subsections) {
        subsections.push(
          <LinkClusterView name={subsection.name} links={subsection.links} />
        );
      }
    }

    let links = [];

    if(this.props.links) {
      for(let link of this.props.links) {
        links.push(
          <div>
            <a href={link.url} class="link">{link.name}</a>
          </div>
        )
      }
    }

    return (
      <div>
        <BreadcrumbNavView name={this.props.sectionName}/>
        <HeadlinerView name={this.props.sectionName} />
        {subsections}
        {links}
        <SectionPageNavView />
      </div>
    );
  }
}

export default PageView;
