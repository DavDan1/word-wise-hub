import React, { useState } from 'react';
import Button from './Button';
import '../style/Auth.css';

const Auth: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div className="auth-ctn">
      {isLoggedIn ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
};

export default Auth;
