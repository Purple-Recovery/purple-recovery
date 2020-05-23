import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/App.css';

// Displays form fields and submit button. Utilizes the React Hook Form package 
// to handle form validation and error display.
//
// Implemented as a function to ultilize the hooks feature of React.
//
// pre: displays empty form
// post: displays form and errors for fields
export default function FormValidation(props) {

  const [disabled, setDisabled] = useState(false);

  function handleFeedbackClick() {
    setDisabled(!disabled);
    console.log("Feedback option selected");
  }

  function handleResourceClick() {
    setDisabled(false);
    console.log("Resource option selected");
  }

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    props.handleSuccess(data);
  };

  var submissionTextStyle = {
    padding: 20
  };

  var submissionButtonStyle = {
    padding: '15px',
    radius: '10px',
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

        {/* First name input */}
        <div className="column">
          <label className="form-label">First Name:</label>
          <input name="firstName" type="text" placeholder="First name" ref={register({ required: true, maxLength: 30 })} />
          {errors.firstName && errors.firstName.type === "required" && (
            <div className="error-message">Required</div>
          )}
          {errors.firstName && errors.firstName.type === "maxLength" && (
            <div className="error-message">Can be max 30 characters long</div>
          )}
        </div>

        {/* Last name input */}
        <div className="column">
          <label className="form-label">Last Name:</label>
          <input name="lastName" type="text" placeholder="Last name" ref={register({ required: true, maxLength: 80 })} />
          {errors.lastName && errors.lastName.type === "required" && (
            <div className="error-message">Required</div>
          )}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <div className="error-message">Can be max 80 characters long</div>
          )}
        </div>

        {/* Email input */}
        <div className="column">
          <label className="form-label">Email:</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            ref={
              register({
                required: true,
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
              })
            }
          />
          {errors.email && errors.email.type === "required" && (
            <div className="error-message">Required</div>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <div className="error-message">Must be a valid email</div>
          )}
        </div>
      </div>

      {/* Radio Buttons */}
      <p>Select one of the following:</p>
      <div className="row">
        <div className="column">
          <div className="form-check">
            <label>
              <input
                defaultChecked="true"
                type="radio"
                name="submissionType"
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
                name="submissionType"
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
        {/* Resource dropdown input */}
        <div className="column">
          <label className="form-label">Type of Resource:</label>
          <select name="resourceType" disabled={disabled} ref={register}>
            <option value="Resources">Resources</option>
            <option value="Responses">Responses</option>
            <option value="Community">Community</option>
            <option value="Trackers">Trackers and Dashboards</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Feedback text input */}
        <div className="column">
          <label className="form-label">Feedback:</label>
          <input type="text" placeholder="Comments, questions, etc." disabled={!disabled} name="feedback" ref={register} />
        </div>
      </div>

      <div className="row">
        {/* Resourse Link input */}
        <div className="column">
          <label className="form-label">Link to Resource:</label>
          <input
            name="link"
            type="url"
            placeholder="Insert full URL (https://...)"
            disabled={disabled}
            ref={
              register({
                pattern: {
                  value: "https?://.+"
                }
              })
            }
          />
          {errors.link && errors.link.type === "pattern" && (
            <div className="error-message">Must be a valid URL</div>
          )}
        </div>
      </div>

      <div className="row">
        {/* Notes (optional) text field */}
        <div className="column">
          <label className="form-label">Notes:</label>
          <input type="text" placeholder="Optional" disabled={disabled} name="notes" ref={register} />
        </div>
      </div>


      {/* Submit button */}
      <button type="submit" style={submissionButtonStyle}>
        <img src={require("./img/submit.png")} alt="Submit button" />
      </button>
    </form>
  );
}