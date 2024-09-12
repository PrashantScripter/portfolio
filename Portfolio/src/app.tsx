import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.FC = () => {

  return (
    <div className='bg-gradient-to-l from-gray-950 to-cyan-950 h-full flex flex-col gap-20 scroll-smooth'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App