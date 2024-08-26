import React from 'react'
import { Link } from 'react-router-dom'
import filter from '/filter.png'
import { useLocation } from 'react-router-dom'


const Latest = () => {
  const location = useLocation();
  return (
    <div>
       {location.pathname.includes('latest') && (
    <div className='project'>
       <div className='flex justify-between mt-4 items-center'>
          <div className='flex text-xs md:text-sm text-gray-500 justify-between items-center'>
            <Link to='/latest'> <h4 className='mr-4'>Latest Project</h4></Link>
            <Link to='/trending'><h4>Trending Project</h4></Link>
          </div>
          <div className='flex p-2 mb-2 text-xs md:text-sm rounded-lg bg-purple-600 justify-between items-center'>
            <img src={filter} className='mr-2 filter w-3' alt="filter-icon" />
            <h4 className='text-white '>Filter Projects</h4>
          </div>
      </div>
    </div>
    )}
      Latest project 
    </div>
  )
}

export default Latest;
