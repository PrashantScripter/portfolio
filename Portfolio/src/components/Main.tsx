import React from 'react'

const Main: React.FC = () => {
  return (
    <div className='flex flex-col gap-32 py-10'>
      {/* about */}
      <div id='about' className='flex flex-col gap-10 mx-auto w-[90%] lg:flex lg:flex-row lg:gap-0 lg:items-center'>
        <div className='flex flex-col gap-6 lg:w-[60%]'>
          <h1 className='text-4xl sm:text-6xl font-medium text-sky-400'>Hi, I'm Prashant Thakur</h1>
          <p className='text-slate-400 text-xl'>I'm a passionate <span className='text-pink-400'>Full Stack Developer</span> with experience in building dynamic web applications using technologies like MERN (MongoDB, Express, React, Node.js) and TypeScript. With a strong foundation in JavaScript, C++, Python, and web development frameworks, I thrive on creating efficient, user-friendly, and scalable solutions. I'm currently exploring Next.js and Redux to further enhance my skill set.</p>
          <div className='flex gap-10 items-center'>
            <a href="mailto:prashantthakurji90@gmail.com" className='border rounded-md border-sky-900 px-4 py-2 text-sky-400 font-bold'>Hire me</a>
            <div className='flex gap-4'>
              <a href="https://www.linkedin.com/in/thakurprashant7949/">
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-sky-400 cursor-pointer' height={"30px"} width={"30px"} viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
              </a>
              <a href="https://www.instagram.com/prashantthakur.dev/">
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-sky-400 cursor-pointer' height={"30px"} width={"30px"} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a href="https://github.com/PrashantScripter">
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-sky-400 cursor-pointer' height={"30px"} width={"30px"} viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className='justify-center lg:w-[40%] flex lg:justify-end'>
          <div className='size-60 mix-blend-lighten sm:size-80 rounded-full overflow-hidden flex  shadow-inner shadow-sky-900 hover:-backdrop-hue-rotate-30 transition ease-in-out'>
            <img className='object-cover hover:scale-110 transition ease-in-out delay-150 cursor-pointer' src="/myphoto.png" alt="" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className='w-[90%] mx-auto flex-col flex justify-between gap-10 sm:flex-row sm:items-center'>
        <h1 className='text-4xl font-bold text-sky-400 '>Education</h1>
        <div className='w-[100%]  p-4 rounded-lg sm:w-[60%]  lg:flex items-center justify-center gap-32 border border-sky-900'>
          <svg xmlns="http://www.w3.org/2000/svg" className='fill-sky-400 hidden lg:block' height="80px" viewBox="0 -960 960 960" width="80px" fill="#5f6368"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg>
          <p className='sm:text-xl text-slate-400 text-start'>Maharshi Dayanand University<br /><span className='italic text-sky-400 px-4 text-sm text-start'>2022-2026</span><br />Bachelor of technology in computer science</p>
        </div>
      </div>

      {/* slills and tecnologies */}
      <div id='skills' className='w-[90%] mx-auto flex justify-between flex-col-reverse gap-10 sm:gap-0 sm:flex-row  text-slate-400 sm:items-center '>
        <div className='flex flex-col sm:flex-row gap-2 sm:w-[80%]'>
          <div className='border rounded-md border-sky-900 sm:w-[50%] p-5'>
            <p className='text-sky-400 mb-4 text-xl'>Frontend</p>
            <ul className='flex flex-wrap lg:grid grid-cols-3 gap-3'>
              <li className='border border-sky-900 p-1 text-center rounded-md'>React</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>HTML</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>CSS</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>Tailwind css</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>Typescript</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>Next.js</li>
            </ul>
          </div>

          <div className='border rounded-md border-sky-900 sm:w-[50%] p-5 '>
            <p className='text-sky-400 mb-4 text-xl'>Backend</p>
            <ul className='flex flex-wrap lg:grid grid-cols-3 gap-3'>
              <li className='border border-sky-900 p-1 text-center rounded-md'>Node.js</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>Express</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>MongoDB</li>
              <li className='border border-sky-900 p-1 text-center rounded-md'>SQL</li>
            </ul>
          </div>
        </div>

        <h1 className=' w-[100%] sm:w-[40%] text-4xl font-bold text-sky-400 sm:text-right'>Skills</h1>
      </div>

      {/* Projects */}
      <div id='projects' className='w-[90%] mx-auto flex justify-between flex-col gap-10 sm:gap-0 sm:flex-row  text-slate-400 sm:items-center'>
        <h1 className=' w-[100%] sm:w-[30%] text-4xl font-bold text-sky-400'>Projects</h1>
        <div className='flex flex-col gap-4 justify-end sm:w-[70%] sm:flex-row '>

          <div className='lg:w-1/2 sm:w-3/4 border border-sky-900 rounded-md overflow-hidden'>
            <img className='' src="/image.png" alt="" />
            <div className='p-1 overflow-x-scroll xl:overflow-hidden w-full'>
              <ul className=' flex gap-2 p-1 text-sky-400'>
                <li className='border px-2 border-sky-900 rounded-md'>Ejs</li>
                <li className='border px-2 border-sky-900 rounded-md'>Node.js</li>
                <li className='border px-2 border-sky-900 rounded-md'>Express</li>
                <li className='border px-2 border-sky-900 rounded-md'>mongoDB</li>
                <li className='border px-2 border-sky-900 rounded-md'>Cloudinary</li>
              </ul>
            </div>
            <div className='flex justify-between p-2 border-t border-sky-950'>
              <a className='border px-4 py-1 border-sky-900 text-sky-400 rounded-md hover:bg-sky-950 transition ease-in-out' href="https://socialloop.vercel.app/">Live</a>
              <a className='border px-4 py-1 border-sky-900 text-sky-400 rounded-md hover:bg-sky-950 transition ease-in-out' href="https://github.com/PrashantScripter/My-Social-App">Github</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main