import React, { Component } from 'react';
import ChatBox from './ChatBox.js';
import './Bot.css';

class Bot extends Component{
    render() {
        return (
            <div>
                <ChatBox></ChatBox>
            </div>
        );
    }
}

export default Bot;