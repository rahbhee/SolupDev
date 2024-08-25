import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/solup.png'
import upgrade from '/gopro.png'

const Mobilesidebar = () => {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    const toggleMobile = () => {
      setToggle(!toggle)
    }
    const handleMouseEnter = () => {
      console.log('Hover event triggered');
    };
    const SIDEBAR_LINKS = [
      {id:1, path: '/', name:'Dashboard', icons: <i className="fa-solid fa-house"></i>},
      {id:2, path: '/projectmarket', name:'Project Market', icons: <i className="fa-solid fa-folder"></i>},
      {id:3, path: '/othermarket', name:'Other Market', icons: <i className="fa-solid fa-chart-line"></i>},
      {id:4, path: '/portfolio', name:'Portfolio', icons: <i className="fa-solid fa-cube"></i>},
      {id:5, path: '/wallet', name:'Wallet', icons: <i className="fa-solid fa-wallet"></i>},
      {id:6, path: '/settings', name:'Settings', icons: <i className="fa-solid fa-gear"></i>},
    ]
    useEffect(() => {
      const currentPath = location.pathname;
      const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
      setActiveLink(activeIndex !== -1 ? activeIndex : 0);
    }, [location.pathname]);
  return (
    <div>
      {toggle ?  <div className={`mobilesidebar w-50 fixed main left-0 top-0 h-screen border-r pt-8 px-4 bg-white border-none`}>
      <div className='mb-8 flex'>
        <img src={logo} alt="LOGO" className='w-28 sidebar-logo ml-2 md:flex'/>
        <i onClick={toggleMobile} onMouseEnter={handleMouseEnter} class="cancel-sidebar fa-solid text-purple-600 text-xl ml-20 fa-xmark"></i>
      </div>
      <ul className='mt-6 md:ml-0 space-y-6'>
        {
          SIDEBAR_LINKS.map((link, index) => (
            <li key={link.id} onClick={() => setActiveLink(activeIndexindex)} className='sidebar-item text-gray-500  font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-6 hover'>
              <Link className='flex items-center justify-start' to={link.path}>
              <span className={`icon ${activeLink === index ? 'text-purple-600 border--2 border-purple-600' : ''}`}>{link.icons}</span>
              <span className={`ml-4 text ${activeLink === index ? 'text-black' : ''}`}>{link.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>

      <div className='align-center flex justify-center pt-20 text-xs'>
      <img className='w-30' src={upgrade} alt="" />
      </div>
    </div> : <i onClick={toggleMobile} class="text-gray-500  text-2xl fa-solid fa-bars"></i>}
    </div>
  )
}

export default Mobilesidebar;