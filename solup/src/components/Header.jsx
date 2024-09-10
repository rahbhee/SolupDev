import React from 'react'
import Profile from '/profile.jpg'
import filter from '/filter.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Header = ({pageTitle, connect}) => {
 
  const location = useLocation();

  return (
  <div className='mb-6 header '>

     <div className='flex md:flex-row flex-col mb-6 flex-col-reverse md:items-center justify-between'>

         <h1 className='text-xl mt-4 mb-4 md:mb-4 md:text-3xl font-medium'>{pageTitle}</h1>

         <input className='search text-xs md:text-xs lg:text-sm lg:w-6/12 h-8 md:h-10  md:py-2 py-4 px-4 md:px-1 lg;px-4 ' placeholder='Search Projects, Bets, Stocks, Bonds, Token' type="search" />

         <div className='flex ml-20 social items-center justify-between'>
         <div className='hidden justify-center gap-2 items-center md:flex'>
         <i class="text-purple-800 md:ml-6 p-2 h-8 rounded-lg bg-purple-200 fa-regular fa-bell"></i>
         <img className='w-10 md:ml-6 rounded-3xl h-10' src={Profile} alt="profile" />
         </div>

         </div>

      </div>

      {connect &&  <h3 className='text-gray-500 text-sm mb-4 md:mb-4'>Welcome back, Rabi!</h3>
 }
      <div className='text-xs highlights flex gap-1 text-gray-500'>
        <div className='bg-white py-3 px-6 flex items-center'>
        <i class="fa-solid fa-sack-dollar mr-2"></i>
        <h3>Highlights</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>All</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>ERC$)$</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>ERC404</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>Other Categories</h3>
        </div>
        <div className='hidden lg:block w-2/5 bg-white py-3 px-10 flex items-center'></div>
      </div>

      {location.pathname.includes('explore') && (
    <div className='project'>
       <div className='flex justify-between mt-4 items-center'>
          <div className='flex text-xs md:text-sm text-gray-500 justify-between items-center'>
            <Link to='/latest'> <h4 className='md:mr-24 mr-4'>Latest Project</h4></Link>
            <Link to='/trending'><h4 className='md:ml-24'>Trending Project</h4></Link>
          </div>

          <div className='flex cursor-pointer items-center'>
            <div>
            <i class="text-blue-800 p-2 h-8 w-10 rounded-lg bg-blue-100 fa-solid fa-magnifying-glass"></i>
            </div>
          <div className='flex filter cursor-pointer p-1 py-2 ml-1 md:ml-2 text-xs md:text-sm rounded-lg bg-purple-600 justify-between items-center'>
            <img src={filter} className='mr-2 text-white cursor-pointer w-2 md:w-3' alt="filter-icon" />
            <h4 className='text-white filter cursor-pointer'>Filter Projects</h4>
          </div>
          </div>
      </div>
    </div>
    )}
  </div>
  )
}

export default Header;
