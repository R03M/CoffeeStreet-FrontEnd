import React, { useState ,useEffect } from "react";
import './formLogin.css';
import { useDispatch , useSelector } from 'react-redux';
import { LoginUser,  checkEmailUser, logPostData, registerUserGoogle} from '../../../redux/action.js';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const FormLogin = () => {
	const usuario = useSelector(state => state.user);
  const checkEmail = useSelector(state => state.checkEmail);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const tokenAcc = useSelector(state => state.accessToken);
	const navigate = useNavigate();
	// const  { isAuthenticated, user } = useAuth0();

	// useEffect(() => {

	// 		if (isAuthenticated) {
	// 			dispatch(checkEmailUser(usuario.email));
	// 		}

	// }, [dispatch, isAuthenticated]);

	// useEffect(() => {
	// 	console.log(checkEmail);

	// 	if(checkEmail.email === false){
	// 		dispatch(registerUserGoogle({
	// 			email: user.email,
	// 			name: user.given_name,
	// 			surname: user.family_name,
	// 			image: user.picture,
	// 			isGoogle: true,
	// 		}))

	// 	}
	// }, [dispatch, checkEmail, user]);








	console.log('token access on reducer')
	console.log(tokenAcc);

	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const loginUser =  (e) => {
    dispatch(LoginUser({
      email: email,
      password: password
    }));
  }

	 useEffect(()=>{
			if(tokenAcc) {
				dispatch(logPostData(tokenAcc));
			}
  	}, [dispatch, tokenAcc])

	const handleEmail = (e) => {
				if(validEmail.test(e.target.value)){
				dispatch(checkEmailUser(e.target.value))

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



	//ME ESTABA CAUSANDO QUE USER SE VACIARA EN EL REDUCER
  // useEffect(() => {
  //   if(accessToken) {
  //     window.location.href = "/menu"
  //   }
  // } , [accessToken])

	 useEffect(() => {
		console.log("bu")
    if (tokenAcc && usuario?.name) {
			console.log("éstoy");
        setTimeout(() => {
          navigate("/menu", { replace: true });
        }, 3600);
      }
  }, [navigate, usuario, tokenAcc]);

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
