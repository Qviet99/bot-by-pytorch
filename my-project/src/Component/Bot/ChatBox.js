import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react'
import './ChatBox.css';
import tts from './img/texttospeech.png'
import un_tts from './img/unable_texttospeech.png'
import botlogo from './img/bot.png'
import { NULL } from 'node-sass';

var state = false;
var audioCtx = new AudioContext() 
var serverStatus = false;

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
    if(str === 'user_res')
        div1.style.textAlign = "right";
    var div2 = document.createElement('div');
    div2.className = str;
    msg = msg.replace(/\n/g, "<br />");
    div2.innerHTML += msg;
    div1.appendChild(div2)
    var chatlog = document.getElementById("ChatLog");
    chatlog.appendChild(div1);
    chatlog.scrollTop =chatlog.scrollHeight
}

var keyEnter = (event) => {
    if(event.keyCode === 13){
        var input = document.getElementById("user_input").value;
        if (input !== "")
            sendMsg()
    }
}


function botRes(msg){
    var voice = 0;
    if (state === true){
        voice = 1
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"user":msg, "voice":voice});

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
        if(state === true)
            botSpeech()
    })
}

function activeVoice(){
    if(state === true){
        state = false;
        document.getElementById("texttospeech").src = un_tts;
    }
    else{
        state = true;
        document.getElementById("texttospeech").src = tts;
    }
}

function botSpeech(){
    var requestOptions = {
        method: 'POST',
        body: '',
        redirect: 'follow'
    };
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

function sendReportAPI(msg){
    var date = new Date().toLocaleDateString('en-GB').replaceAll("/", "-");
    var time = new Date().toLocaleTimeString([], {hour12:false});
    var datetime = time + " " + date;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"textReport":msg,"timeReport":datetime});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("/save-report", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function showChat() {
    if(serverStatus == false){
        startServer();
        serverStatus = true;
        div('bot_res','Chào bạn, mình là bot hỗ trợ tìm kiếm thông tin tuyển sinh DTU !') 
    }
    document.getElementById("LogoButton").style.visibility = 'hidden';
    document.getElementById("Bot").style.visibility = 'visible';
}

function closeChat(){
    document.getElementById("Bot").style.visibility = 'hidden';
    document.getElementById("LogoButton").style.visibility = 'visible';
}

function startServer(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("http://localhost:9000/api/start", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

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
        sendReportAPI(text);
        handleClose();
    };

    return (
        <div>
            <button id="LogoButton" onClick={showChat}>
                <span class="tooltipbot">Chào bạn ! Mình là bot hỗ trợ tìm kiếm thông tin tuyển sinh</span>
            </button>
            <div id="Bot">
                <div id="ChatHead">
                    <img id="BotLogo" src={botlogo} />
                    <button id="CloseChat" onClick={closeChat}>X</button>
                </div>
                <div id="ChatBody">
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
                            <button id="send" class="hver" onClick={sendMsg}>
                                <span class="tooltiptext2">Gửi tin nhắn</span>
                            </button>
                            <input id="user_input" onKeyDown={keyEnter}></input>
                            <button id="text-to-speech" class="hver" onClick={activeVoice}>
                                <img id="texttospeech" src={un_tts} width="110%" height="75%" textAlign="justify"/> 
                                <span class="tooltiptext3">Bot speech</span>
                            </button>
                            <button id="report" class="hver" onClick={handleClickOpen}>
                                <span class="tooltiptext4">Gửi Report</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;