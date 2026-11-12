import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function sendMessage(event) {
    event.preventDefault()

    const message = inputText.trim()
    if (!message) return

    const userMessage = {
      message,
      sender: 'user',
      id: crypto.randomUUID(),
    }

    const botMessage = {
      message: Chatbot.getResponse(message),
      sender: 'robot',
      id: crypto.randomUUID(),
    }

    setChatMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      botMessage,
    ])
    setInputText('')
  }

  return (
    <form className="chat-input-container" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        aria-label="Message to Chatbot"
        autoComplete="off"
        value={inputText}
        onChange={saveInputText}
        className="chat-input"
      />
      <button
        type="submit"
        className="send-button"
        disabled={!inputText.trim()}
      >
        Send
      </button>
    </form>
  )
}
