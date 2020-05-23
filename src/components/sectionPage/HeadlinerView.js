import React, {Component} from 'react';

// This section will contain links to UW-community published material (The Daily, UW Faculty Messages, UW Facebook Pages, etc.).
// The articles will be displayed as card buttons with the article title on the right and the page cover image in the article on the left (if available).
// 
class HeadlinerView extends Component {
  render() {
    return (
      <div className="headliner">
        <h1>{this.props.name}</h1>
        <img src="img/purpleBar.jpg" class="purpleBar"></img>
      </div>
    )
  } 
}

export default HeadlinerView;
