import React, {Component} from 'react';
import FormValidation from './FormValidation.js';
import Modal from 'react-bootstrap/Modal';

// Firebase
import firebase from 'firebase/app';

// CSS
import '../css/App.css';

// Model for feedback data
class DropANoteModel extends Component {
 
}

// Handles the display of the DropANoteView, FormModalView and
// SubmitSuccessView
class DropANoteController extends Component {
  constructor(props) {
    super(props);
    this.messagesRef = firebase.database().ref('messages');

    this.state = {
      showModal: false,
      showSuccess: false
    }
  }

  // pre: Accepts object of form data
  // post: saves data as message to Firebase
  saveFeedback = (formData) => {
    var message = this.messagesRef.push();
    message.set({formData});
  }

  // On button click, display FormModalView
  // pre: modal is not visible
  // post: modal is visible
  showModal = () => {
    this.setState({
      showModal: true
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleSuccess = (data) => {
    this.hideModal();
    this.saveFeedback(data);
    this.showSuccess();
  }

  // On confirmation from FormSubmitController, render the
  // SubmitSuccessView
  showSuccess = () => {
    this.setState({
      showSuccess: true
    });
  }

  hideSuccess = () => {
    this.setState({
      showSuccess: false
    });
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
        <FormModalView show={this.state.showModal} hide={this.hideModal} handleSuccess={this.handleSuccess}/>
        <SubmitSuccessView show={this.state.showSuccess} hide={this.hideSuccess} />
        <DropANoteView showModal={this.showModal} />
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
      <img onClick={this.props.showModal} src={require("./img/dropanote.png")} style={imgStyle} alt="Submit feedback or a resource to be added"/>
    );
  } 
}

// Displays submission form modal
// Utilizes FormValidation hook to display fields and errors
class FormModalView extends Component {
  render () {  
    return (
      <Modal show={this.props.show} onHide={this.props.hide} className="modal-blur" size="lg">
        <Modal.Header>
          <Modal.Title />
          <button onClick={this.props.hide} className="close-button">
            <img src={require("./img/close.png")} alt="Close form"/>
          </button>
        </Modal.Header>
        <FormValidation handleSuccess={this.props.handleSuccess}/>
      </Modal>
    );
  }

}

// Modal displayed on submission success
class SubmitSuccessView extends Component {
  render () {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header>
          <Modal.Title />
          <button onClick={this.props.hide} className="close-button">
            <img src={require("./img/close.png")} alt="Close form"/>
          </button>
        </Modal.Header>
        <Modal.Body>
          Form has been submitted successfully! Thank you for sharing
        </Modal.Body>
      </Modal>
    );
  }


}

export {DropANoteController};