import React from 'react'
import Header from '../../components/Header/Header'
import Routers from '../../routes/Routers'
import Footer from '../../components/Footer/Footer'
import Bot from '../pages/chatbotopenai/Bot'


const Layout = () => {
  return (
   <>
   <Header/>
   <main>
    <Routers/>
   </main>
   <Bot/>
   <Footer/>
   </>
  )
}

export default Layout
