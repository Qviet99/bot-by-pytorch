import React, { Component } from 'react';
import ChatBox from './ChatBox.js'
import './Bot.css';

class Bot extends Component{
    render() {
        return (
            <div id="Bot">
                <div id="ChatHeader">
                </div>
                <div id="ChatBody">
                    <ChatBox></ChatBox>
                </div>
            </div>
        );
    }
}

export default Bot;