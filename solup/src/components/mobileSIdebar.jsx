import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/solup.png';
import Profile from '/profile.jpg';

const Mobilesidebar = ({ connectWallet, connect }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const toggleMobile = () => {
    setToggle(!toggle);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: '/explore', name: 'Explore', icons: <i className="fa-solid fa-house"></i> },
    // Exclude 'Project Market' for mobile view
    { id: 2, path: '/othermarket', name: 'Other Market', icons: <i className="fa-solid fa-chart-line"></i> },
    { id: 3, path: '/pools', name: 'Pools', icons: <i className="fa-solid fa-sack-dollar"></i> },
    { id: 4, path: '/solupbet', name: 'SolUpBet', icons: <i className="fa-solid fa-cube"></i> },
    { id: 5, path: '/portfolio', name: 'Portfolio', icons: <i className="fa-solid fa-bullseye"></i> },
    { id: 6, path: '/latest', name: 'Project' },
    { id: 7, path: '/trending', name: 'Project' },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);
  }, [location.pathname]);

  // Filter out 'Project Market' links specifically for mobile view
  const filteredLinks = SIDEBAR_LINKS.filter(link => link.name !== 'Project');

  return (
    <div className='flex justify-between items-center'>
      {toggle ? (
        <div className='mobilesidebar w-50 fixed main left-0 top-0 h-screen border-r pt-8 px-4 bg-white border-none'>
          <div className='mb-8 flex'>
            <img src={logo} alt="LOGO" className='w-28 sidebar-logo ml-2 md:flex'/>
            <i onClick={toggleMobile} className="cancel-sidebar fa-solid text-purple-600 text-xl ml-20 fa-xmark"></i>
          </div>
          <ul className='mt-6 md:ml-0 space-y-6'>
            {filteredLinks.map((link, index) => (
              <li
                key={link.id}
                onClick={() => setActiveLink(index)}
                className='sidebar-item text-gray-500 font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-6 hover'
              >
                <Link className='flex items-center justify-start' to={link.path}>
                  <span className={`icon ${activeLink === index ? 'text-purple-600 border--2 border-purple-600' : ''}`}>
                    {link.icons}
                  </span>
                  <span className={`ml-4 text ${activeLink === index ? 'text-black' : ''}`}>
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={connectWallet} className='align-center flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs'>
      {!connect ? 'Connect Wallet' : 'Disconnect Wallet'}
      </button>
        </div>
      ) : (
        <i onClick={toggleMobile} className="text-gray-500 text-xl fa-solid fa-bars"></i>
      )}

      <div className='justify-center gap-2 items-center flex'>
        <i className="text-purple-800 md:ml-6 p-2 rounded-lg bg-purple-200 fa-regular fa-bell"></i>
        <img className='w-8 md:ml-6 rounded-3xl h-8' src={Profile} alt="profile" />
      </div>
    </div>
  );
};

export default Mobilesidebar;
