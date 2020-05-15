import React, {Component} from 'react';
import { useForm } from 'react-hook-form';
import { render } from '@testing-library/react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// Displays form fields and submit button. Utilizes the React Hook Form package 
// to handle form validation and error display.
//
// Implemented as a function to ultilize the hooks feature of React.
//
// pre: displays empty form
// post: displays form and errors for fields
export default function Form() {
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  var formStyle = {
    // not quite sure yet for how to style the different background behind the modal display 
    // background: '#4B2E83'
  };

  var submissionTextStyle = {
    display: 'flex',
    align: 'center'
  };

  return (
    <div style={formStyle}>
      <img src={require("./img/submission_text.png")} style={submissionTextStyle} alt="Submit a Resource, Feedback, or Note"/>
      <form onSubmit={handleSubmit(onSubmit)}>
        First Name*
        <input name="firstName" ref={register({ required: true })}/>
        <br></br>
        Last Name*
        <input name="lastName" ref={register({ required: true })}/>
        <br></br>
        Email*
        <input
          name="email"
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
        <br></br>
        <p>Select one of the following:</p>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="resource"
              checked={true}
              className="form-check-input"
            />
            Resource
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="feedback"
              className="form-check-input"
            />
            Feedback
          </label>
        </div>
        <br></br>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type of Resource
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/resources">Resources</Dropdown.Item>
            <Dropdown.Item href="#/responses">Responses</Dropdown.Item>
            <Dropdown.Item href="#/community">Community</Dropdown.Item>
            <Dropdown.Item href="#/trackers">Trackers and Dashboards</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br></br>
        <button type="submit">
          <img src={require("./img/submit.png")} alt="Submit resource button"/>
        </button>
      </form>
    </div>
  );
}