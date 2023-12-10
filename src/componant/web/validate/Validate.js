import * as yup from 'yup';
export const registerSchema=yup.object({
    userName:yup.string().required("user name is required").min(3,"must be at least 3 char").max(20,"max is 20"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"max is 20")
})


export const loginSchema=yup.object({
   
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"max is 20")
})

export const ForgetpasswordSchema=yup.object({
    code:yup.string().required("code is required").min(4,"must be at least 4 char").max(5,"max is 5"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(20,"max is 20")
})

export const SendcodeSchema=yup.object({
   
    email:yup.string().required("email is required").email(),
    
})
