import React from 'react';
import './formLogin.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../../redux/action.js';



const FormLogin = () => {
  const dispath = useDispatch();

  const loginUser = {
    email: '',
    password: ''
  }
  const [user, setUser] = useState(loginUser);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(LoginUser(user));
    
  }


console.log(user)
  return (
    <>
      <form>
        <div className='login-input-email'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='ejemplo@gmail.com'
                onChange={handleChange} />
        </div>
        <div  className = 'login-input-password' >
          <label htmlFor="password">Password</label>
          <input type="password"  name='password' id='password' placeholder='password'
                onChange={handleChange}
          />
        </div>
        <div className='login-button'>
          <button type='submit'
                  onClick={handleSubmit}  >Log In</button>
        </div>
      </form>
      
    </>
  );
};

export default FormLogin;