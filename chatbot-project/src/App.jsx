import { useState } from 'react'

import { ChatInput } from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([])

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput setChatMessages={setChatMessages} />
    </div>
  )
}

export default App
