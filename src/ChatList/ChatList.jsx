import React, {useEffect, useState} from 'react'

import './ChatList.css'

const ChatList = (props) => {
    console.log(props.chats.length);
    const newchat = () => {
        props.newChat(true);
    }
    const selectChat = (index) =>{
        props.selectChatFn(index);
    }
    const signOut = () => {
        props
            .signOut
            .logout();
        props
            .history
            .replace('/login')
    }
    const userIsSender = (chat)=> chat.messages[chat.messages.length -1].sender === props.userEmail;
    if (props.chats.length > 0) {
        return (
            <div id="chatList">
                                <br/>
                <button id="newChat" onClick={newchat}>
                    Create New Chat
                </button>
                <div id="ActualChat">
                    {console.log("hell", props.selectedChatIndex)}
                    {props
                        .chats
                        .map((chat, index) => (
                            <div
                                onClick={() => props.selectChatFn(index)}
                                className="personName"
                                id={props.selectedChatIndex === index
                                ? "selected"
                                : chat.receiverHasRead === false && !userIsSender(chat)?"notRead":""}>
                                <h3>{chat
                                        .users
                                        .filter(user => user !== props.userEmail)[0]
                                        .substring(0,20)}</h3>
                                <p>{chat
                                        .messages[chat.messages.length - 1]
                                        .message
                                        .substring(0, 20)}</p>
                            </div>
                        ))
}
                </div>
                <button id="signOut" onClick={signOut}>Sign Out!</button>
            </div>
        )
    } else {
        return (
            <div id="chatList">
                <br/>
                <button id="newChat" onClick={newchat}>
                    Create New Chat
                </button>
    
                <div>
                    <div className="personName">
                        <h3>No Chats</h3>
                    </div>
                </div>
                <button id="signOut" onClick={signOut}>Sign Out!</button>
            </div>
        );
    }
}

export default ChatList;