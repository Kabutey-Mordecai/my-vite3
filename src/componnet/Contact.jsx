import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'> Contact </h1>
      <form action="https://getform.io/f/031449d1-1079-47ce-b384-90f342817216" method="post" encType='multipart/formdata' >
      <div className='grid md:grid-cols-2 gap-4 w-full  py-4'>
    <div className='flex flex-col'><label className='uppercase py-2 text-sm'>NAME </label>
    <input type="text" name='name'className='border-2 rounded-lg p-3 flex ' />
    </div>
    <div className='flex flex-col'><label className='uppercase py-2 text-sm'>PHONE </label>
    <input type="text" name='phone'className='border-2 rounded-lg p-3 flex ' />
    </div>
    </div>
    <div className='flex flex-col py-2'>
        <label className='uppercase py-2 text-sm'>EMAIL</label>
        <input type="email" name="email" className='border-2 rounded-lg p-3 flex border-gray-300 ' />
    </div>
    <div className='flex flex-col py-2'>
        <label className='uppercase py-2 text-sm' >SUBJECT </label>
        <input type="text" name="subject"  className='border-2 rounded-lg p-3flex '/>
    </div>
    <div className='flex flex-col py-2'>
        <label className='uppercase py-2 text-sm'>MASSAGE </label>
        <textarea  rows="10" name="massage"  > </textarea>
    </div>
        <button className='mt-4 p-4 bg-[#001b5e] text-gray-200 w-full rounded-lg  '>Send Massage</button>

      </form>
    </div>
  )
}

export default Contact
