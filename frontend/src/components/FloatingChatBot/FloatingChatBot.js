import React, { useEffect, useState } from 'react'
import "./FloatingChatBot.css"
import { useLanguageContent } from '../Utils/MultilingialContent'

function FloatingChatBot() {
  const GetLanguageContent = useLanguageContent()
   const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 996);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className='main-floating-chat-bot-icon-container'>
      <div className='tool-tip-main-container'>
        {
          isBigScreen?
          <div class="tooltip-box">
            {GetLanguageContent?.comming_soon?.title}
          </div>
          :
          <div class="tooltip-box" dangerouslySetInnerHTML={{__html:GetLanguageContent?.comming_soon?.mobileTitle}}>
          </div>
          
        }

      </div>
      <div className='FloatingChatBot-container d-flex align-items-center justify-content-center'>
        <img src='/images/icons/chatbot-icon.png' alt='robot icon' className='btn-icon' />
      </div>
    </div>
  )
}

export default FloatingChatBot