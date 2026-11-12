import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage.jsx'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null)

  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [chatMessages])

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}
      role="log"
      aria-label="Chat conversation"
      aria-live="polite"
      aria-relevant="additions"
    >
      {chatMessages.length === 0 ? (
        <p className="chat-empty-state">
          Start a conversation by sending a message.
        </p>
      ) : (
        chatMessages.map((chatMessage) => (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        ))
      )}
    </div>
  )
}

export default ChatMessages
