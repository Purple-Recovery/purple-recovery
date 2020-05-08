import React, {Component} from 'react';

// Model for feedback data
class DropANoteModel extends Component {

  // pre: Accepts Strings for name, email, resource name, resource type, url,
  //      and additional feedback
  // post: saves data as message to Firebase
  saveFeedback(name, email, resource, resourceType, url, feedback) {

  }
  
}

// Called by FormValidation. Passes data to DropANoteModel.saveFeedback()
// and waits for confirmation
class FormSubmitController extends Component() {

  // pre: sends feedback data as arguments to DropeANoteModel.saveFeedback()
  // post: communicates to DropANoteController to display SubmitSuccessView
  sendFeedback() {}

}

// Handles the display of the DropANoteView, FormModalView and
// SubmitSuccessView
class DropANoteController extends Component {
  
  // On button click, display FormModalView
  // pre: modal is not visible
  // post: modal is visible
  handleClick() {

  }

  // On confirmation from FormSubmitController, render the
  // SubmitSuccessView
  handleSuccess() {
  
  }

  // Renders the Drop a Note View
  // Will display the FormModalView and SubmitSuccessView as directed
  // by controllers
  //
  // pre: Displays DropANoteView
  // post: Displays FormModalView over page
  // post: On submission, displays SubmitSuccessView
  render() {
    return (
      <div class="DropANoteView">
        {/* Render Drop a Note View as an image */}
          <img src="./img/dropanote.png" style="position: fixed;right: 0;bottom: 0;"></img>
      </div>
    );
  } 
}

// DropANote box displayed on bottom corner
class DropANoteView extends Component {}

// Displays submission form modal
// Utilizes FormValidation hook to display fields and errors
class FormModalView extends Component {}

// Modal displayed on submission success
class SubmitSuccessView extends Component {}

export {DropANoteModel, FormSubmitController};