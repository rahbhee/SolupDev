import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import solupbetdata from '../solupbetdata.json';

const SolupPlaceBet = () => {
  const { betId } = useParams(); 
  const navigate = useNavigate();

  
  const selectedBet = solupbetdata.find((bet) => bet.id.toString() === betId);

  if (!selectedBet) {
    return <h1 className='text-center text-red-500'>Bet not found!</h1>;
  }

  return (
    <div className='grid gap-10 md:grid-cols-2'>
        <div className='flex flex-col'>
        <div className='flex items-center'>
        <div className='flex bg-white w-8 h-8 items-center'>
          <i onClick={() => navigate(-1)}
          className="text-purple-600 gap-2 fa-solid fa-arrow-left"></i>
         </div>
        <img
          src={selectedBet.imageUrl}
          alt={selectedBet.title}
          className='w-12 h-12 rounded-full border mt-4'/>
          <h1 className='text-2xl font-semibold'>{selectedBet.title}</h1>
        </div>
        <div id="table-wrapper" className='bg-white'>
        <div id="table-scroll" className='overflow-x-auto'>
          <table className=''>
            <thead className='project font-normal'>
              <tr className=''>
                <th className=''>Total bets placed</th>
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
  );
};

export default SolupPlaceBet;
