# Plan

## 1. Coordination

**Coordination**

> CTO and group will decide how to break up work; this is because the CTO is most involved with the development work and can give us a clear perspective on how they would like views, models, and controllers created
> CDO will ensure that the UI and UX mirrors the agreed-upon designs.

**Project management practices**

> The project management practice in place will be agile development: this development practice allows for things to be developed in quick sprints and allows us to focus on specific areas for a defined amount of time for 2 weeks. In these 2 weeks we expect our Web App to be fully developed, while working asynchronously with each other and checking in when help or other assistance is needed

**Meetings**

> Once a week check-ins will occur with the entire team to show progress, those who are working together in the front-end or back-end areas will meet more frequently to discuss work and debug together. Up to the individual team members on each group to plan the meeting agendas, and for full group meetings the PMs will make a meeting description when a Zoom invite is sent out days prior to the full team meeting. 

## 2. Communication Tools

* Zoom for team meetings (alternatives: FaceTime, Skype, Facebook Messenger)

* Slack for questions, announcements, and coordinating meetings (alternatives:   text messaging, Facebook Messenger)

* Github issues and milestones for establishing deadlines and tracking changes (alternatives: Trello, Smartsheet)

* Each of the tools chosen is the best choice as our team is most used to this (less of a learning curve), and it’s what we have been using for the past few weeks anyways.

## 3. Ownership

* Our team has decided to split up the work as __‘Front-End’__ with Godgiven, Kassandra, and Ibrar doing the front-end work, and __‘Back-End’__ with Kyler and Ashley doing the back-end work as well as some front-end development. 

* The front-end team has sufficient time, expertise, and resources--we will all be contributing appropriate time for a 5 credit class, our strengths and individual expertise lie within front-end development, and we are aptly-resourced with necessary software and hardware to complete the work necessary. 

* The back-end team is most confident in their skills in all realms of full stack development. Because we are more comfortable in this apsect, we decided to work on areas that require more of a software focus (from front end view to package management and Firebase connection). We have the communication skills, dedication, and time required to complete the task at hand.

### Views: 

* **“DashboardView”**: Godgiven, Kassandra, & Ibrar will work together on writing production code (and verifying it; methods detailed below on section 5) for this component in HTML & CSS. This view is to show the HeaderView, BannerView, SectionViews, and DropANote. The front-end team will also have ownership of the following views, as they are subcomponents of “DashboardView”, which will also be written in HTML & CSS (with exception to DropANote; the back-end team has ownership of that as it has a lot of back-end controllers attached):
	* **“HeaderView”**:  This view component displays the Purple Recovery title and site description, and will also have an instance of the BannerView. 
	* **“BannerView”**: This view component will live within the “HeaderView”.
	* **SectionView**: There will be three instances of this view component (Resources, Responses, and Community). Each one will be connected to an its respective instance of an IndividualPageView (for example, the “Community” SectionView will have a “Community”. IndividualPageView.
	* **“TrackersSectionView”**: There will be one instance of this component, and will not have a respective IndividualPageView. 
* **IndividualPageView**: Godgiven, Kassandra, & Ibrar will work together on writing production code (and verifying it; methods detailed below on section 5) for this component in HTML & CSS. As mentioned in SectionView, each IndividualPageView instance will have a respective SectionView instance. 

* **DropANoteView**, **FormModalView**, **SubmitSuccessView**: Ashley & Kyler will work together on creating a view for these components in HTML, CSS, and Javascript. DropANoteView and FormModalView will have added features that rely on Javascript and React capabilities, which will also be created by Kyler and Ashley. Therefore, because they are working on the functionality behind this feature, they will also want to control what appears on the view according to the requirements and how to make it best work. SubmitSuccessView will appear once the FormModalView is verified (all applicable fields are filled in correctly), and the data will be stored in a Firebase database. Kyler and Ashley both have a working knowledge of HTML and CSS from INFO 340, and are capable of integrating it with the other view work of the group.

### Models: 

* **DropANoteModel**: Ashley & Kyler will work on this together, they will work to ensure that the architecture and requirements of [item 6](https://github.com/Purple-Recovery/Requirements/blob/master/requirements.md) are met. They will specifically be creating software that relies on the inputs of the FormModalView, and then verifies all applicable text information is entered in correctly and the data will be stored in a Firebase database. Kyler and Ashley both have a working knowledge of HTML, CSS, Javascript and React from INFO 340, and are capable of integrating it with the other view work of the group.

### Controllers: 

* **DropANoteController**, **FormValidationController**, **FormSubmitController**: Ashley & Kyler will work together on creating a view for this component in Javascript.  Specifically, these controllers work to make the FormModalView and SubmitSuccessView display on screen, to verify that all applicable text fields are entered correctly, and upon using the form submission button, this controller sends data to FormValidationController and the DropANoteModel to notify if it was a successful submission, and then display the SubmitSuccessView. Kyler and Ashley both have a working knowledge of HTML, CSS, Javascript and React from INFO 340, and are capable of integrating it with the other view work of the group.

## 4: Timeline: Milestones and Deadlines

* As we begin the process of development, we understand that each of our weekly schedules flow in terms of availability and time available to commit to this course. We’ve incremented our plan in weekly steps that allows for at least one discussion together per week to see progress and make any changes to requirements as necessary.

* Begin planning development on **Sunday May 3rd**. Team meeting will be held to discuss requirements ownership, tool use, as well as our proposed timeline for component deadlines

* Check in all together as a team on progress of development on **Sunday May 10th**.

* Combine views, model, and controllers beginning **Sunday May 17th**.

* Begin user testing phase on **Wednesday May 20th**, work on finishing web app deployment with as few bugs and issues as possible until Final Release date, **Wednesday May 27th**.

* Final Release due **May 27th** 

## 5. Verification

**Overview**

* For each component, unit tests and inspections will be conducted when the component is finished. 

* We do not anticipate the need to run automatic tests or write proofs. Due to the visual-heavy nature of our app, the majority of testing will be manual, involving inspection and code review.

* On each build of the app, a usability integration test will be conducted to ensure all user interfaces, buttons and links, and forms are working as expected.

* If any components are failing, we will inspect the component code for any defects, and develop a fix.

* We will not be running automated tests after every build. Instead, we will conduct manual testing, visual confirmation, or code review before every commit or pull request. Kyler (our CTO) will conduct code inspections when reviewing pull requests; a code inspection will ensure that all written code fits within our proposed architecture.

**Verification for Requirements**

For more detail on our requirements, please see [requirements repo](https://github.com/Purple-Recovery/Requirements).

### 1: Main Dashboard

1.1. This web app will be made with HTML, CSS, JavaScript, and React.

> Verification: Code inspection. Everything will be written in HTML, CSS, JavaScript, and React.

1.2. The web app will be accessible via Google Chrome and Firefox.

> Verification: Manual inspection and visual confirmation that all requirements are met through each browser. 

1.3 The colors and typography used for the web app will adhere to the UW Branding Guide.

> Verification: Code inspection - all instances of a HEX code or RGB value will fall within the UW brand colors (5b2e83, e8e3d3, 85754d--check requirements page for more info).

1.4. The web app will be divided into these 5 sections: Resources, Responses, Community, Trackers & Dashboards, and Drop a Note.

> Verification: Manual inspection and visual confirmation - ensure that the code is made to divide these 5 sections and will show 5 sections in the browser when completed. 

1.5. Each section will be displayed as a box with the content on the main page.

> Verification: Visual confirmation - the final webpage will show the box with content for that section. 

1.6. Every section (excluding Trackers & Dashboards and Drop a Note) has a button to open a section’s additional information on a new page. The individual button in each of the sections will contain the respective text (phrase after the dash):
	* Resources Section - See All
	* Responses - Find Articles
	* Community - Stay Connected

> Verification: Visual confirmation - Will ensure that we include buttons that lead to additional information and this will be shown in the final webpage. 

1.7. On the top left of each page, the dashboard header will contain “Purple Recovery” as a title header, and “COVID-19 Information for UW Students” as a subheader. These will be sticky on each page. When not on the main page, clicking the title and/or subheader will bring the user back to the main dashboard page.

> Verification: Visual confirmation - Clicking the header and subheader for each page will  link the user back to the main dashboard; this will be true for each webpage on the final product. 

1.8. On the top right of the landing page, there will be a banner displaying the title and date posted of the newest message or update posted in the Messages & Updates section found in the Official UW COVID-19 Page. Clicking this will link to the corresponding message or update link.

> Verification: Visual confirmation and manual inspection.

### 2: Resources

2.1. The Resources section will be divided into two subsections as columns.

> Verification: Manual testing, visual confirmation, and code inspection.  Make sure columns are as designed in the models.

2.2. The left column will be titled “UW FAQs” and the right column titled “Quick Links”.

> Verification: Manual, visual confirmation, and code inspection. Brand identity falls within UW’s color specifications.

2.3. The “UW FAQs” column will contain 5 sub-sections in rows. Each will be a card button with the following titles: “Health, Wellness, and Prevention”, “Staff and Student Workers”, “Classes, Academics & Commencement”, “University Operations”, and “Travel and Study Abroad”.

> Verification: Manual testing, visual confirmation, and code inspection.

2.4. Clicking any one of the 5 card buttons will redirect the user to the corresponding section on the official UW FAQ Page.

> Verification: Manual testing and visual confirmation. Code inspection for the hyperlinks, href, and making sure the integration of the information is correct.

2.5. The sub-section hyperlinks will follow this format: https://www.washington.edu/coronavirus/#[subsection name] Where [subsection name] will be replaced with the following respective names: ‘health’, ‘staff’, ‘classes’, ‘operations’, and ‘travel’.

> Verification: Manual testing. Code inspection for the hyperlinks, href, and making sure the integration of the information is correct.

2.6. The “Quick Links” section, which is the right column underneath the Resources section, will display 6 individual hyperlinks found on the UW COVID-19 page: “CDC recommendation page”, “DOH page”, “COVID Call Center”, “UW Medicine page”, “UW Mental Health Resources”, and “Spring Quarter FAQ”. These will be displayed in a list view of text hyperlinks, and clicking any of them will redirect the user to that resource’s external website.

> Verification: Manual testing and inspection. Code inspection for the hyperlinks, href, and making sure the integration of the information is correct.

### 3: Responses

3.1. This section will contain links to UW-community published material (The Daily, UW Faculty Messages, UW Facebook Pages, etc.).

> Verification: Manual inspection and visual confirmation. We will look at each section and ensure that all links displayed are UW-community published material.

3.2. The articles will be displayed as card buttons with the article title on the right and the page cover image in the article on the left (if available).

> Verification: Manual inspection and visual confirmation. We will check that card buttons redirect to the appropriate page.

3.3. The Responses section will display 3 of the most recently added articles to Purple Recovery on the main dashboard page.

> Verification: Manual inspection. We will ensure that the 3 most recently added “Responses” articles to Purple Recovery are accurate and are updated to the most recent posts. 

3.4. The section will display a ‘Find Articles’ button in the bottom right corner that links to the Responses’ section view page.

> Verification: Manual inspection and visual confirmation. We will check the bottom right corner of this section and ensure that it says ‘Find Articles’, and that clicking it leads to the Responses individual page. 

### 4: Community

4.1. This section will contain the three most recently added Community links to Purple Recovery. These links can either be team-curated (added by Purple Recovery team) or added by the public via "Drop A Note" (and then verified by Purple Recovery team).

> Verification: Manual inspection. We will ensure that the 3 most recently added “Community” resources to Purple Recovery are accurate and are updated to the most recent posts. 

4.2. Each link will be displayed as a card button with the Community resource title on the right and a related icon on the left.

> Verification: Manual inspection and visual confirmation. We will check that card buttons redirect to the appropriate page.

4.3. The section will display a ‘Stay Connected’ button in the bottom right corner that links to the Community’s section view page.

> Verification: Manual inspection and visual confirmation. We will check the bottom right corner of this section and ensure that it says ‘Stay Connected’, and that clicking it leads to the Community individual page. 

### 5: Trackers & Dashboards

5.1 This section will contain links to data visualization dashboards regarding COVID-19 statistics.

> Verification: Code inspection for the hyperlinks, href, and making sure the integration of the information is correct.

5.2. The links in this section will be displayed as card buttons with the Tracker/Dashboard name on the main dashboard page.
> Verification: Manual testing and visual confirmation. Code inspection for the links.

5.3. There will be three card buttons:
	5.3.1. The first card buttons will be titled “UW COVID-19” and will link to the UW COVID-19 Testing Results page (https://www.washington.edu/coronavirus/testing-results/) .
	5.3.2. The second card button will be titled “King County” and will link to the King County COVID-19 data dashboard (https://www.kingcounty.gov/depts/health/communicable-diseases/disease-control/novel-coronavirus/data-dashboard.aspx)
	5.3.3. The third card button will be titled “Washington State” and will link to the Washington Department of Health (DOH) COVID-19 page (https://www.doh.wa.gov/emergencies/coronavirus)

> Verification: Manual testing and visual confirmation. Code inspection for the hyperlinks, check buttons, and making sure the integration of the information is correct.

### 6: Drop A Note
6.1. On the bottom right of each page, there will be a sticky square section, containing, “Anything missing?” and a button that contains the text “Drop a Note”.

> Verification: Manual testing to confirm the visual display

6.2. When clicked, the “Drop a Note” button will overlay a modal card form on top of the user’s current page position.

> Verification: Unit testing to confirm the function to display the modal

6.3. The form created from clicking “Drop a Note” will contain a card title, description, input fields, and a “Submit” button.

> Verification: for requirements 6.1-6.3,  these items will be verified through visual confirmation on the Web App.

6.4. On the top right corner, the form will have a button with an “x” icon; clicking it closes the form.

> Verification: Manual testing to confirm button display; unit testing to confirm button close function

6.5. The user will be able to check the “Feedback?” and “Resource?” checkboxes

> Verification: Manual testing to ensure feedback and resource boxes can be checked

6.6. The user will be able to input string values in the “Full Name” and “Email” fields.

> Verification: Manual unit testing for correct and erroneous inputs

6.7. The “Type of Resource” dropdown will consist of the following options: Resources, Responses, Community, Trackers and Dashboards, and Other/I’m Not Sure.

> Verification: Manual testing to ensure display of options

6.8. If the “Resource?” checkbox is clicked, the user will be able to input string values in the “Link to Resource” and “Notes” fields and use the “Type of Resource” dropdown to choose a resource type.

> Verification: Unit testing for string fields; manual testing to confirm all fields can be entered / selected

6.9. If the “Feedback?” checkbox is clicked, the user will be able to input string values in the “Feedback” field.

> Verification: for requirements 6.4-6.9,  these items will be verified through manual verification of functionality to test input ability as well as proper operation in the javascript  through code inspection.

6.10. The “Submit” button will push the entered data through an internal verification process.

> Verification: Unit testing to ensure data is passed and verified in React

6.11. The verification process is done through Javascript or React and will ensure that categories that are checked should have all fields filled in and that formatting for email is syntactically correct (i.e. example@hostsite.com).

> Verification: Manual testing to submit missing fields and confirm that form submission is blocked; manual testing to input incorrectly formatted emails, and expect no submission

6.12. The verification process will also validate submitted links in Javascript.

> Verification: Manual testing to submit incorrectly formatted urls

6.13. If the submission is found to be incomplete by this verification process, the user will be prompted to edit fields that did not pass the verification process and submit again.

> Verification: Manual testing for each individual field; verify that form is not submitted and errors are displayed for each erroneous field

6.14. If the submission is complete and without error, a successful submission message will appear in place of the previous screen’s view.

> Verification: for requirements 6.10-6.14,  these items will be verified through code inspection of proper package usage in Javascript and React to ensure functionality.

6.15. On the top right corner, the successful submission message will have a button with an "x" icon; clicking it closes the successful submission message modal screen.

> Verification: for requirement 6.15,  this item will be verified through visual confirmation as well as manual verification of functionality in the javascript through code inspection.

### 7: Section View Page

7.1. A section view page will be made for the following three sections: Resources, Responses, and Community.

> Verification: Visual confirmation and manual inspection - Will ensure that these three sections are made. 

7.2. The section view page will contain a breadcrumb link in the top left below the site title.

> Verification: Visual confirmation and manual inspection. The code will ensure that the link is included. 

7.3. Each of the breadcrumbs will link to the respective internal page that is displayed in the list.
> Verification: Visual confirmation and manual inspection.

7.4. The section view page will contain a title of the section that it is related to.

> Verification: Visual confirmation and manual inspection. 

7.5. The section view page will display a more comprehensive list of relevant links to its parent section from the main dashboard, as an overflow for the main page.

> Verification: Manual inspection and visual confirmation. 

7.6. All URLs will be populated by developers inside of the HTML file.

> Verification: Manual inspection. We will ensure that the URLs will be developed. 

7.7. The list of relevant links will also contain a descriptive label or sentence about the links that are listed.

> Verification: Manual inspection and visual confirmation. 

7.8. The “Drop a Note” feature will stay sticky in the bottom right of the page view--the same location as the main dashboard.

> Verification: Manual inspection and visual confirmation. 

7.9. The section view page will contain a text navigation of all of the resources’ section view pages on the right-hand side under the heading “Sections”. The current page that the user is on will be a deadlink/disabled link. 

> Verification: Manual inspection and visual confirmation. 

