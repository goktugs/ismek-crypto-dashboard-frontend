import React from 'react';
import { useState, useEffect } from 'react';
import './Chat.css';

function Chat({ socket, room, userName }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      <div className="chatHeader">
        <p>Live Chat</p>
      </div>
      <div className="chatBody">
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={
                userName === messageContent.author ? 'sender' : 'receiver'
              } /* mesajı sağdamı soldamı kim gönderdi bak */
            >
              <div>
                <div className="content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="meta">
                  <p>{messageContent.time}</p>
                  <p>{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chatFooter">
        <input
          type="text"
          placeholder="hey"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
