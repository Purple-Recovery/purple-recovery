import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class HomeView extends Component {
  render() {
    return (
      <div className="h-90 homepage" id="homepage">
        <Container className="h-90 p-3" fluid>
          <Row className="h-100" noGutters>
            {/* Left Column */}
            <Col className="homepage-content" xs={6}>
              <Link to="/resources">
                <Asdf name="Resources" />
              </Link>
            </Col>

            {/* Right Column */}
            <Col className="h-100" xs={6}>
              {/* Upper Right */}
              <Row className="h-50" noGutters>
                <Col xs={6}>
                  <Link to="/responses">
                    <Asdf name="Responses" />
                  </Link>
                </Col>

                <Col xs={6}>
                  <Link to="/community">
                    <Asdf name="Community" />
                  </Link>
                </Col>
              </Row>

              {/* Lower Right */}
              <Row className="h-50" noGutters>
                <Asdf name="Trackers and Dashboards"></Asdf>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/**
 * Temporary container
 * TODO: Refactor this to the respective sections
 */
class Asdf extends React.Component {
  render() {
    return (
      <div className="h-100 w-100 p-3 section">
        <h2>{this.props.name}</h2>
        <div></div>
      </div>
    );
  }
}

export default HomeView;
