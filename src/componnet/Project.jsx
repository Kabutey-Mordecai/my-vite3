import React from 'react'
import ProjectItem  from './ProjectItem'
import rImg from '../assets/r.jpeg'
import nImg from '../assets/n.jpg'
import pImg from '../assets/p.jpg'
import qImg from '../assets/q.jpeg'
import plImg from '../assets/pl.jpg'
import oImg from '../assets/o.jpg'
const Project = () => {
  return (
    <div id='project' className='max-w-[1040] m-auto md:pl-20 p-4 py-16  '>
         <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
         <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
         Aperiam, beatae asperiores atque dicta non officia. <br />Itaque veniam, aspernatur aliquid temporibus quo magnam quos maxime harum, adipisci incidunt voluptates fugit est!</p>

         <div className="grid sm:grid-cols-2 gap-16  ">
          <ProjectItem img={nImg} title='Car' />         
          <ProjectItem img={qImg} title='car-road' />
          <ProjectItem img={plImg} title='air-plane' />  
          <ProjectItem img={oImg} title='Car-wait' />
          
         </div>
    </div>
  )
}

export default Project
