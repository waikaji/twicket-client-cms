import React, { useState } from 'react';
import SButton from '../../components/Button/index';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import axios from 'axios';

function PageSignin() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:9000/api/v1/cms/auth/signin', 
      {
        email: form.email,
        password: form.password
      })

      console.log(res);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Container md={12}>
      <Card style={{ width: '50%' }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title className='text-center'>Form Signin</Card.Title>
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
            
            <SButton action={handleSubmit} variant="primary" type="submit">
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PageSignin;