import React, { useState, useEffect, useRef } from 'react'
import socketClient from 'socket.io-client';
import Footer from '../LandingPageSections/Footer'
import NavCustomer from '../NavCustomer'
import { getUsername, getConversations , getMessages } from '../../http-common'
import Messages from './Messages';


export default function Chat() {

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [username, setUsername] = useState('')
    const [conversations, setConverstions] = useState([])
    const [activeConversation, setActiveConversation] = useState(0)
    const [currentConversationId, setCurrentConversationId] = useState("")

    const socketRef = useRef();

    useEffect(() => {
        getUsername().then((res) => setUsername(res));

        getConversations().then((res) => {
            setConverstions(res);
            setCurrentConversationId(res[0].conversation)
        })

        socketRef.current = socketClient('http://localhost:4000', {
            transports: ['websocket'], jsonp: false
        });

        socketRef.current.connect();

        if (currentConversationId && currentConversationId !== "") {
            socketRef.current.emit('loadMessages', currentConversationId)
        }

        socketRef.current.on('message', (msg) => {
            handleMessageRecieved(msg)
        });

        socketRef.current.on('initialLoad', (msgs) => {
            handleInitialLoad(msgs)
        });

    }, []);


    const handleMessageRecieved = msg => {
        setMessages(oldValue => [...oldValue, msg])
    }

    const handleInitialLoad = msgs => {
        setMessages(msgs)
    }

    // ---------------------------------- Event Handlers && Utils ----------------------------------
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + ' | ' + time;

        socketRef.current.emit('add', { conversation: currentConversationId, content: input, sender: username, date: dateTime })
        setInput('');
    }

    const handleConversationClick = (convIndex) => {
        setActiveConversation(convIndex);
        setCurrentConversationId(conversations[convIndex].conversation);
        getMessages(conversations[convIndex].conversation).then(res =>{
            setMessages(res)
        })

    }

    return (
        <div>
            <NavCustomer></NavCustomer>
            <section className="content-section bg-light" id="about">
                <div className="chat-container text-center">
                    <h3 className="text-center"> Messaging - {username} </h3>
                    <div className="messaging">
                        <div className="inbox_msg">
                            <div className="inbox_people">
                                <div className="headind_srch">
                                    <div className="recent_heading">
                                        <h4>Recent</h4>
                                    </div>
                                    <div className="srch_bar">
                                        <div className="stylish-input-group">
                                            <input type="text" className="search-bar" placeholder="Search" />
                                            <span className="input-group-addon">
                                                <button type="button">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </span>
                                            <span
                                            ><a href="/#"><i className="fas fa-plus-circle"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inbox_chat">
                                    {conversations.map((con, index) => {
                                        let cssClass
                                        if (activeConversation === index) {
                                            cssClass = "chat_list active_chat"
                                        } else {
                                            cssClass = "chat_list"
                                        }
                                        return (
                                            <div className={cssClass} onClick={() => { handleConversationClick(index) }}>
                                                <div className="chat_people">
                                                    <div className="chat_img">
                                                        <img
                                                            className="img-chat"
                                                            src="https://ptetutorials.com/images/user-profile.png"
                                                            alt="sunil"
                                                        />
                                                    </div>
                                                    <div className="chat_ib">
                                                        <h5>{con.partner}<span className="chat_date">Date </span></h5>
                                                        {/* <p> Last message </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {(currentConversationId && currentConversationId.length > 0) && <Messages messages={messages} messages={messages} username={username} input={input} handleChange={handleChange} handleKeyDown={handleKeyDown} handleClick={handleClick}></Messages>}
                        </div>
                    </div>
                </div>
            </section >
            <Footer></Footer>
        </div>
    )
}
