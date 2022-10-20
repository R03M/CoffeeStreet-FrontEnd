import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import salida from "../../../media/cerrar-sesion.png";
import './logOutAuth0.css';


const LogOutAuth0 = () => {
  const { logout } = useAuth0();
  return (
    <div className='btn-logOut'>
      <button onClick={() => logout()}><img className='img-salida' src= {salida} alt="salida" /> 
      </button>
      
    </div>
  );
};

export default LogOutAuth0;