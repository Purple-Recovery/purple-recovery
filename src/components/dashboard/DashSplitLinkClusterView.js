import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkClusterView from "../sectionPage/LinkClusterView";

class DashSplitLinkClusterView extends Component {
  render() {
    let faqLinks = this.props.faqLinks.map((link) => (
      <Row className="mb-1 ml-1 mr-1 cardButton">
        <Col xs={12}>
          <a className="p-0" href={link.url}>
            {link.name}
          </a>
        </Col>
      </Row>
    ));

    return (
      <Row>
        <Col xs={6}>
            <h2>UW FAQs</h2>
            {faqLinks}
            </Col>
        <Col xs={6}>
            <h2>Quick Links</h2>
          <LinkClusterView links={this.props.quickLinks} />
          <Link to="/resources">
            <Button>See All</Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default DashSplitLinkClusterView;
