import './App.css';
import React, { useState } from 'react';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { getChatUsers } from './functions/users';
import NewChat from './components/NewChat';


export default function App() {

  const [chatlist, setChatlist] = useState([
    {chatId: 1, name: 'Rolando Caio da Rocha', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0luq0mPWlgaA4UpezZkeROrrW0NMUAkqmhzNCmK5ZtqoiqoZJv5euTP-hVpbUO4HZ1M&usqp=CAU'},
    {chatId: 2, name: 'José Filisbino', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1h7dO12Dv3VsrU4QjKj-l9eptxdk-efkp3YQOdlp0ddfGnVO2O7WmThkbD8br-St3i1o&usqp=CAU'},
    {chatId: 3, name: 'Frank de Boer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwVGegGrdsn81S_ocY4pGGssZ29-KIBi4pvYJ2djen4tpubF4hE-pJXYyDvkTsETyrjk&usqp=CAU'},
    {chatId: 4, name: 'Uildisney', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWhmZcmkHeaJotVrCWeyGeszRnqmLyw7ryH6WoagTVZxNMNN3EQP-59fMoOSqpCAscx8&usqp=CAU'},
  ])
  // const [chatlist, setChatlist] = useState(getChatUsers())
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState({
    id: 1,
    avatar: '',
    name: 'Bonieky Lacerda'
  })
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='header--avatar' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: 'lightgray'}}/>
            </div>
            <div className="header--btn" onClick={handleNewChat}>
              <ChatIcon style={{color: 'lightgray'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: 'lightgray'}}/>
            </div>
          </div>
          
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize='small' style={{color: '#919191'}}/>
            <input type="search" placeholder='Procurar ou começar nova conversa'/>
          </div>
        </div>
        <div className="chatlist">
          {
            chatlist.map((item, key) => (
              <ChatListItem 
                key={key}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
                data={item}
              />
            ))
          }
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user}/>
        }
        {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
      </div>
    </div>
  )
}