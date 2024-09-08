import React from 'react'
import Steps from './Steps'
import signuphero from '/ccc.jpg'
import group91 from '/group91.png'

const Signup = () => {

  return (
    <div className='md:grid text-gray-500 justify-center items-center md:grid-cols-2 md:h-screen'>
      <div className='hidden md:flex bg-white h-screen items-center pl-4'>
        <img className='w-7/12 h-3/7' src={group91} alt="" />
        <img className='w-5/12 h-3/7' src={signuphero} alt="" />
      </div>
      
      <div className='stepone items-center justify-center flex flex-col'>
      <Steps/>
      </div>
    </div>
  )
}

export default Signup;
