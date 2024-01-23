import React from 'react';
import '../style/Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-menu">
      <div className="footer-ctn">
        <div className="main-page-button">Main</div>
        <div className="search-button">Search</div>
        <div className="profile-page-button">Profile</div>
      </div>
    </div>
  );
};

export default Footer;
