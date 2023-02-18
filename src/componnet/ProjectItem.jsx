import React from 'react'

const ProjectItem = ({img ,title}) => {
  return (
    <div className='relative flex items-center justify-center w-full h-auto  shadow-xl shadow-gray-400 rounder-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ' >
      <img src={img}alt="/ " className='rounder-xl group-hover:opacity-10 ' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50] translate-x-[-50%] translate-y-[-50%] '>
        <h2 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h2>
        <p className='pb-4 pt-2 font-semibold    text-white text-center'> React-js</p>
        <a href="/"><p className='text-center p-3 font-bold bg-white text-gray-700 rounded-lg shadow-xl cursor-pointer  text-lg  '>More Info</p></a>
      </div>  
    </div>
  )
}

export default ProjectItem
