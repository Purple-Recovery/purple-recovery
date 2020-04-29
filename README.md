# Purple Recovery Architecture Description
## Views 
#### “DashboardView”
  * This component displays the HeaderView and SectionViews 
  * Resides on the client-side only
 
#### “HeaderView”
	* This component displays the Purple Recovery title and site description
	* Contains an instance of BannerView 
  * Resides on the client-side only
 
 #### “BannerView”
	* This displays  the most recently added UW message or update
  * Resides on the client-side only
 
#### SectionView
  * This component displays a single category of information on the main dashboard with featured external links
  * This component displays a button on the bottom right that leads the user to another page
  * There will be 3 instances of this component for the Resources, Responses, and Community sections
  * Resides on the client-side only
 
#### “TrackersSectionView”
  * This component displays links to external data visualization dashboards regarding COVID-19 statistics. 
	* Resides on the client-side only
 
#### BreadcrumbNavView
  * This component displays a line of text that will display the users directory 
path relative to the main page. Will provide one-click access to each of the parent pages. 
	* Communicates with the previous page. 
	* Resides on client-side only
 
#### DropANoteView
  * Displays the text “Anything missing?” with a button to send feedback
  * Visible as a bottom-right corner footer on all pages
  * Communicates with DropANoteController to display SubmitAResourceView on button click
  * Resides on client-side only
 
#### SubmitAResourceView
  * Displays a submittable form with fields for name, email, suggestions for a new resource, and general feedback
  * Displays submit button on the bottom right
  * Communicates with FormVerificationController to validate form data
  * Resides on client-side only
 
#### SubmissionSuccessView
	* Displays a confirmation to the user that their form has been submitted
	* Communicates with FormSubmissionController to verify successful submission
  * Resides on client-side only
 
#### IndividualPageView
	* This component displays a whole page dedicated to a main section. All links
related to the section will be displayed in a scrollable view, and may be divided into subsections.
	* Contains a BreadcrumbNavView and an IndividualPageNavView
  * “ResourcesPageView”
  * “ResponsesPageView”
  * “CommunityPageView”
 
#### IndividualPageNavView
	* This component displays a side navigation box that will display the links to the
 	other instances of IndividualPageViews.
	* Resides on client-side only
  
## Models
#### Firebase for Drop a Note
	* Communicates with DropANoteController to receive the correctly formatted text data and return a “Submission Success” page
	* Feedback is stored in external database, to be accessed by Purple Recovery team members eventually for review after submission
  
## Controllers
_DropANoteController_
*On button click from DropANoteView, displays the SubmitAResourceView
*Resides on client-side only
 
_FormVerificationController_
  * On form submission, performs field-checking and verification
  * If all required fields are filled and valid, sends form data to FormSubmissionController
  * Resides on client-side only
 
_FormSubmissionController_
  * This component receives a form submission from FormVerificationController, captures the fields and sends the data to Firebase for storage
  * Communicates with Firebase to send submission data
  * Resides on client-side only

