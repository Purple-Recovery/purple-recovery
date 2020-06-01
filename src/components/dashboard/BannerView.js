import React, {Component} from 'react';

// This displays the most recently added UW message or update
// Clicking this banner will redirect to the post
// Resides on the client-side only
class BannerView extends Component {
    render() {
        return (
           <div>
               <img src="img/goldBar.png" class="goldBar"></img>
               <a href="https://www.washington.edu/coronavirus/2020/05/13/effects-of-the-pandemic-on-the-uws-budget-are-becoming-clearer/" class="bannerText">
                   Effects of the pandemic on UW budget, 5/13/2020 &#62;
                </a>
           </div> 
        )
    }
}

export default BannerView;
