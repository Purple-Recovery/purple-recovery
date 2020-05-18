import React, {Component} from 'react';
import { useForm } from 'react-hook-form';
// import { render } from '@testing-library/react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

// if material ui is not already downloaded, use the following in terminal:
// npm install @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// Displays form fields and submit button. Utilizes the React Hook Form package 
// to handle form validation and error display.
//
// Implemented as a function to ultilize the hooks feature of React.
//
// pre: displays empty form
// post: displays form and errors for fields
export default function FormValidation() {
  
  const classes = useStyles();
  // Text area values
  const [value1, setValue1] = React.useState(''); // Link to Resource
  const [value2, setValue2] = React.useState(''); // Feedback
  const [value3, setValue3] = React.useState(''); // Notes

  // Text area set values
  const handleChange1 = (event) => {
    setValue1(event.target.value);  // Link to Resource
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);  // Feedback
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);  // Notes
  };

  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  var submissionTextStyle = {
    padding: 20
  };

  var submissionButtonStyle = {
    padding: 15,
    backgroundColor: 'white',
    border: 'none', 
    float: 'right'
  };

  return (
    <div>
      {/* Image of modal header */}
      <img src={require("./img/submission_text.png")} style={submissionTextStyle} alt="Submit a Resource, Feedback, or Note"/>
      
      {/* First name, last name, email entry */}
      <form onSubmit={handleSubmit(onSubmit)}>
        First Name*
        <input name="firstName" ref={register({ required: true })}/>
        <br></br>
        <br></br>

        Last Name*
        <input name="lastName" ref={register({ required: true })}/>
        <br></br>
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
        <br></br>

        {/* Radio Buttons */}
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

        {/* Resource dropdown */}
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type of Resource
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/resources">Resources</Dropdown.Item>
            <Dropdown.Item href="#/responses">Responses</Dropdown.Item>
            <Dropdown.Item href="#/community">Community</Dropdown.Item>
            <Dropdown.Item href="#/trackers">Trackers and Dashboards</Dropdown.Item>
            <Dropdown.Item href="#/other">Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Type of resource</Form.Label>
          <Form.Control as="select">
            <option>Resources</option>
            <option>Responses</option>
            <option>Community</option>
            <option>Trackers</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <br></br>

        {/* Link to Resource text field */}
        <TextField
          id="outlined-textarea-Link"
          label="Link to Resource"
          placeholder="Insert full URL here"
          multiline
          variant="outlined"
          value={value1}
          onChange={handleChange1}
        />
        <br></br>
        <br></br>

        {/* Feedback text field */}
        <TextField
          id="outlined-multiline-static-Feedback"
          label="Feedback"
          multiline
          rows={5}
          placeholder="For comments, questions, concerns, etc."
          variant="outlined"
          value={value2}
          onChange={handleChange2}
        />
        <br></br>
        <br></br>


        {/* Note (optional) text field */}
        <TextField
          id="outlined-multiline-static-Notes"
          label="Notes"
          multiline
          rows={5}
          placeholder="Optional"
          variant="outlined"
          value={value3}
          onChange={handleChange3}
        />
        <br></br>
        <br></br>

        {/* Submission button */}
        <button type="submit" style={submissionButtonStyle}>
          <img src={require("./img/submit.png")} alt="Submit resource button"/>
        </button>

      </form>
    </div>
  );
}