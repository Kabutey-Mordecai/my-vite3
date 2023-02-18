import React from 'react'
import WorkItems  from './WorkItems'
const data= [
    {
        year: 2023,
        title:'Content Creater ',
        duration:'3 years',
        details: 'Lorem ipsum dolor sit amet consectetur,  <br /> adipisicing elit. Nemo officiis assumenda ex ab cum. Sint placeat impedit dolore a dignissimos esse aut error aperiam at, non labore sit dicta nam!',
    },
    {
        year: 2020,
    title:'Facebook  ',
    duration:'3 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis assumenda ex ab cum. Sint placeat impedit dolore a dignissimos esse aut error aperiam at, non labore sit dicta nam!',
    },
{
    year: 2017,
title:'Google  ',
duration:'2 years',
details: 'Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Nemo officiis assumenda ex ab cum. Sint placeat impedit dolore a dignissimos esse aut error aperiam at, non labore sit dicta nam!',
},
{
    year: 2015,
title:'Amason',
duration:'2 years',
details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis assumenda ex ab cum. Sint placeat impedit dolore a dignissimos esse aut error aperiam at, non labore sit dicta nam!',
},

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1084] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl text-center font-bold text-[#001b5e]  ' >Work</h1>
      {data.map((item, idx )=>(
        <WorkItems 
        key={idx} 
        year={item.year} 
        title={item.title}
         duration={item.duration} 
         details={item.details}
         />
      ))}
    </div>
  )
}

export default Work
