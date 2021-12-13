import React from 'react';
import { useState } from 'react';
import './Client.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect('http://localhost:3001');

function Client() {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  return (
    <div className="client">
      {!showChat ? (
        <div className="login">
          <div className="inputs">
            <input
              type="text"
              placeholder="Name.."
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room.."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
          </div>
          <div className="button">
            <button onClick={joinRoom}>Enter Chat</button>
          </div>
        </div>
      ) : (
        <Chat socket={socket} userName={userName} room={room} />
      )}
    </div>
  );
}

export default Client;
