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
/*class FormSubmitController extends Component() {

  // pre: sends feedback data as arguments to DropeANoteModel.saveFeedback()
  // post: communicates to DropANoteController to display SubmitSuccessView
  sendFeedback() {}

} */

// Handles the display of the DropANoteView, FormModalView and
// SubmitSuccessView
class DropANoteController extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false}
  }
  

  // On button click, display FormModalView
  // pre: modal is not visible
  // post: modal is visible
  showModal = () => {
    console.log('Modal show');
    this.setState({
      show: true
    });
  }

  hideModal = () => {
    console.log('Modal hidden');
    this.setState({
      show: false
    });
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
      <div>
        <FormModalView show={this.state.show} hide={this.hideModal}/>
        <DropANoteView showModal={this.showModal}/>
      </div>
    );
  } 
}

// DropANote box displayed on bottom corner
class DropANoteView extends Component {
  render() {
    var imgStyle = {
      position: 'fixed',
      right: 0,
      bottom: 0
    };

    return (
      <button onClick={this.props.showModal}>
        <img src={require("./img/dropanote.png")} style={imgStyle} alt="Submit a resource to be added" />
      </button>
    );
  } 
}

// Displays submission form modal
// Utilizes FormValidation hook to display fields and errors
class FormModalView extends Component {
  render () {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        Modal goes here
        <button onClick={this.props.hide}>Close</button>
      </div>
    );
  }

}

// Modal displayed on submission success
class SubmitSuccessView extends Component {}

export {DropANoteModel, DropANoteController/*, DropANoteView, FormModalView, SubmitSuccessView, FormSubmitController*/};