import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageView from "../sectionPage/PageView";
import HomeView from "./HomeView";

// This handles react router for middle part of app
class DashboardView extends Component {
  resourcesLinks = [
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
        },
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
          url: "https://www.washington.edu/coronavirus/#labs",
        },
        {
          name: "UW Medicine hospitals and clinics",
          url: "https://www.washington.edu/coronavirus/#uwmedicine",
        },
      ],
    },
  ];

  responsesLinks = [
    {
      name: "Effects of the pandemic on the UW's budget are becoming clearer",
      url: "https://www.washington.edu/coronavirus/2020/05/13/effects-of-the-pandemic-on-the-uws-budget-are-becoming-clearer/",
    },
    {
      name: "COVID-19 town hall",
      url: "https://www.washington.edu/coronavirus/2020/05/01/covid-19-town-hall/",
      img: "./img/anamari.png",
    },
    {
      name: "Three hydroxychloroquine trials underway at UW...",
      url: "http://www.dailyuw.com/news/article_8fdfa246-9bca-11ea-b89b-9fc13c77dcfd.html",
      img: "./img/trials.jpg",
    },
    {
      name: "UW researchers respond to novel coronavirus (COVID-19)",
      url: "https://www.washington.edu/news/uw-in-the-media/coronavirus/?utm_source=coronaviruspage&utm_medium=readmore&utm_campaign=coronavirus-page-widget",
    },
  ];

  communityLinks = [
    {
      name: "UW Minecraft Server",
      url: "https://discord.com/invite/HvgSpcF",
      img: "./img/minecraft.png",
    },
    {
      name: "UW Reddit",
      url: "https://www.reddit.com/r/udub/",
      img: "./img/redditlogo.png",
    },
    {
      name: "UW Teens for Boundless Memes (FB)",
      url: "https://www.facebook.com/groups/299826420434932/?sorting_setting=CHRONOLOGICAL",
      img: "./img/facebooklogo.png",
    },
    {
      name: "Live Campus Webcams",
      url: "https://www.washington.edu/video/campus-webcams/",
    },
  ]

  trackersLinks = [
    { name: "UW Cases Tracker", url: "https://www.washington.edu/coronavirus/testing-results/" },
    // king county website down, might need to update another time
    { name: "King County Tracker", url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiNhoW_wt_pAhW8GTQIHSLBDKQQFjAAegQIBBAB&url=https%3A%2F%2Fwww.kingcounty.gov%2Fdepts%2Fhealth%2Fcovid-19%2Fdata.aspx&usg=AOvVaw2LFnaGhigJ5wA0o86kmWjX" },
    { name: "IHME Dashboard", url: "https://covid19.healthdata.org/united-states-of-america" },
  ];

  render() {
    return (
      <Router className="h-90">
        <Switch>
          <Route path="/resources">
            <PageView sectionName="RESOURCES" subsections={this.resourcesLinks} />
          </Route>
          <Route path="/responses">
            <PageView sectionName="RESPONSES" links={this.responsesLinks} />
          </Route>
          <Route path="/community">
            <PageView sectionName="COMMUNITY" links={this.communityLinks} />
          </Route>
          <Route path="/">
            <HomeView
              trackersLinks={this.trackersLinks}
              communityLinks={this.communityLinks}
              responsesLinks={this.responsesLinks}
              resourcesLinks={this.resourcesLinks}
            />
          </Route>
        </Switch>
        -{" "}
      </Router>
    );
  }
}

export default DashboardView;
