import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkClusterView from "../sectionPage/LinkClusterView";

class DashSplitLinkClusterView extends Component {
  render() {
    let faqLinks = this.props.faqLinks.map((link) => (
      <Row className="mb-1 ml-1 mr-1 p-3 cardButton">
        <Col xs={12}>
          <a className="p-0" href={link.url}>
            {link.name}
          </a>
        </Col>
      </Row>
    ));

    return (
      <div className="h-100 w-100">
        <h2>Resources</h2>
        <Row className="h-100 w-100">
          <Col className="mr-0 pr-0 h-100" xs={6}>
            <div className="p-4 purpleBackground">
              <h3>UW FAQs</h3>
              {faqLinks}
            </div>
          </Col>
          <Col className="ml-0 pl-0 h-100" xs={6}>
            <div className="p-4 purpleBackground">
              <h3>Quick Links</h3>
              <LinkClusterView links={this.props.quickLinks} />
              <Link to="/resources">
                <Button>See All</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashSplitLinkClusterView;
