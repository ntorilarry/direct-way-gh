import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithAuth = (WrappedComponent: React.ComponentType) => {
  const AuthGuard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const verifyToken = async () => {
        try {
          // Perform your asynchronous token verification logic here
          const access_token = localStorage.getItem('token');

          if (!access_token) {
            // Redirect the user to the login page if the token is missing
            navigate('/login');
          }
        } catch (error) {
          console.error('Token verification error:', error);
          // Handle any verification errors, e.g., log out the user
          navigate('/login');
        }
      };

      verifyToken();
    }, [navigate]);

    return <WrappedComponent />;
  };

  return AuthGuard;
};

export default WithAuth;
