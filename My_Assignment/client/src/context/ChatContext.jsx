import { createContext, useContext, useState, useEffect } from 'react';
import socket from '../socket/socket';

export const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, []);

  const sendMessage = (msg) => {
    socket.emit('chatMessage', msg);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
