import React, {Component} from 'react';

class ResourcesPageView extends Component {
  render() {
    return (
      <div>
          Requirements for this page view (subject to change with additional development): 
          - The Resources section will be divided into two subsections as columns.

          - The left column will be titled “UW FAQs” and the right column titled “Quick Links”.

          - The “UW FAQs” column will contain 5 sub-sections in rows. Each will be a card buttons with the following titles: “Health, Wellness, and Prevention”, “Staff and Student Workers”, “Classes, Academics & Commencement”, “University Operations”, and “Travel and Study Abroad”.

          - Clicking any one of the 5 card buttons will redirect the user to the corresponding section on the official UW FAQ Page.

          - The sub-section hyperlinks will follow this format: https://www.washington.edu/coronavirus/#[subsection name] Where [subsection name] will be replaced with the following respective names: ‘health’, ‘staff’, ‘classes’, ‘operations’, and ‘travel’.

          - The “Quick Links” section, which is the right column underneath the Resources section, will display 6 individual hyperlinks found on the UW COVID-19 page: “CDC recommendation page”, “DOH page”, “COVID Call Center”, “UW Medicine page”, “UW Mental Health Resources”, and “Spring Quarter FAQ”. These will be displayed in a list view of text hyperlinks, and clicking any of them will redirect the user to that resource’s external website.

          - The “Quick Links” section will display 6 individual hyperlinks found on the UW COVID-19 page: “CDC recommendation page”, “DOH page”, “COVID Call Center”, “UW Medicine page”, “UW Mental Health Resources”, and “Spring Quarter FAQ”.
            Each of the hyperlinks will be displayed in a list view underneath the “Quick Links” section as a text hyperlink.
            Clicking one of them will redirect the user to that resource’s external website.
      </div>
    );
  } 
}

export default ResourcesPageView;
