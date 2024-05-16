import './ChatWindow.css';
import { useState } from 'react';

export default function ChatWindow({ friendId }) {
    const messages = [
        { id: 1, text: 'Hello!', sender: 'alaba' },
        { id: 2, text: 'Hi there!', sender: 'jakana' },
    ];


    // const sendMessage = (message) => {
    //     setMessages([...messages, message]);
    // };

    return (
        <div className="chat-window">
            <div className="chat-header">{`Chat with ${friendId}`}</div>
            <div className="chat-messages">
                {messages.map(message => (
                    <div key={message.id}>
                        <span>{message.sender}: </span>
                        <span>{message.text}</span>
                    </div>
                ))}
            </div>
            {/* Chat input for sending messages */}
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
                <button>Send</button>
            </div>
        </div>
    );
}