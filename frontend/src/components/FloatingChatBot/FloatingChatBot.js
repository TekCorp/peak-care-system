import React from 'react'
import "./FloatingChatBot.css"

function FloatingChatBot() {
  return (
    <div className='main-floating-chat-bot-icon-container'>
      <div className='tool-tip-main-container'>
          <div class="tooltip-box">
            Coming Soon
          </div>
      </div>
      <div className='FloatingChatBot-container d-flex align-items-center justify-content-center'>
        <img src='/images/icons/chatbot-icon.png' alt='robot icon' className='btn-icon' />
      </div>
    </div>
  )
}

export default FloatingChatBot