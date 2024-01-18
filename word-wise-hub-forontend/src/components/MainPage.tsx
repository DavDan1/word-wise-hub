import React from 'react';
import '../style/MainPage.css';
import Header from './Header';
import ToggleCreateAllCards from './ToggleCreateAllCards';
import Card from './Card';
import Footer from './Footer';

const MainPage: React.FC = () => {
  return (
    <div className="main-page-ctn">
      <Header />
      <div className="main-page-body">
        <ToggleCreateAllCards />
        <h2 className="main-page-text">My Words</h2>
        <Card word="Word 1" />
        <Card word="Word 2" />
        <Card word="Word 3" />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
