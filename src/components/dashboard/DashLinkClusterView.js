import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardButtonView from "./CardButtonView";

class DashLinkClusterView extends Component {
  render() {
    let links = this.props.links.map((link) => <CardButtonView key={link.name} link={link} />);

    return (
      <div className="h-100 w-100 section">
        <h2>{this.props.name}</h2>
        <div className="p-4 purpleBackground">
          {links}
          <Link to={this.props.path}>
            <Button className="dashButton">{this.props.buttonText}</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DashLinkClusterView;
