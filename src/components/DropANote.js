import React, {Component} from 'react';

// Firebase 
class DropANoteModel extends Component {

  // pre: Accepts Strings for name, email, resource name, resource type, url,
  //      and additional feedback
  // post: saves data as message to Firebase
  saveFeedback(name, email, resource, resourceType, url, feedback) {

  }
  
}

// Called by FormValidation. Passes data to DropANoteModel.saveFeedback()
// and waits for confirmation
class FormSubmissionController extends Component() {

  // pre: sends feedback data as arguments to DropeANoteModel.saveFeedback()
  // post: communicates to DropANoteController to display SubmissionSuccessView
  sendFeedback() {}

}

// Handles the display of the DropANoteView, FormModalView and
// SubmissionSuccessView
class DropANoteController extends Component {
  
  // On button click, display FormModalView
  // pre: modal is not visible
  // post: modal is visible
  handleClick() {

  }

  // On confirmation from FormSubmissionController, render the
  // SubmissionSuccessView
  handleSuccess() {
  
  }

  // Renders the Drop a Note View
  // Will display the FormModalView and SubmissionSuccessView as directed
  // by controllers
  //
  // pre: Displays DropANoteView
  // post: Displays FormModalView over page
  // post: On submission, displays SubmissionSuccessView
  render() {
    return (
      <div></div>
    );
  } 
}

// DropANote box displayed on bottom corner
class DropANoteView extends Component {}

// Displays submission form modal
// Utilizes FormValidation hook to display fields and errors
class FormModalView extends Component {}

// Modal displayed on submission success
class SubmissionSuccessView extends Component {}

export {DropANoteModel, FormSubmissionController};