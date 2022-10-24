import React, { useEffect , useState , } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch , useSelector  } from "react-redux";
import salida from "../../../media/cerrar-sesion.png";
import { logOutUser } from "../../../redux/action.js";
import './logOutAuth0.css';
// import { useNavigate } from 'react-router-dom';



const LogOutAuth0 = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.accessToken);
	const { logout } = useAuth0();
	// const navigate = useNavigate();




  const deslogeo = (e) => {
      e.preventDefault();
      dispatch(logOutUser(accessToken));
			logout()
		// 	setTimeout(() => {
    //        navigate("/menu", { replace: true });
    //  }, 100);
  }



  return (
    <div className='btn-logOut'>
      <button onClick={ (e) => deslogeo(e)}>
        <img src={salida} alt="logOut"
        />
      </button>


    </div>
  );
};

export default LogOutAuth0;
