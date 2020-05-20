import React, {Component} from 'react';

// This component displays a line of text that will displau the users's directory
// relative to the main page. This provides a one click access to each of the parent page
// This communicates with the previous page.
 // Resides client-side only
class BreadcrumbNavView extends Component {
    render() {
        return (
            // TODO
            <div class="breadcrumb">
                <a href="https://google.com"> Home </a>
                {/* <span> -> </span>   */}
                <p>&nbsp; -> &nbsp;</p>
                <a href="https://google.com">{this.props.name}</a>
            </div>
        )
    }
}

export default BreadcrumbNavView;
