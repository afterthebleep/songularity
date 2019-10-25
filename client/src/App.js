import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './cards/cards';
import MyNavbar from './navbar/MyNavbar';
import MyFooter from './footer/MyFooter';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Card />
      <MyFooter />
    </div>
  );
}

export default App;
