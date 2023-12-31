import React, { useContext } from 'react';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { loginSchema } from '../validate/Validate.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';  // Add this line
import { UserContext } from '../context/User.jsx';
import { Link } from 'react-router-dom';

import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  let {userToken,setUserToken}=useContext(UserContext);
  
  if(userToken){
    navigate(-1);
  }
  // Move formik declaration outside the hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (users) => {
      try {
        const { data } = await axios.post(
          `https://ecommerce-node4.vercel.app/auth/signin`,
          users
        );

        if (data.message === 'success') {
            localStorage.setItem('userToken', data.token);
            setUserToken(data.token);

         // saveCurrentUser(); // This is where the error occurs
          formik.resetForm();
          toast.success('Log in is successful', {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          navigate('/');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('An error occurred during login');
      }
    },
    validationSchema: loginSchema,
  });

  const Inputs = [
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: 'Email',
      value: formik.values.email,
    },
    {
      id: 'password',
      type: 'password',
      name: 'password',
      title: 'Password',
      value: formik.values.password,
    },
  ];

  const renderInputs = Inputs.map((input, index) => (
    <div key={index} className="mb-4">
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        title={input.title}
        value={input.value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched}
      />
      {formik.touched[input.name] && formik.errors[input.name] && (
        <div className="text-danger mt-1">{formik.errors[input.name]}</div>
      )}
    </div>
  ));
  const [showForget, setShowForget] = useState(false); // Add state variable to track forget visibility

  const handleForgetClick = () => {
    setShowForget(true);
  };

  return (
    <div>
      <div>
        <h2>Log in</h2>
        <form onSubmit={formik.handleSubmit}>
          {renderInputs}

          <button type="submit" disabled={!formik.isValid}>
            Log in
          </button>
          <Link to='/sendcode'>forget password</Link>
        </form>
      </div>
    </div>
  );
}
export default Login;