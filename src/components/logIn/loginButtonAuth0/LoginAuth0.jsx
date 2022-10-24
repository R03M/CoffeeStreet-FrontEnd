import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./logInAuth0.css"

const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button className="btnContinueGLoginC" onClick={() => loginWithRedirect()}>Continue with Google</button>
    </div>
  );
};

export default LoginAuth0;
