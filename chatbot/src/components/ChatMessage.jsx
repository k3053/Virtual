// ChatMessage.jsx
import React from 'react';

const ChatMessage = ({ message }) => {
  const { text, sender } = message;
  return (
    <div className={`chat-message ${sender}`}>
      <span>{text}</span>
    </div>
  );
};

export default ChatMessage;
