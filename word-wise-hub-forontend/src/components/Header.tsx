import React from 'react';
import '../style/Header.css';

const Header: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <img
        src={'../../public/navigation.svg'}
        alt="SVG Image"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Header;
