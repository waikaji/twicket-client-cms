import React from 'react';
import { Form } from 'react-bootstrap';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';

export default function SForm({form, handleChange, isLoading, handleSubmit}) {
  return (
    <Form>
      <TextInputWithLabel 
        label='Email Address' 
        name='email' 
        value={form.email} 
        type='email' 
        placeholder='Enter Email' 
        onChange={handleChange} 
      />

      <TextInputWithLabel 
        label='Password' 
        name='password' 
        value={form.password} 
        type='password' 
        placeholder='Enter Passwords' 
        onChange={handleChange} 
      />
      
      <SButton loading={isLoading} disabled={isLoading} action={handleSubmit} variant="primary" type="submit">
        Submit
      </SButton>
    </Form>
  )
}
