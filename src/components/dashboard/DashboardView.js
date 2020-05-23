import React, { Component } from "react";
import PageView from "../sectionPage/PageView"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// This component displays the HeaderView and SectionViews
// Resides on the client-side only
class DashboardView extends Component {
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
          url: "https://google.com"
        },
        {
          name: "aResponse2",
          url: "https://google.com"
        },
        {
          name: "aResponse3",
          url: "https://google.com"
        },
        {
          name: "aResponse4",
          url: "https://google.com"
        },
      ]
    
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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/responses">Responses</Link>
              </li>

              <li>
                <Link to="/community">Community</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/resources">
                <PageView sectionName="RESOURCES" subsections={this.resourcesLinks}/>
            </Route>
            <Route path="/responses">
                <PageView sectionName="RESPONSES" links={this.responsesLinks}/>
            </Route>
            <Route path="/community">
                <PageView sectionName="COMMUNITY" links={this.communityLinks}/>
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// don't know if need ??
// This component displays a single category of information on the main dashboard
// that includes featured external links. It displays a button on the bottom right
// and will redirect the user to another page. There will be a total of 3 instance sections of
// this component: Resources, Responses, and Community.
// Resides on the client-side only
// class SectionView extends Component {

//   // On button click, redirect to Section Individual Page
//   handleClick(event) {

//   }
// }

// export {DashboardView, HeaderView, BannerView, SectionView, TrackersView, BreadcrumbNavView};

export default DashboardView;
