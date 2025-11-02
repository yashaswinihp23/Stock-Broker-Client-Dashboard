import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Dashboard = ({ onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const client = Stomp.over(socket);
    client.connect({}, () => {
      client.subscribe('/topic/messages', (msg) => {
        setMessages((prev) => [...prev, JSON.parse(msg.body)]);
      });
    });
    setStompClient(client);

    return () => {
      if (client) client.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (stompClient && message) {
      stompClient.send('/app/sendMessage', {}, JSON.stringify({ content: message }));
      setMessage('');
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h3>Messages</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.content}</li>
          ))}
        </ul>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dashboard;
