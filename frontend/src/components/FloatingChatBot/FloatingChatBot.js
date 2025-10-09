import React from 'react'
import "./FloatingChatBot.css"
import { useLanguageContent } from '../Utils/MultilingialContent'

function FloatingChatBot() {
  const GetLanguageContent = useLanguageContent()
  return (
    <div className='main-floating-chat-bot-icon-container'>
      <div className='tool-tip-main-container'>
          <div class="tooltip-box">
            {GetLanguageContent?.comming_soon?.title}
          </div>
      </div>
      <div className='FloatingChatBot-container d-flex align-items-center justify-content-center'>
        <img src='/images/icons/chatbot-icon.png' alt='robot icon' className='btn-icon' />
      </div>
    </div>
  )
}

export default FloatingChatBot