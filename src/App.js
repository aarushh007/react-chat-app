import './App.css';
import React, {useState, useEffect} from 'react';
import db from './firebase.js';
import firebase from 'firebase';
import {TextField, Button} from '@material-ui/core';
import {SettingsBrightness} from '@material-ui/icons';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [dark, setDark] = useState(false);
  const [darkClass, setDarkClass] = useState('darkmode');
  useEffect(()=>{
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  },[]);
  const send = (e) => {
    db.collection('messages').add({
      msg: input,
      user: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className={dark?'App dark':'App'}>
      <div id='title'>
      <h1>Live Messaging</h1>
      </div>
      <br />
      <br />
      <form onSubmit={send}>
      <TextField id="standard-basic" label="Name:" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <br />
      <br />
      <br />
      <TextField id="filled-basic" label="Enter Message:" variant="filled" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <br/>
      <br />
      <Button disabled={!input||!name} variant="contained" color="primary" onClick={send}>
        Send Message🚀
      </Button>
      </form>
      <button onClick={()=>setDark(!dark)} className={dark?'darkmode on':'darkmode'}>Dark/Light Mode</button>
      {messages.map((msg)=>{
        return(
          <div className={dark?'msg darkk':'msg'}>
            <h4>{msg.msg}</h4>
            <h5>By: {msg.user}</h5>
          </div>
        )
      })}
    </div>
  );
}

export default App;
