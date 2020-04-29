import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormValidation() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      {errors.email && <p> This is required</p>}
      <input type="url" placeholder="Website" name="Website" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}