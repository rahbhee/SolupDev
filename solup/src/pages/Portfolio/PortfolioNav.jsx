import { Link, useLocation } from 'react-router-dom';

const PortfolioNav = () => {
  const location = useLocation();

  return (
    <div className='project'>
        <div className='flex w-8/12 text-xs text-gray-500 justify-between items-center'>
          <Link to='/portfolioall'>
            <h4 className={`${location.pathname === '/portfolioall' ? 'border-b-2 mt-4 pro' : ''}`}>
              All
            </h4>
          </Link>
          <Link to='/portfolioprojects'>
            <h4 className={`${location.pathname === '/portfolioprojects' ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
              Projects
            </h4>
          </Link>
          <Link to='/portfoliobets'>
            <h4 className={`${location.pathname === '/portfoliobets' ? 'border-b-2 mt-4 pro' : ''}`}>
              Bets
            </h4>
          </Link>
          <Link to='/portfoliopools'>
            <h4 className={`${location.pathname === '/portfoliopools' ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
              Pools
            </h4>
          </Link>
          <Link to='/portfolioloans'>
            <h4 className={`${location.pathname === '/portfolioloans' ? 'border-b-2 mt-4 pro' : ''}`}>
              Loans
            </h4>
          </Link>
          
        </div>
      </div>
  );
};

export default PortfolioNav;
