// ChatWindow.jsx
import React from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatWindow;
