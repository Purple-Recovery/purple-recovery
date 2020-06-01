import React, { Component } from "react";

class LinkClusterView extends Component {
  render() {
    let links = [];
    for (let link of this.props.links) {
      links.push(
        <div className={"pb-2"}>
          <a href={link.url}>{link.name}</a>
          <br />
        </div>
      );
    }

    return (
      <div className="linkCluster">
        <h2 className="headliner2">{this.props.name}</h2>
        {links}
      </div>
    );
  }
}

export default LinkClusterView;
