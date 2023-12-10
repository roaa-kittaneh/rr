import React  from 'react';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { SendcodeSchema } from '../validate/Validate.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

function Sendcode() {
  const navigate = useNavigate();

  
  // Move formik declaration outside the hook
  const formik = useFormik({
    initialValues: {
      email: '',
      
    },
    onSubmit: async (users) => {
      try {
        const { data } = await axios.patch(
          `https://ecommerce-node4.vercel.app/auth/sendcode`,
          users
        );

        if (data.message === 'success') {
            
         // saveCurrentUser(); // This is where the error occurs
          formik.resetForm();
          toast.success('input code', {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          navigate('/forgetpassword');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('An error occurred during login');
      }
    },
    validationSchema:  SendcodeSchema,
  });

  const Inputs = [
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: 'Email',
      value: formik.values.email,
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
  

  return (
    <div>
      <div>
        <h2>send code</h2>
        <form onSubmit={formik.handleSubmit}>
          {renderInputs}

          <button type="submit" disabled={!formik.isValid}>
            send code
          </button>
        </form>
      </div>
    </div>
  );
}
export default Sendcode;