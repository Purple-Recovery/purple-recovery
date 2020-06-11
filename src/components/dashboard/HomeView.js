import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashLinkClusterView from "./DashLinkClusterView";
import DashSplitLinkClusterView from "./DashSplitLinkClusterView";

class HomeView extends Component {
  faqLinks = [
    {
      name: "Prevention and Personal Health",
      url: "https://www.washington.edu/coronavirus/faq/#health",
    },
    {
      name: "Staff and Student Workers",
      url: "https://www.washington.edu/coronavirus/faq/#staff",
    },
    {
      name: "Info for Students",
      url: "https://www.washington.edu/coronavirus/faq/#students",
    },
    {
      name: "Info for Faculty",
      url: "https://www.washington.edu/coronavirus/faq/#faculty",
    },
    {
      name: "Operations, Events, and Services",
      url: "https://www.washington.edu/coronavirus/faq/#operations",
    }
  ];

  quickLinks = [
    {
      name: "Center for Disease Control",
      url: "https://www.cdc.gov/",
    },
    {
      name: "Department of Health",
      url: "https://www.doh.wa.gov/",
    },
    {
      name: "King County COVID-19 Resources",
      url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi7zML_vN_pAhWyKX0KHeoDAjwQFjACegQICxAF&url=https%3A%2F%2Fwww.kingcounty.gov%2Fdepts%2Fhealth%2Fcovid-19.aspx&usg=AOvVaw3f1q5Q4lqIuHkU5Z_2UmhW",
    },
    {
      name: "UW Medicine",
      url: "https://www.uwmedicine.org/",
    },
    {
      name: "UW Mental Health Resources",
      url: "https://wellbeing.uw.edu/topic/mental-health/",
    },
    {
      name: "Spring Quarter FAQs",
      url: "https://www.washington.edu/provost/springquarter/",
    }
  ];
  
  render() {
    return (
      <div className="homepage" id="homepage">
        <Container fluid>
          <Row noGutters>
            {/* Left Column */}
            <Col xs={6}>
              <Row noGutters>
                <DashSplitLinkClusterView
                  // faqLinks={this.props.resourcesLinks}
                  faqLinks={this.faqLinks}
                  // quickLinks={this.props.resourcesLinks}
                  quickLinks={this.quickLinks}
                ></DashSplitLinkClusterView>
              </Row>
            </Col>

            {/* Right Column */}
            <Col xs={6}>
              {/* Upper Right */}
              <Row noGutters>
                <Col xs={6}>
                  <DashLinkClusterView
                    name={"Responses"}
                    path={"/responses"}
                    links={this.props.responsesLinks.slice(0,3)}
                    buttonText={"More Articles"}
                  />
                </Col>

                <Col xs={6}>
                  <DashLinkClusterView
                    name={"Community"}
                    path={"/community"}
                    links={this.props.communityLinks.slice(0,3)}
                    buttonText={"Stay Connected"}
                  />
                </Col>
              </Row>

              {/* Lower Right */}
              <Row noGutters>
                <TrackersAndDashboards
                  trackersLinks={this.props.trackersLinks}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function TrackersAndDashboards(props) {
  // Get size rounded down
  let size = Math.floor(12 / props.trackersLinks.length);
  let links = props.trackersLinks.map((link, _, arr) => (
    <Col className="p-4 cardButton" xs={size}>
      <a className="p-0" href={link.url}>
        {link.name}
      </a>
    </Col>
  ));
  return (
    <div className="w-100 p-2">
      <h2>Trackers and Dashboards</h2>
      <Row className="purpleBackground p-3">{links}</Row>
    </div>
  );
}

export default HomeView;
