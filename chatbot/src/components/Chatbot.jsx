import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import './chatbot.css';

// System message to set the behavior of the assistant
const systemMessage = {
  role: "system",
  content: "You are a helpful assistant."
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);

  // Handles sending a message to the chatbot
  const handleSendMessage = async (message) => {
    const newMessage = { text: message, sender: 'user' };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    console.log('Sending message to ChatGPT:', message);
    // Send the message to ChatGPT and get the response
    await processMessageToChatGPT(updatedMessages);
  };

  // Processes the message to ChatGPT API and updates the state with the response
  async function processMessageToChatGPT(chatMessages) {
    // Format messages for the ChatGPT API
    const apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === 'bot' ? 'assistant' : 'user';
      return { role, content: messageObject.text };
    });

    // Create the request body
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // System message to set the behavior of the assistant
        ...apiMessages  // User and bot messages
      ]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      console.log('Received response from OpenAI API:', data);

      // Update the messages state with the new message from ChatGPT
      if (data.choices && data.choices.length > 0) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: data.choices[0].message.content,
            sender: "bot"
          }
        ]);
      } else {
        console.error('Unexpected response structure:', data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' }
        ]);
      }
    } catch (error) {
      console.error("Error fetching response from ChatGPT API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' }
      ]);
    }
  }

  return (
    <div className="chatbot-container">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;
