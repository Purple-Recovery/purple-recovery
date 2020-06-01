import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class CardButtonView extends Component {
  render() {
    return <Row className="mb-1 ml-1 mr-1 p-2 cardButton">
      <Col xs={4}>
        <img className="home-thumbnail"
          src={this.props.link.img ? this.props.link.img : "./img/dubs.png"}
        ></img>
      </Col>

      <Col xs={8}>
        <a className="p-0" href={this.props.link.url}>{this.props.link.name}</a>
      </Col>
    </Row>;
  }
}

export default CardButtonView;
