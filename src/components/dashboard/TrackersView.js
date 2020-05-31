import React, { Component } from "react";

// This component displays links to an external data visualizatoin dashboard(s)
// regarding COVID-19 stats
// Resides client-side only
class TrackersView extends Component {
  render() {
    return (
      <Row className="mb-1 ml-1 mr-1 cardButton">
        <Col xs={4}>
          <a className="p-0" href={link.url}>
            {link.name}
          </a>
        </Col>

        <Col xs={4}>
          <a className="p-0" href={link.url}>
            {link.name}
          </a>
        </Col>

        <Col xs={4}>
          <a className="p-0" href={link.url}>
          </a>
        </Col>
      </Row>
    );
  }
}

export default TrackersView;
