import React, {Component} from 'react';
import {Link} from "react-router-dom"

// This component displays a line of text that will displau the users's directory
// relative to the main page. This provides a one click access to each of the parent page
// This communicates with the previous page.
 // Resides client-side only
class BreadcrumbNavView extends Component {
    render() {
        return (
            <div class="ourBreadcrumb">
                <Link to="/"> Home </Link>
                <p class="breadcrumbArrow">&nbsp; &#8594; &nbsp;</p>
                <p className="pl-0">{this.props.name}</p>
            </div>
        )
    }
}

export default BreadcrumbNavView;
