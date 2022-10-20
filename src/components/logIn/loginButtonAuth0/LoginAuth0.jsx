import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Continue with Google</button>
    </div>
  );
};

export default LoginAuth0;