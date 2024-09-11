import React from 'react'



const Menu:React.FC = () => {
  return (
    <div id='mobile-menu' className='border border-sky-900 bg-slate-950 text-sky-400 w-min px-4 py-2 rounded-md fixed top-20 right-8 hidden'>
      <ul className='flex gap-3 flex-col'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
  )
}

export default Menu;