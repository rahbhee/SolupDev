import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Man from '/man.jpg';

const Poolsall = () => {
    const location = useLocation();
  return (
    <div>
       <div className='bg-white items-center justify-center screen-h pr-4'>
      <div className='flex items-center'>
        <h1 className='align-center rounded-br-lg flex justify-center py-2 px-6 bg-purple-600 text-white text-xs'>General Pool</h1>
        <h1 className='ml-auto font-semibold'>Current price: <span className='font-normal text-xs text-green-400'>+30</span> <span className='three text-purple-600'> $300</span></h1>
      </div>

      <div id="table-wrapper" className='m-4'>
        <h1 className='font-bold solup general w-max'>Solup General Pool</h1>
        <div id="table-scroll" className='overflow-x-auto'>
          <table className=''>
            <thead className='project font-normal'>
              <tr className=''>
                <th className=''>Total Liquidity</th>
                <th className=''>Total Shares</th>
                <th className=''>Locked Liquidity</th>
                <th className=''>Price/Share</th>
                <th className=''>Unrealized P & L</th>
                <th className=''></th>
                <th className=''>Action</th>
                <th className=''></th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td>$120,000</td>
                <td>20000</td>
                <td>$12000000</td>
                <td>$1,000</td>
                <td>1000</td>
                <td className='text-purple-600'>500 USD</td>
                <td className=''><h3 className='text-purple-600 p-2 bg-purple-200'>Add to pool</h3></td>
                <td className=''><h3 className='text-white p-2 bg-purple-600'>Borrow Liquidity</h3></td>
              </tr>
            </tbody>
          </table>
          <div className='project'></div>
        </div>
      </div>
      </div>

      <div className='ml-4 text-lg general w-max'>
        <h1>Market Pools</h1>
      </div>
      <div className='ml-4 project flex text-xs text-gray-500 justify-between items-center'>
        <div className='flex md:gap-36 gap-10 justify-between'>
        <Link to='/allpools'>
            <h4 className={`${location.pathname === 'allpools' ? 'border-b-2 mt-4 pro' : ''} `}>
              All Pools
            </h4>
          </Link>
          <Link to='/projectpools'>
            <h4 className={`${location.pathname === 'projectpools' ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
              Project Pools
            </h4>
          </Link>
          <Link to='/betpools'>
            <h4 className={`${location.pathname === 'betpools' ? 'border-b-2 mt-4 pro' : ''}`}>
              Bet Pools
            </h4>
          </Link>
        </div>
        </div>

    <div className='bg-white items-center justify-center screen-h pr-4'>
      <div className='flex items-center'>
        <div className='flex items-center justify-center'>
        <h1 className='align-center rounded-br-lg text-xs flex justify-center py-2 px-6 bg-purple-600 text-white'>Project Pool</h1>
        <img className='w-10 ml-2 rounded-3xl h-10' src={Man} alt="profile" />
        <h1 className='mt-2 general w-max'>Hamster Kombat Launch</h1>
        </div>
        <h1 className='ml-auto font-semibold'>Current price: <span className='font-normal text-xs text-green-400'>+30</span> <span className='three text-purple-600'> $300</span></h1>
      </div>

      <div id="table-wrapper" className='m-4'>
        <div id="table-scroll" className='overflow-x-auto'>
          <table className=''>
            <thead className='project font-normal'>
              <tr className=''>
                <th className=''>Total Liquidity</th>
                <th className=''>Total Shares</th>
                <th className=''>Locked Liquidity</th>
                <th className=''>Price/Share</th>
                <th className=''>Unrealized P & L</th>
                <th className=''></th>
                <th className=''>Action</th>
                <th className=''></th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td>$120,000</td>
                <td>20000</td>
                <td>$12000000</td>
                <td>$1,000</td>
                <td>1000</td>
                <td className='text-purple-600'>500 USD</td>
                <td className=''><h3 className='text-purple-600 p-2 bg-purple-200'>Add to pool</h3></td>
                <td className=''><h3 className='text-white p-2 bg-purple-600'>Borrow Liquidity</h3></td>
              </tr>
            </tbody>
          </table>
          <div className='project'></div>
        </div>
      </div>
      </div>

      <div className='bg-white items-center justify-center screen-h pr-4'>
      <div className='flex items-center'>
        <div className='flex items-center justify-center'>
        <h1 className='align-center rounded-br-lg text-xs flex justify-center py-2 px-6 bg-purple-600 text-white'>Bet Pool</h1>
        <img className='w-10 ml-2 rounded-3xl h-10' src={Man} alt="profile" />
        <h1 className='mt-2 general w-max'>Hamster Kombat Launch</h1>
        </div>
        <h1 className='ml-auto font-semibold'>Current price: <span className='font-normal text-xs text-green-400'>+30</span> <span className='three text-purple-600'> $300</span></h1>
      </div>

      <div id="table-wrapper" className='m-4'>
        <div id="table-scroll" className='overflow-x-auto'>
          <table className=''>
            <thead className='project font-normal'>
              <tr className=''>
                <th className=''>Total Liquidity</th>
                <th className=''>Total Shares</th>
                <th className=''>Locked Liquidity</th>
                <th className=''>Price/Share</th>
                <th className=''>Unrealized P & L</th>
                <th className=''></th>
                <th className=''>Action</th>
                <th className=''></th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td>$120,000</td>
                <td>20000</td>
                <td>$12000000</td>
                <td>$1,000</td>
                <td>1000</td>
                <td className='text-purple-600'>500 USD</td>
                <td className=''><h3 className='text-purple-600 p-2 bg-purple-200'>Add to pool</h3></td>
                <td className=''><h3 className='text-white p-2 bg-purple-600'>Borrow Liquidity</h3></td>
              </tr>
            </tbody>
          </table>
          <div className='project'></div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Poolsall
