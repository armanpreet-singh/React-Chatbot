import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  const isUserMessage = sender === 'user'

  return (
    <div
      className={
        isUserMessage ? 'chat-message-user' : 'chat-message-robot'
      }
      role="group"
      aria-label={isUserMessage ? 'Your message' : 'Chatbot response'}
    >
      {!isUserMessage && (
        <img
          src={RobotProfileImage}
          className="chat-message-profile"
          alt=""
          aria-hidden="true"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {isUserMessage && (
        <img
          src={UserProfileImage}
          className="chat-message-profile"
          alt=""
          aria-hidden="true"
        />
      )}
    </div>
  )
}
