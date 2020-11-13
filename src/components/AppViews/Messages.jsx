import React, { useEffect, useRef } from 'react'

export default function Messages(props) {

    const messages = props.messages;
    const username = props.username
    const input = props.input
    const handleChange = props.handleChange;
    const handleKeyDown = props.handleKeyDown;
    const handleClick = props.handleClick;

    const mounted = useRef();

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            scrollToBottom()
        }
    });

    const scrollToBottom = () => {
        const messagesEnd = document.getElementById("messagesEnd");
        messagesEnd.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    return (
        <div className="mesgs">
            <div className="msg_history">
                {
                    messages.map((msg) => {

                        if (msg.sender === username) {
                            return (
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>{msg.content}</p>
                                        <span className="time_date"> {msg.date}</span>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="incoming_msg">
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>{msg.content}</p>
                                            <span className="time_date"> {msg.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div id="messagesEnd"
                >
                </div>
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
                        autofocus
                    />
                    <button onClick={handleClick} className="msg_send_btn" type="button">
                        {/* <i className="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
