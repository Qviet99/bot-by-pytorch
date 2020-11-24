import React, { Component, useState } from 'react';
import ChatBox from './ChatBox.js'
import bot from '../Img/bot_img.png'; 
import './Bot.css';

class Bot extends Component{
    render() {
        return (
            <div id="Bot">
                <div id="ChatHeader">
                    <img src={bot} id = 'bot_img' alt=''/>
                </div>
                <div id="ChatBody">
                    <ChatBox></ChatBox>
                </div>
            </div>
        );
    }
}

export default Bot;