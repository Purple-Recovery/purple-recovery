import React, {Component} from 'react';

// This component displays the HeaderView and SectionViews 
// Resides on the client-side only
class DashboardView extends Component {

}

// This component displays the Purple Recovery Title and site description
// Contains an instance of Bannerview
// Resides on the client-side only
class HeaderView extends Component {

}

// This displays the most recently added UW message or update
// Clicking this banner will redirect to the post
// Resides on the client-side only
class BannerView extends Component {

}

// This component displays a single category of information on the main dashboard
// that includes featured external links. It displays a button on the bottom right
// and will redirect the user to another page. There will be a total of 3 instance sections of
// this component: Resources, Responses, and Community.
// Resides on the client-side only
class SectionView extends Component {
  
  // On button click, redirect to Section Individual Page
  handleClick(event) {

  }
}

// This component displays links to an external data visualizatoin dashboard(s)
// regarding COVID-19 stats
// Resides client-side only
class TrackersView extends Component {

}

export {DashboardView, HeaderView, BannerView, SectionView, TrackersView, BreadcrumbNavView};
