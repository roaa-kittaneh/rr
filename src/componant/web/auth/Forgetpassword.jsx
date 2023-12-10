import React from 'react';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import {ForgetpasswordSchema} from'../validate/Validate.js'
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Forgetpassword() {
    const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    code:"",
  };

  

  const onSubmit = async (users) => {
   
    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/auth/forgotPassword `,
      users
    );
    console.log(data);
    if (data.message === "success") {
      
      toast.success("passsword update", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
      navigate('/login');
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ForgetpasswordSchema,
  });

  const Inputs = [
    
    {
      id: "email",
      type: "email",
      name: "email",
      title: "Email",
      value: formik.values.email,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "Password",
      value: formik.values.password,
    },
    
    {
        id: "code",
        type: "text",
        name: "code",
        title: "code",
        value: formik.values.code,
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
        onChange={input.onChange || formik.handleChange}
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
        <h2>forgotPassword</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          {renderInputs}

          <button
            type="submit"
            disabled={!formik.isValid}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgetpassword;