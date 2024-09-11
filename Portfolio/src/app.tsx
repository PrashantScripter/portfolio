import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Menu from './components/Menu'

const App: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-950 to-slate-950 h-full flex flex-col gap-20 scroll-smooth'>
      <Navbar />
      <Menu />
      <Main />
      <Footer />
    </div>
  )
}

export default App