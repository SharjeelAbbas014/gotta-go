import React, {useEffect, useState} from 'react';
import './chatView.css'
import back from '../back.svg'
const ChatView = ({chat, user, mobile, setSelectedChat}) => {
    const [done,
        setDone] = useState(false);
        const goBack = ()=>{
            setSelectedChat(null)
        }
    useEffect(() => {
        const container = document.getElementById('chatView');
        if (container) {
            console.log(container.scrollHeight);
            window.scrollTo(0, document.querySelector("#chatView").scrollHeight);
        }
    }, [chat])
    if (chat !== undefined) {
        if (!mobile) {
            return (
                <div id="chatView">
                    {chat
                        .messages
                        .map((msg, index) => {
                            if (!done) {
                                setDone(true)
                            }
                            return (
                                <div
                                    className={msg.sender === user
                                    ? "myMsg"
                                    : "otherMsg"}
                                    id={index === chat.messages.length - 1
                                    ? "last"
                                    : ""}>
                                    <div >
                                        <p>{msg.message}</p>
                                    </div>
                                </div>
                            )
                        })
}

                </div>

            )
        } else {
            return (
                <div id="chatView">
                    <div id="backDiv">
            <img onClick={goBack} src={back}/>
                    </div>
                    {chat
                        .messages
                        .map((msg, index) => {
                            if (!done) {
                                setDone(true)
                            }
                            return (
                                <div
                                    className={msg.sender === user
                                    ? "myMsg"
                                    : "otherMsg"}
                                    id={index === chat.messages.length - 1
                                    ? "last"
                                    : ""}>
                                    <div >
                                        <p>{msg.message}</p>
                                    </div>
                                </div>
                            )
                        })
}

                </div>

            )
        }
    } else {
        return (
            <div id="chatView"></div>
        )
    }
}

export default ChatView;