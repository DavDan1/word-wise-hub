import React from 'react';
import logo from '../../public/wordwisehub-high-resolution-logo-transparent.png';
import '../style/Logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-ctn">
      <img src={logo} alt="Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
