import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Projectmarket from './projectMarket'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'



const layout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [currentProject, setCurrentProject] = useState('');

  const SIDEBAR_LINKS = [
    {id:1, path: '/', name:'Dashboard', icons: <i className="fa-solid fa-house"></i>},
    {id:2, path: '/projectmarket', name:'Project Market', icons: <i className="fa-solid fa-folder"></i>},
    {id:3, path: '/othermarket', name:'Other Market', icons: <i className="fa-solid fa-chart-line"></i>},
    {id:4, path: '/portfolio', name:'Portfolio', icons: <i className="fa-solid fa-cube"></i>},
    {id:5, path: '/wallet', name:'Wallet', icons: <i className="fa-solid fa-wallet"></i>},
    {id:6, path: '/settings', name:'Settings', icons: <i className="fa-solid fa-gear"></i>},
    {id:7, path: '/latest', name:'Project Market'},
    {id:8, path: '/trending', name:'Project Market'},
  ]

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);

    if (currentPath.includes('latest')){
      setCurrentProject('Latest')
    }else if (currentPath.includes('trending')) {
      setCurrentProject('Trending');
    } else {
      setCurrentProject('');
    }
  },
   [location.pathname]);


  const currentPage = SIDEBAR_LINKS[activeLink] ? SIDEBAR_LINKS[activeLink].name : '';

  return (
    <div className='md:flex'>
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} SIDEBAR_LINKS={SIDEBAR_LINKS}/>
      <div className='main w-full mt-8  md:pl-8 md:mt-3 md:pr-8 ml-0 md:ml-56 '>
        <Header pageTitle={currentPage} currentProject={currentProject}/>
        <Projectmarket pageTitle={currentPage}/>
        <Outlet />
      </div>
    </div>
  )
}

export default layout
