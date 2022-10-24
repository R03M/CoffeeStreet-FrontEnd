import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch , useSelector  } from "react-redux";
import salida from "../../../media/cerrar-sesion.png";
import { logOutUser } from "../../../redux/action.js";
import './logOutAuth0.css';



const LogOutAuth0 = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.accessToken);
  const { logout } = useAuth0();


    const deslogeo = (e) => {
      e.preventDefault();
			dispatch(logOutUser(accessToken));
			logout()
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
