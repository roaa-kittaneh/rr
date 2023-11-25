import React from 'react';
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import {registerSchema} from'../validate/Validate.js'
import {  toast } from 'react-toastify';
export default function Register() {
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        image: null, 
    }
    
   
    const onSubmit = async (users) => {
        // const formData = new FormData();
        // formData.append("userName", users.userName);
        // formData.append("email", users.email);
        // formData.append("password", users.password);
        // formData.append("image", users.image);
    
        // const { data } = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData);
        // if(data.message=='success'){
        //     toast.success('account created successfly', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //         });
        // }
        // console.log(data);
    }
    
    const test = e =>{
        console.log(e);
    }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:registerSchema
  });

  const inputs = [
    {
      id: 'username',
      type: 'text',
      name: 'userName',
      title: 'user name',
      value: formik.values.userName,
      errors: formik.errors,
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: 'user email',
      value: formik.values.email,
      errors: formik.errors,
    },
    {
      id: 'password',
      type: 'password',
      name: 'password',
      title: 'user password',
      value: formik.values.password,
      errors: formik.errors,
    },
    {
        id: 'image',
        type: 'file',
        name: 'image', 
        title: 'user image',
        onChange: test,
    },
    
  ];
  

  const renderInput = inputs.map((input, index) => (
    <Input
      type={input.type}
      id={input.id}
      name={input.name}
      title={input.title}
      key={index}
      errors={input.errors}
      onChange={input.onChange || formik.handleChange}  
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));
  return (
    <>
      <div className='container'>
        <h2>Create Account</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          {renderInput}
         <button type='submit' disabled={!formik.isValid}> Register</button>
        </form>
      </div>
    </>
  );
}
