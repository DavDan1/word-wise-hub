import React from 'react';
import ToggleCreateAllCards from '../components/ToggleCreateAllCards';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
