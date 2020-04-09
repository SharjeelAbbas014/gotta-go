import React, {useState} from 'react'
import './chatBox.css'

const ChatBox = (props) => {
    const [msg,
        setMsg] = useState("")
    const userTyping = (e) => {
        if (e.keyCode === 13) {
            submitMessage()
        }
    }
    const submitMessage = () => {
        if (messageValid(msg)) {
            props.submitMsgFn(msg);
            document
                .getElementById('message')
                .value = ''
        }
    }
    const messageValid = (txt) => txt && txt
        .replace(/\s/g, '')
        .length;

    if (props.chats !== undefined) {
        return (
            <div id="chatBox">
              
                <button onClick={submitMessage}>Send</button>
                <input
                    onKeyUp={e => userTyping(e)}
                    type="text"
                    id="message"
                    onChange=
                    {e=>setMsg(e.target.value)}
                    placeholder="Type your Message"/>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default ChatBox;