import React from 'react';
import './formLogin.css';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../../redux/action.js';
import { Formik, Form , Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const FormLogin = () => {
  const initialValues = {
    email: String,
    password: String,
  } 

  const dispath = useDispatch();

  const loginUser = (e) => {
    dispath(LoginUser(e))
  }


  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(2, "Password too short")
      .required("Password is required"),
  })


  return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values) => loginUser(values)}
        >
          {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,}
          ) => ( 
            <Form className="formLogin">
             <label htmlFor="email"> Email </label>
             <Field type="email" name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <ErrorMessage name="email" component="div"/>
              )}
              <label htmlFor="password"> Password </label>
              <Field type="password" name="password" placeholder="Password" />
              {errors.password && touched.password && (
                <ErrorMessage name="password" component="div"/>

              )}
              <button type="submit" disabled={isSubmitting}>Login</button>
            </Form>
          )}
        </Formik>

            
      </div>
  );
};

export default FormLogin;