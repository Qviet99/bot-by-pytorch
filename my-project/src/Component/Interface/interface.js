import React from 'react';
import './interface.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Bot from '../Bot/Bot'

class Interface extends React.Component{
render(){
  return (
    <div id='body'>
      <div id='container'>
        <div className="wrapper">
          <Header />
          <Content/>
          <Bot />
        </div>
      </div>
    </div>
  );
}
}

export default Interface;
