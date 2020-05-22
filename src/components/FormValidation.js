import React, { Component, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/App.css';

// Displays form fields and submit button. Utilizes the React Hook Form package 
// to handle form validation and error display.
//
// Implemented as a function to ultilize the hooks feature of React.
//
// pre: displays empty form
// post: displays form and errors for fields
export default function FormValidation() {

  const [disabled, setDisabled] = useState(false);

  function handleFeedbackClick() {
    setDisabled(!disabled);
    console.log("Feedback option selected");
  }

  function handleResourceClick() {
    setDisabled(false);
    console.log("Resource option selected");
  }

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert(`Thank you for sharing! Your submission has been logged, you may close this form now.`);
    // return(
    //   <Fragment>
    //     <img src={require("./img/success.png")} alt="Submission succesful!"/>
    //   </Fragment>
    // );
  };

  var submissionTextStyle = {
    padding: 20
  };

  var submissionButtonStyle = {
    padding: 15,
    backgroundColor: 'white',
    border: 'none',
    float: 'right',
    display: 'flex',
    justifyContent: 'flex-end'
  };

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Image of modal header */}
      <img src={require("./img/submission_text.png")} style={submissionTextStyle} alt="Submit a Resource or Feedback" />

      <div className="row">
        <div className="column">
          {/* First name and last name entry */}
          <p id="name-field">First Name:</p>
          <input name="firstName" type="text" placeholder="First name" ref={register({ required: true, maxLength: 30 })} />
          {errors.firstName && "First name is required"}
        </div>

        <div className="column">
          <p id="name-field">Last Name:</p>
          <input name="lastName" type="text" placeholder="Last name" ref={register({ required: true, maxLength: 100 })} />
          {errors.lastName && "Last name is required"}
        </div>

        <div className="column">
          {/* Email entry */}
          <p id="name-field">Email:</p>
          <input
            name="email"
            type="text"
            placeholder="Email"
            ref={
              register({
                required: true,
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Must be a vaild email'
                }
              })
            }
          />
          {errors.email && errors.email.message}
        </div>
      </div>

      {/* Radio Buttons */}
      <p>Select one of the following:</p>
      <div className="row">
        <div className="column">
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="Submission Type"
                value="Resource"
                onClick={handleResourceClick}
                className="form-check-input"
                ref={register}
              />
              Resource
            </label>
          </div>
        </div>

        <div className="column">
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="Submission Type"
                value="Feedback"
                className="form-check-input"
                onClick={handleFeedbackClick}
                ref={register}
              />
              Feedback
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          {/* Resource dropdown */}
          <p>Type of resource</p>
          <select name="Type of resource" disabled={disabled} ref={register}>
            <option value="Resources">Resources</option>
            <option value="Responses">Responses</option>
            <option value="Community">Community</option>
            <option value="Trackers">Trackers and Dashboards</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="column">
          {/* Feedback text field */}
          <p>Feedback</p>
          <input type="text" placeholder="Feedback" disabled={!disabled} name="Feedback" ref={register} />
        </div>
      </div>

      <div className="row">
        <div className="column">
          {/* Link to Resource text field */}
          <p>Resource Link</p>
          <input
            name="link"
            type="url"
            placeholder="Link to Resource"
            disabled={disabled}
            ref={
              register({
                pattern: {
                  value: "https?://.+",
                  message: 'Must be a valid URL'
                }
              })
            }
          />
          {errors.link && errors.link.message}
        </div>
      </div>

      <div className="row">
        <div className="column">
          {/* Note (optional) text field */}
          <p>Notes</p>
          <input type="text" placeholder="Optional" disabled={disabled} name="Notes" ref={register} />
        </div>
      </div>


      {/* Submission button */}
      <button type="submit" style={submissionButtonStyle}>
        <img src={require("./img/submit.png")} alt="Submit resource button" />
      </button>
    </form>
  );
}