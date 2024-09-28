import React, { useEffect, useState } from 'react';
import Profile from '/profile.jpg';
import filter from '/filter.png';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ pageTitle, connect, connectWallet }) => {
  const location = useLocation();
  const [isExplorePage, setIsExplorePage] = useState(false);

  useEffect(() => {
    // Update the state based on the current pathname
    setIsExplorePage(location.pathname === '/explore');
  }, [location.pathname]);

  return (
    <div className='mb-6 header'>
      <div className='flex md:flex-row flex-col mb-6 flex-col-reverse md:items-center justify-between'>
        <h1 className='text-xl mt-8 md:mt-4 md:mb-4 md:text-3xl font-medium'>{pageTitle}</h1>

        <input
          className='search text-xs md:text-xs lg:text-sm lg:w-6/12 h-10 md:h-10 md:py-6 py-4 px-4 md:px-2 lg;px-4'
          placeholder='Search Projects, Bets, Stocks, Bonds, Token'
          type="search"
        />

        <div className='flex ml-20 social items-center justify-between'>
          {isExplorePage ? (
            <button
              onClick={connectWallet}
              className='align-center flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs'
            >
              {!connect ? 'Connect Wallet' : 'Disconnect Wallet'}
            </button>
          ) : (
            <div className='hidden md:flex justify-center gap-2 items-center'>
              <i className="text-purple-800 md:ml-6 p-2 h-8 rounded-lg bg-purple-200 fa-regular fa-bell"></i>
              <img className='w-10 md:ml-6 rounded-3xl h-10' src={Profile} alt="profile" />
            </div>
          )}
        </div>
      </div>

      {connect && <h3 className='text-gray-500 text-sm mb-4 md:mb-4'>Welcome back, Rabi!</h3>}

      {isExplorePage && (
        <div className='project'>
          <div className='flex justify-between mt-4 items-center'>
            <div className='flex text-xs md:text-sm text-gray-500 justify-between items-center'>
              <Link to='/latest'>
                <h4 className={`${location.pathname === '/latest' ? 'border-b-2 pb-2 mt-4 pro' : ''} md:mr-20 mr-4`}>
                  Latest Project
                </h4>
              </Link>
              <Link to='/trending'>
                <h4 className={`${location.pathname === '/trending' ? 'border-b-2 mt-4 pro' : ''}`}>
                  Trending Project
                </h4>
              </Link>
            </div>
            <div className='flex cursor-pointer items-center'>
              <div>
                <i className="text-blue-800 p-2 h-8 w-8 rounded-lg bg-blue-100 fa-solid fa-magnifying-glass"></i>
              </div>
              <div className='flex cursor-pointer p-1 py-2 ml-1 md:ml-2 text-xs md:text-sm rounded-lg bg-purple-600 justify-between items-center'>
                <img src={filter} className='mr-2 filter cursor-pointer w-2 md:w-3' alt="filter-icon" />
                <h4 className='text-white cursor-pointer'>Filter Projects</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
