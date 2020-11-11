import React, { useState, useEffect, useRef } from 'react'
import socketClient from 'socket.io-client'


export default function Chat() {

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const socketRef = useRef();

    useEffect(() => {

        socketRef.current = socketClient('http://localhost:3000', {
            transports: ['websocket'], jsonp: false
        });

        socketRef.current.connect();

        socketRef.current.on('message', (msg) => {
            handleMessageRecieved(msg)
        });

        socketRef.current.on('yourId', (id) => {
            setId(id)
        });

    }, []);



    const handleMessageRecieved = msg => {
        setMessages(oldValue => [...oldValue, msg])
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleClick = () => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        socketRef.current.emit('add', { input, id, date: dateTime })
        setInput('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    return (
        <section className="content-section bg-light" id="about">
            <div className="chat-container text-center">
                <h3 className="text-center"> Messaging - {id && id} </h3>
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
                                        ><a href="#"><i className="fas fa-plus-circle"></i></a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="inbox_chat">


                                <div className="chat_list active_chat">
                                    <div className="chat_people">
                                        <div className="chat_img">
                                            <img
                                                className="img-chat"
                                                src="https://ptetutorials.com/images/user-profile.png"
                                                alt="sunil"
                                            />
                                        </div>
                                        <div className="chat_ib">
                                            <h5>Majd Hasan<span className="chat_date">Date </span></h5>
                                            <p>
                                                Last message
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mesgs">
                            <div className="msg_history">
                                {
                                    messages.map((msg) => {

                                        if (msg.id === id) {
                                            return (
                                                <div className="outgoing_msg">
                                                    <div className="sent_msg">
                                                        <p>{msg.input}</p>
                                                        <span className="time_date"> {msg.date}</span>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="incoming_msg">
                                                    <div className="received_msg">
                                                        <div className="received_withd_msg">
                                                            <p>{msg.input}</p>
                                                            <span className="time_date"> {msg.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )


                                        }

                                    })
                                }
                                {/* <div className="incoming_msg">
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Test, which is a new approach to have</p>
                                            <span className="time_date"> 11:01 AM | Yesterday</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Apollo University, Delhi, India Test</p>
                                        <span className="time_date"> 11:01 AM | Today</span>
                                    </div>
                                </div> */}
                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input
                                        value={input}
                                        onChange={handleChange}
                                        onKeyDown={handleKeyDown}
                                        type="text"
                                        className="write_msg"
                                        placeholder="Type a message"
                                    />
                                    <button onClick={handleClick} className="msg_send_btn" type="button">
                                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >





        // <div className={"container vertical-center"}>
        //     <h1>Chat</h1>
        //     <label>Your Name: </label>
        //     <input value={name} onChange={handleChangeName} type="text" />
        //     <hr />
        //     <h4>messages</h4>

        //     <ul className="messages" style={{ listStyleType: "none" }}>{
        //         messages.map((msg) => {
        //             return (
        //                 <li>{msg}</li>
        //             )
        //         })}
        //     </ul>
        //     <hr />
        //     <label>Message</label>
        //     <input value={input} onChange={handleChange} type="text" />
        //     <button onClick={handleClick}> Add</button>
        // </div>
    )
}
