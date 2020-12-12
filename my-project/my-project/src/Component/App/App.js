import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Bot from '../Bot/Bot';

function App() {
  return (
    <div id='body'>
      <div id='container'>
        <div className="wrapper">
          <Header />
          <Content/>
          <Footer/>
          <Bot />
        </div>
      </div>
    </div>
  );
}

export default App;
