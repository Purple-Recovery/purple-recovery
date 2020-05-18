import React, { Component } from "react";

class LinkCluster extends Component {
  render() {
    let links = [];
    for (let link of this.props.links) {
      links.push(
        <div>
          <a href={link.url}>{link.name}</a>
          <br />
        </div>
      );
    }

    return (
      <div>
        <h2>{this.props.name}</h2>
        {links}
      </div>
    );
  }
}

export default LinkCluster;
