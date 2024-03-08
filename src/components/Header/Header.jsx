import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink,Link } from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
import navBg from '../../assets/images/ice.jpg'
import chatIcon from '../../assets/images/aichat.png'
import Chatbot from '../../assets/pages/chatbotopenai/Chatbot'

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const [chatbotOpen,setChatbotOpen] = useState(false)
  const handleChatClick = () =>{
    setChatbotOpen(!chatbotOpen)
  }

  const handleStickyHeader = () => {
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    
    return ()=> window.removeEventListener('scroll',handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <>
    <header className='header flex items-center' ref={headerRef}>
       <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Link to='/home'>
            <div className=" ">
                <img src={logo} alt="" srcset=""  className=' w-52 h-20'/>
            </div>
            </Link>
            
            {/* menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                  {navLinks.map((link,index)=>(
                    <li key={index}>
                      <NavLink
                      to={link.path}
                      className={navClass=>
                        navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        :'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                      }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>

            <div className='w-10 h-10 rounded-full  bg-white cursor-pointer m-2' onClick={handleChatClick}>
              <img src={chatIcon} alt=""  className='w-full h-full rounded-full'/>
            </div>

            

            {/* nav right */}
            <div className="flex items-center gap-4">
              <div className="">
                <Link to='/'>
                  <figure className='w-[35px] h-[35px] rounded-full'>
                    <img src={userImg} alt="" srcset="" />
                  </figure>
                </Link>
              </div>

              <Link to='/login'>
                <button className='bg-primaryColor  px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
              <span className='md:hidden' onClick={toggleMenu}> 
                <BiMenu className='w-6 h-6 cursor-pointer'/>
              </span>
            </div> 

          </div>
       </div>
    </header>
    {chatbotOpen ? <Chatbot/> : ""}
    </>
  )
}

export default Header
