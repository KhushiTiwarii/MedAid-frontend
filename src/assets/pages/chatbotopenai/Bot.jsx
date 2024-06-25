import React, { useState } from 'react'
import chatIcon from '../../images/chat-bot.jpg'
import Chatbot from './Chatbot'

 function Bot() {

  const [chatbotOpen,setChatbotOpen] = useState(false)
  const handleChatClick = () =>{
    setChatbotOpen(!chatbotOpen)
  }

  return (
    <div >
     <div className=' w-16 h-16 rounded-full fixed bottom-10 left-5 shadow-md shadow-emerald-400 z-40 bg-white cursor-pointer m-2 md:w-20 md:h-20' onClick={handleChatClick}>
            <img src={chatIcon} alt=""  className='w-full h-full rounded-full'/>
    </div>
    {chatbotOpen ? <Chatbot /> : ""}
    </div>
  )
}
export default Bot
