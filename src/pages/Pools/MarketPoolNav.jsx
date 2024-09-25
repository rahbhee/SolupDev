import { Link, useLocation } from 'react-router-dom';

const MarketPoolNav = () => {
    const location = useLocation(); // useLocation to track the active route



    return (
        


      <div className='pools relative w-full top-8'>
        {/*Market pools title*/}
        <div className="relative m-0 mb-[30px] top-0  border-b-4 border-purple-600 w-fit text-left">
            <p className="text-lg sm:text-md md:text-2md font-semibold text-black">
                Market Pools
            </p>
            </div>
       {/*Market pools title ends here*/}
          <div className='flex w-full mb-2 text-xs text-gray-500 justify-between items-center'>
            <Link to='/allpools'>
              <h4 className={`${location.pathname === '/allpools' ? 'border-b-2 mt-4 pro' : ''}`}>
                All Pools
              </h4>
            </Link>
            <Link to='/projectpools'>
              <h4 className={`${location.pathname === '/projectpools' ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
                Project Pools
              </h4>
            </Link>
            <Link to='/betpools'>
              <h4 className={`${location.pathname === '/betpools' ? 'border-b-2 mt-4 pro' : ''}`}>
                Bet Pools
              </h4>
            </Link>
           
            
          </div>
        </div>

  
    );
}

export default MarketPoolNav