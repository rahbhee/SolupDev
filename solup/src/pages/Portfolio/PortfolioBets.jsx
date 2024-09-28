import React from 'react'
import PortfolioNav from './PortfolioNav'
import portfolioData from '../portfolioalldata.json';

const Bets = () => {
  return (
    <div className='flex flex-col gap-2'>
    <PortfolioNav />
    <div className='text-xs grid md:gap-4 grid-cols-7 gap-6 portfolio bg-white font-semibold'>
      <div className='py-2 col-span-2 md:py-6 px-4 flex items-center justify-center md:px-6'><h3 className='' >Project</h3></div>
      <div className='py-2 col-span-1 md:py-6 px-4 flex items-center justify-center md:px-6'> <h3  className=''>Shares</h3></div>
      <div className='py-2 col-span-1 md:py-6 px-4 flex items-center justify-center md:px-6'> <h3 className=''>Price/share</h3></div>
      <div className='py-2 col-span-1 md:py-6 px-4 flex items-center justify-center md:px-6'> <h3  className=''>Total price</h3></div>
      <div className='py-2 col-span-1 md:py-6 flex items-center justify-center px-4 '><h3  className=''>Date created</h3></div>
      <div className='py-2 col-span-1 md:py-6 flex items-center justify-center px-4 md:px-6'> <h3  className=''>Stats</h3></div>
    </div>
    {portfolioData.map((project) => (
        <div key={project.id} className='text-xs grid md:gap-4 grid-cols-7 bg-white'>
          <div className='py-6 col-span-2 flex side px-6 relative'>
            <h4 className='bg-purple-600 w-24 text-white text-center absolute top-0 left-0 bonkpro py-1'>
              Project
            </h4>
            <h1 className='font-semibold text-lg flex mt-4 items-center justify-center bonk'>
              {project.projectName}
            </h1>
          </div>
          <div className='side items-center col-span-1 flex justify-center py-3 md:py-6 px-6'>
            <h3 className='px-4'>{project.shares.toLocaleString()}</h3>
          </div>
          <div className='py-3 items-center col-span-1 flex justify-center side md:py-6 px-6'>
            <h3>{project.pricePerShare.toLocaleString()}</h3>
          </div>
          <div className='py-3 items-center col-span-1 flex justify-center side md:py-6 px-6'>
            <h3>${project.totalPrice.toLocaleString()}</h3>
          </div>
          <div className='py-3 items-center col-span-1 flex justify-center side md:py-6 px-6'>
            <h3>{new Date(project.dateCreated).toLocaleDateString()}</h3>
          </div>
          <div className='py-3 items-center col-span-1 flex justify-center md:py-6 px-6'>
            <h3 className='px-2 py-1 perc'>{project.stats}</h3>
          </div>
        </div>
      ))}
</div>
  )
}

export default Bets
