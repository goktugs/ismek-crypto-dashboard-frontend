import React from 'react';
import { useState, useEffect } from 'react';
import './Chat.css';
import ScrollToBottom from 'react-scroll-to-bottom';

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
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chatWrapper">
      <div className="chatBody">
        <ScrollToBottom className="messageContainer">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={
                  userName === messageContent.author ? 'you' : 'other'
                } /* mesajı sağdamı soldamı kim gönderdi bak */
              >
                <div>
                  <div className="content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="meta">
                    <p id="author">{messageContent.author}</p>
                    <p id="time">{messageContent.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chatFooter">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type Message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
