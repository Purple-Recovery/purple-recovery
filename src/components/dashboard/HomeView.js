import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashLinkClusterView from "./DashLinkClusterView";
import DashSplitLinkClusterView from "./DashSplitLinkClusterView";

class HomeView extends Component {
  resourcesLinks =  [
    {
      name: "Prevention and Personal Health",
      links: [
        {
          name: "What to do if you feel sick",
          url: "https://www.washington.edu/coronavirus/#health",
        },
        { 
          name: "COVID-19 Symptoms", 
          url: "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html",
        } 
      ],
    },
    {
      name: "Staff and Student Workers",
      links: [
        {
          name: "Information for Staff and Student Workers",
          url: "https://www.washington.edu/coronavirus/#staff",
        },
        { 
          name: "UWHR's Working during COVID-19", 
          url: "https://hr.uw.edu/coronavirus/",
        },
      ],
    },
    {
      name: "Univesity Operations",
      links: [
        { 
          name: "Research and laboratory operations", 
          url: "https://www.washington.edu/coronavirus/#labs" 
        },
        {
          name: "UW Medicine hospitals and clinics",
          url: "https://www.washington.edu/coronavirus/#uwmedicine",
        },
      ],
    }
  ];
  responsesLinks = [
    {
      name: "aResponse",
      url: "https://google.com",
    },
    {
      name: "aResponse2",
      url: "https://google.com",
    },
    {
      name: "aResponse3",
      url: "https://google.com",
    },
    {
      name: "aResponse4",
      url: "https://google.com",
    },
  ];

  communityLinks = [
    {
      name: "communityThing",
      url: "https://google.com"
    },
    {
      name: "communityThing2",
      url: "https://google.com"
    },
    {
      name: "communityThing3",
      url: "https://google.com"
    },
    {
      name: "communityThing4",
      url: "https://google.com"
    },
  ]

  render() {
    return (
      <div className="h-90 homepage" id="homepage">
        <Container className="h-90 p-3 homeContainer" fluid>
          <Row className="h-100" noGutters>
            {/* Left Column */}
            <Col className="homepage-content" xs={6}>
              <DashSplitLinkClusterView faqLinks={this.resourcesLinks} quickLinks={this.resourcesLinks}></DashSplitLinkClusterView>
            </Col>

            {/* Right Column */}
            <Col className="h-100" xs={6}>
              {/* Upper Right */}
              <Row className="h-75" noGutters>
                <Col xs={6}>
                  <DashLinkClusterView name={"Responses"} path={"/responses"} links={this.responsesLinks} />
                </Col>

                <Col xs={6}>
                  <DashLinkClusterView name={"Community"} path={"/community"} links={this.communityLinks} />
                </Col>
              </Row>

              {/* Lower Right */}
              <Row className="h-25" noGutters>
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
