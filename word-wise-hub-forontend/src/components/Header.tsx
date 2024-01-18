import React from 'react';
import Logo from './Logo';
import Auth from './Auth';
import '../style/Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-ctn ">
      <Auth />
      <Logo />
    </div>
  );
};

export default Header;
