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

#### IndividualPageView
  * This component displays a whole page dedicated to a main section. All links related to the section will be displayed in a scrollable view, and may be divided into subsections.
  * Three instances:
	  * “ResourcesPageView”
	  * “ResponsesPageView”
	  * “CommunityPageView”
  * Resides on client-side only
 
#### DropANoteView
  * Displays the text “Anything missing?” with a button to open FormModalView
  * Visible as a bottom-right corner footer on all pages
  * Resides on client-side only
 
#### FormModalView
  * Displays a submittable form with fields for name, email, suggestions for a new resource, and general feedback
  * Displays submit button on the bottom right
  * Communicates with FormValidationContoller to validate each field
  * Resides on client-side only
 
#### SubmitSuccessView
  * Displays a confirmation to the user that their form has been submitted
  * Communicates with FormSubmitController to verify successful submission
  * Resides on client-side only
  
## Models
#### DropANoteModel
   * Text-based model recieves form data from FormValidationController, organizes and sends the data for storage in Firebase
   * Communicates with FormSubmitController when a submission is successful
   * Feedback data is stored externally in Firebase, to be accessed by Purple Recovery team members eventually for review after submission
   * Resides on client-side only
  
## Controllers
_DropANoteController_
   * On button click from DropANoteView, displays the FormModalView
   * On submission success from FormSubmitController, displays SubmitSuccessView
   * Resides on client-side only
 
_FormValidationController_
   * On form submit, performs field validation. If all fields pass validation, sends form data to FormSubmitController
   * We will utilize the React Hook Form package from Node.js to implement the validation
   * Resides on client-side only
 
_FormSubmitController_
  * This component receives a form submission from FormValidationController and sends the data to the DropANoteModel
  * Communicates with DropANoteModel to register a successful submission
  * Communicates to DropANoteController to display SubmitSuccessView
  * Resides on client-side only

