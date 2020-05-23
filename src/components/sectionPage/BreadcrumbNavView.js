import React, {Component} from 'react';

// This component displays a line of text that will displau the users's directory
// relative to the main page. This provides a one click access to each of the parent page
// This communicates with the previous page.
 // Resides client-side only
class BreadcrumbNavView extends Component {
    render() {
        return (
            <div class="ourBreadcrumb">
                <a href="https://google.com"> Home </a>
                <p class="breadcrumbArrow">&nbsp; &#8594; &nbsp;</p>
                <a href="https://google.com">{this.props.name}</a>
            </div>
        )
    }
}

export default BreadcrumbNavView;
