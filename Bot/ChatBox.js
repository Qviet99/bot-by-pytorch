import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react'
import './ChatBox.css';

var state = false;
 
function sendMsg() {
    var messeg = document.getElementById("user_input").value;
    if(messeg !== ""){
        div('user_res',messeg);
        botRes(messeg);
        document.getElementById("user_input").value = "";

    }
}

function div(str,msg){
    var div1 = document.createElement('div');
    if(str == 'bot_res')
        div1.style.textAlign = "right";
    var div2 = document.createElement('div');
    div2.className = str;
    div2.innerHTML += msg;
    div1.appendChild(div2)
    var chatlog = document.getElementById("ChatLog");
    chatlog.appendChild(div1);
}

var keyEnter = (event) => {
    if(event.keyCode === 13){
        sendMsg()
    }
}


function botRes(msg){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"user":msg});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:6000/api/bot", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        div('bot_res',result);
    })
    .then((speech) => {
        if(state == true)
            botSpeech()
    })
}

function activeVoice(){
    if(state == true)
        state = false;
    else
        state = true;
}

function botSpeech(){
    var requestOptions = {
        method: 'POST',
        body: '',
        redirect: 'follow'
    };
    var audioCtx = new AudioContext()
    fetch("http://localhost:6000/api/bot/speech", requestOptions)
    .then(response => response.arrayBuffer())
    .then(result => audioCtx.decodeAudioData(result, function(decodedData) {
        var source = audioCtx.createBufferSource();
        source.buffer = decodedData;
        source.connect(audioCtx.destination);
        source.start(0);
    }))
    .catch(error => console.log('error', error));
}

function sendAPI(msg){
    var raw = JSON.stringify({"answerError":msg});
    var requestOptions = {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: raw,
    redirect: 'follow'
    };

    fetch("/save-report", requestOptions)
    .then(response => response.text())
    .then(result => console.log('Done'))
    .catch(error => console.log('error', error));
}

/*function botRestart(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch("http://localhost:9000/api/restart", requestOptions)
}*/


function ChatBox(){
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const sendReport = () => {
        var text = document.getElementById("txtArea").value;
        sendAPI(text);
        handleClose();
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="reportH">
                    Report
                </DialogTitle>
                <DialogContent id="reportB">
                    <textarea id="txtArea" rows="7" cols="66">
                    </textarea>
                    <button class="rpbtn" onClick={sendReport}>Gửi</button>
                    <button class="rpbtn" onClick={handleClose}>Đóng</button>
                </DialogContent>
            </Dialog>
            <div id="ChatContain">
                <div id="ChatLog"></div>
            </div>
            <div id="ChatFoot">
                <button id="send" onClick={sendMsg}>Send
                </button>
                <input id="user_input" onKeyDown={keyEnter}>
                </input>
                <button id="text-to-speech" onClick={activeVoice}>TTS
                </button>
                <button id="report" onClick={handleClickOpen}>RP
                </button>
            </div>
        </div>
    )
}

export default ChatBox;