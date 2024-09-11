import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className='flex justify-between border rounded-xl border-slate-700 py-3 px-3 sm:px-10 w-[90%] mx-auto mt-3'>
            <div>
                <h3 className='font-medium text-xl text-sky-400'>Prashant Thakur</h3>
            </div>
            <div className="flex">
                <ul className='hidden sm:flex flex-row gap-5'>
                    <li><a className='text-slate-400 hover:border-b-2 border-b-sky-400 py-1' href="#about">About</a></li>
                    <li><a className='text-slate-400 hover:border-b-2 border-b-sky-400 py-1' href="#projects">Projects</a></li>
                    <li><a className='text-slate-400 hover:border-b-2 border-b-sky-400 py-1' href="#skills">Skills</a></li>
                </ul>
                <div id='hamburder' className='sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-sky-400' height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M331.63-537.61H202.87q-37.78 0-64.39-26.61t-26.61-64.39v-128.76q0-37.78 26.61-64.39t64.39-26.61h128.76q37.78 0 64.39 26.61t26.61 64.39v128.76q0 37.78-26.61 64.39t-64.39 26.61Zm-131.15-88.61h133.54v-133.3H200.48v133.3Zm131.15 514.35H202.87q-37.78 0-64.39-26.61t-26.61-64.39v-128.76q0-37.78 26.61-64.39t64.39-26.61h128.76q37.78 0 64.39 26.61t26.61 64.39v128.76q0 37.78-26.61 64.39t-64.39 26.61Zm-131.15-88.61h133.54v-133.54H200.48v133.54Zm556.89-337.13H628.61q-37.78 0-64.39-26.61t-26.61-64.39v-128.76q0-37.78 26.61-64.39t64.39-26.61h128.76q37.78 0 64.39 26.61t26.61 64.39v128.76q0 37.78-26.61 64.39t-64.39 26.61Zm-131.15-88.61h133.3v-133.3h-133.3v133.3Zm131.15 514.35H628.61q-37.78 0-64.39-26.61t-26.61-64.39v-128.76q0-37.78 26.61-64.39t64.39-26.61h128.76q37.78 0 64.39 26.61t26.61 64.39v128.76q0 37.78-26.61 64.39t-64.39 26.61Zm-131.15-88.61h133.3v-133.54h-133.3v133.54Zm-292.2-425.74Zm0 292.2Zm292.2-292.2Zm0 292.2Z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar