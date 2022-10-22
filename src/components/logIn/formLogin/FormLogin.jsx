import React, { useState ,useEffect } from "react";
import './formLogin.css';
import { useDispatch , useSelector } from 'react-redux';
import { LoginUser,  checkEmailUser} from '../../../redux/action.js';





const FormLogin = () => {
  const accessToken = useSelector(state => state.accessToken);

  const checkEmail = useSelector(state => state.checkEmail);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;




  const loginUser =  (e) => {
    dispatch(LoginUser({
      email: email,
      password: password

    }));
    
  }

  const handleEmail = (e) => {
 console.log(e.target.value)
 if(e.target.value === "") {
  
 }


    if(validEmail.test(e.target.value)){
      dispatch(checkEmailUser(e.target.value))
      console.log('valid')

      if(checkEmail.isGoogle === false){
        
        setEmail(e.target.value)

      }
    }
    else{
      dispatch(checkEmailUser(e.target.value))
      
    }

  }

  const handlePassword = (e) => {
    if(e.target.value.length > 2 )  {
    setPassword(e.target.value)
  }
}

  
  useEffect(() => {
    if(accessToken) {
      window.location.href = "/menu"
    }
  } , [accessToken])

  return (
    <div  className='contenedor-principal-login'> 
        <div className='label-imput-email'>
          <label className='label-email'>Email</label>
          <input className='input-email' type='email' name='email' placeholder='Email' onChange={handleEmail } />
          { checkEmail.isGoogle === true ? <p>This email is registered with Google</p> : null}
        </div>
        <div className='label-imput-password'>
          <label className='label-password'>Password</label>
          <input className='input-password' type='password' name='password' placeholder='Password' onChange={handlePassword} />
          {password.length === 0 || password.length > 2 ? null : <p>password too short</p>}
          <button disabled={checkEmail.isGoogle === true} className='button-login' onClick={loginUser}>Login</button>
        </div>
          
    </div>
  )


};

export default FormLogin;