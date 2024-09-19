import React from 'react'
import web from '/web.jpg'

const ProjectCards = () => {
  return (
    <div className='flex mt-2 cards rounded-lg md:pt-4 md:pl-4 md:pr-4 md:pb-16 p-2 pb-4 mb-4 bg-white items-center text-justify w-46  flex-col'>
      <div>
      <img className='md:w-72 md:h-24 w-42 mb-4 rounded-lg' src={web} alt="" />
      <div className='flex mb-2 md:mb-4 items-center justify-item text-xs font-semibold'><h3 className='mr-2 text-gray-500'>By</h3><img src={web} className='w-4 mr-1 h-4 rounded-full' alt="" /><h3>Black Rock Web 3</h3></div>
      <h2 className='font-semibold form-title w-16 mb-2 mb-4 text-sm'>BonkMom</h2>
      <h3 className='text-xs font-semibold mb-2 desc form-title'>Project Description</h3>
      <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing. Ratione hic rerum asperiores aperiam iure nisi</p>

      <div className='mt-2 md:mt-4'>
        <div>
        <div className='text-xs font-semibold flex pool justify-between mb-1'>
            <h3 className=''>Project Pool</h3>
            <h3  className='text-gray-500'>$50,000.00</h3>
          </div>
          <div className='w-46 lines bg-gray-300 rounded-full relative'>
            <div
              className='bg-purple-500 h-full rounded-l-full'
              style={{ width: '50%' }}
            ></div>
            <div
              className='bg-gray-300 h-full absolute top-0 rounded-r-full'
              style={{ width: '50%', left: '50%' }}
            ></div>
          </div>
        </div>
        </div>

        <div className='mt-2'>
        <div>
        <div className='text-xs font-semibold flex pool justify-between mb-1'>
          <div className='flex items-center'><i class="mr-1 success text-sm fa-solid fa-caret-up"></i><h3 className=''>Total Upvoted</h3></div>
            <h3  className='text-gray-500'>$23,949.32</h3>
          </div>
          <div className='w-46 lines bg-gray-300 rounded-full relative'>
            <div
              className='green-line h-full rounded-l-full'
              style={{ width: '100%' }}
            ></div>
            <div
              className='bg-gray-300 h-full absolute top-0 rounded-r-full'
              style={{ width: '0%', left: '50%' }}
            ></div>
          </div>
        </div>
        </div>

        <div className='mt-2'>
        <div>
        <div className='text-xs font-semibold flex pool justify-between mb-1'>
          <div className='flex items-center'><i class="fa-solid mr-1 text-red-500 text-sm fa-caret-down"></i> <h3 className=''>Project Pool</h3></div>
            <h3 className='text-gray-500'>$23,949.32</h3>
          </div>
          <div className='w-46 lines bg-gray-300 rounded-full relative'>
            <div
              className='bg-red-500 h-full rounded-l-full'
              style={{ width: '100%' }}
            ></div>
            <div
              className='bg-gray-300 h-full absolute top-0 rounded-r-full'
              style={{ width: '0%', left: '50%' }}
            ></div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCards;
