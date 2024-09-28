import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/solup.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Mobilesidebar from './mobileSIdebar';

const Sidebar = ({ activeLink, setActiveLink, SIDEBAR_LINKS, connectWallet, connect }) => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    console.log("Current Path:", currentPath);
  
    if (currentPath.includes('solupbet')) { // Check for 'solupbet' in general
      console.log("Matched SolUpBet");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'SolUpBet'));
    } else if (currentPath.includes('latest') || currentPath.includes('trending')) {
      console.log("Matched Latest or Trending");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Explore'));
    } else if (currentPath.includes('portfolio')) {
      console.log("Matched Portfolio");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Portfolio'));
    } else {
      const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
      if (activeIndex !== -1) {
        setActiveLink(activeIndex);
      } else {
        console.log("Setting default to SolUpBet");
        setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'SolUpBet')); // Fallback to SolUpBet
      }
      console.log("Default Match:", activeIndex);
    }
  
    console.log("Active Link Set To:", activeLink);
  
  }, [location.pathname, SIDEBAR_LINKS, setActiveLink]);
  
  
  return (
    <>
      {windowWidth <= 767 ? (
        <Mobilesidebar connectWallet={connectWallet} connect={connect} />
      ) : (
        <div className="w-16 sidebar md:w-56 fixed main left-0 top-0 h-screen pl-0 md:pl-8 border-r pt-6 px-4 bg-white border-none">
          <div className="mb-10 flex">
            <img src={logo} alt="LOGO" className="w-28 sidebar-logo ml-2 md:flex" />
          </div>
          <ul className="mt-16 ml-2 md:ml-0 space-y-6">
            {SIDEBAR_LINKS.map((link, index) => {

              if (link.name === 'Project Market') return null;

              const isActive = activeLink === index ||
                (link.name === 'Portfolio' && location.pathname.includes('portfolio'));

              return (
                <li key={link.id} className="sidebar-item text-gray-500 font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-5 hover">
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => `flex items-center justify-center md:justify-start ${isActive ? 'bg-gray-100' : ''}`}
                  onClick={() => setActiveLink(index)}
                >
                  <span className={`icon ${activeLink === index ? 'text-purple-600' : 'text-gray-500'}`}>
                    {link.icons}
                  </span>
                  <span className={`ml-4 text ${activeLink === index ? 'text-black' : 'text-gray-500'}`}>
                    {link.name}
                  </span>
                </NavLink>
              </li>
              );
            })}
          </ul>
          <button
            onClick={connectWallet}
            className="align-center mt-32 flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs"
          >
            {!connect ? 'Connect Wallet' : 'Disconnect Wallet'}
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
