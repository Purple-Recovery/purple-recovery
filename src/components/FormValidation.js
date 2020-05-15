import React, {Component} from 'react';
import { useForm } from 'react-hook-form';
import { render } from '@testing-library/react';

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
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      First Name*
      <input name="firstName" ref={register({ required: true })}/>
      Last Name*
      <input name="lastName" ref={register({ required: true })}/>
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
      
      <button type="submit">Submit</button>
    </form>
  );
}