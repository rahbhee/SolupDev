import React from 'react'
import Profile from '/profile.jpg'
import filter from '/filter.png'

const Header = ({pageTitle}) => {

  return (
  <div className='mb-6 header border-gray-300'>

     <div className='flex md:flex-row flex-col flex-col-reverse  md:items-center justify-between'>

         <h1 className='text-lg mt-6 md:mt-0 md:text-3xl font-medium'>{pageTitle}</h1>

         <div className='flex ml-20 social items-center justify-between'>
         <div className='flex text-xs md:text-sm rounded-lg bg-purple-600 text-white py-2 px-2 items-center justify-between'>
         <i class="md:mr-2 mr-1 fa-solid fa-plus"></i>
         <h4 className=''>Connect social</h4>
         </div>
         
         <i class="text-blue-800 md:ml-6 p-2 md:ml-6 rounded-lg fa-solid bg-indigo-200 fa-magnifying-glass"></i>
         <i class="text-purple-800 md:ml-6 p-2 rounded-lg bg-purple-200 fa-regular fa-bell"></i>
         <img className='w-10 md:ml-6 rounded-3xl h-10' src={Profile} alt="profile" />
         </div>

      </div>

      <h3 className='text-gray-500 md:mt-2'>Welcome back, Rabi!</h3>


        <div className='flex justify-between mt-4 items-center'>
          <div className='flex text-xs md:text-sm text-gray-500 justify-between items-center'>
          <h4 className='mr-4'>Latest Project</h4>
          <h4>Trending Project</h4>
          </div>
          <div className='flex p-2 mb-2 text-xs md:text-sm rounded-lg bg-purple-600 justify-between items-center'>
            <img src={filter} className='mr-2 filter w-3' alt="filter-icon" />
            <h4 className='text-white '>Filter Projects</h4>
          </div>
      </div>

  </div>
    
  )
}

export default Header
