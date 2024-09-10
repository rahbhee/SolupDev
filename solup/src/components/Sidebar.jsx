import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/solup.png'
import { useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Mobilesidebar from './mobileSIdebar'

const Sidebar = ({activeLink, setActiveLink, SIDEBAR_LINKS, connectWallet, connect}) => {
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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

  if (currentPath.includes('latest') || currentPath.includes('trending')) {
    const exploreIndex = SIDEBAR_LINKS.findIndex(link => link.name === 'Explore');
    setActiveLink(exploreIndex);
  } else {
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);
  }
}, [location.pathname, SIDEBAR_LINKS, setActiveLink]);


  return (
    <>
      {windowWidth <=767 ? (<Mobilesidebar/>) :
      <>
        <div className={`w-16 sidebar md:w-56 fixed main left-0 top-0 h-screen pl-0 md:pl-8 border-r pt-6 px-4 bg-white border-none`}>
      <div className='mb-10 flex'>
        <img src={logo} alt="LOGO" className='w-28 sidebar-logo ml-2 md:flex'/>
      </div>
      <ul className='mt-16 ml-2 md:ml-0 space-y-6'>
              {SIDEBAR_LINKS.map((link, index) => {
                const isSpecialRoute = link.path === '/latest' || link.path === '/trending';

                return (
                  <li
                    key={link.id}
                    onClick={() => setActiveLink(index)}
                    className={`sidebar-item text-gray-500 font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-5 hover ${
                      activeLink === index || (link.name === 'Explore' && (location.pathname.includes('latest') || location.pathname.includes('trending')))
                        ? '' : ''
                    }`}
                  >
                    <Link className='flex items-center justify-center md:justify-start' to={link.path}>
                      <span className={`icon ${activeLink === index || (link.name === 'Explore' && (location.pathname.includes('latest') || location.pathname.includes('trending'))) ? 'text-purple-600 border--2 border-purple-600' : ''}`}>
                        {link.icons}
                      </span>
                      {!isSpecialRoute && (
                        <span className={`ml-4 text ${activeLink === index || (link.name === 'Explore' && (location.pathname.includes('latest') || location.pathname.includes('trending'))) ? 'text-black' : ''}`}>
                          {link.name}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
      <button onClick={connectWallet} className='align-center flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs'>
      {!connect ? 'Connect Wallet' : 'Disconnect Wallet'}
      </button>
    </div>
    </>
    }
      </>
  )
}

export default Sidebar;
