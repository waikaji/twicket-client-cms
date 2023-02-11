import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import SAlert from '../../components/Alert/index';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../utils/fetch';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/actions';

import SForm from './form';

function PageSignin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [alert, setAlert] = useState({
    status: false,
    type: 'danger',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await postData(`/cms/auth/signin`, form);

    if (res?.data?.data) {
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.email,
          res.data.data.refreshToken
        )
      );
      setIsLoading(false);
      navigate('/');
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        message: res?.response?.data?.msg ?? 'Internal server error',
        type: 'danger',
      });
    }
    
    // try {
    //   setIsLoading(true);
    //   const res = await postData(`/cms/auth/signin`, form);

    //   dispatch(userLogin(res.data.data.token, res.data.data.role));
    //   setIsLoading(false);
    //   navigate('/');
    // } catch(err) {
    //   setAlert({
    //     status: true,
    //     type: 'danger',
    //     message: err?.response?.data?.msg ?? 'Internal Server Error'
    //   });
    //   setIsLoading(false);
    // }
  }


  return (
    <Container md={12} className='my-5'>
      <div className='m-auto' style={{ width: '50%' }}>
        { alert.status && <SAlert type={alert.type} message={alert.message} /> }
      </div>
      <Card style={{ width: '50%' }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title className='text-center'>Form Signin</Card.Title>
          <SForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PageSignin;