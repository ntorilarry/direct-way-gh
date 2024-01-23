import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithAuth = (WrappedComponent: React.ComponentType) => {
  const AuthGuard: React.FC = () => {
    const history = useNavigate();

    useEffect(() => {
      // Perform your token verification logic here
      const access_token = localStorage.getItem('token');

      if (!access_token) {
        // Redirect the user to the login page if the token is missing
        history('/login');
      }
    }, [history]);
   


    return <WrappedComponent />;
  };

  return AuthGuard;
};

export default WithAuth;
