
import React  from 'react';
import './formLogin.css';
import { useDispatch , useSelector } from 'react-redux';
import { LoginUser, logOutUser , checkEmailUser} from '../../../redux/action.js';
import { Formik, Form , Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState,  } from "react";



const FormLogin = () => {
  const accessToken = useSelector(state => state.accessToken);
  const refreshToken = useSelector(state => state.refreshToken);
  const checkEmail = useSelector(state => state.checkEmail);
  const dispatch = useDispatch();


console.log(checkEmail)
  const initialValues = {
    email: String,
    password: String,
  } 


  const loginUser =  (e) => {
    dispatch(LoginUser(e))
  }






  const logOut = () => {
    dispatch(logOutUser(accessToken))
  }


  // const redirectMenu = () => {
  //   window.location.href = "/menu"
  // }

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
          handleChange = { console.log("dsalñdskañlkdspakkwa,alsk09")}
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
              <Field
                type="email"
                name="email"
                placeholder="Email"
                onChange={ handleChange }
                value={values.email}
              />
              {errors.email && touched.email && (
                <ErrorMessage name="email" component="div"/>
              )}
              <label htmlFor="password"> Password </label>
              <Field type="password" name="password" placeholder="Password" />
              {errors.password && touched.password && (
                <ErrorMessage name="password" component="div"/>

              )}
              <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  // onClick={() => redirectMenu()}
              >Login</button>

              <button 
                  type="button"
                  onClick={logOut}
              >LogOut</button>
            </Form>
          )}
        </Formik>

            
      </div>
  );
};

export default FormLogin;