import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Explore from './components/Explore';
import LatestProject from './components/LatestProject';
import TrendingProject from './components/TrendingProject';
import Projectmarket from './pages/Projectmarket';
import Othermarket from './pages/Othermarket';
import Pools from './components/Pools';
import SolUpBet from './components/SolUpBet';
import PortfolioAll from './pages/Portfolio/PortfolioAll';
import PortfolioBet from './pages/Portfolio/PortfolioBets';
import PortfolioProjects from './pages/Portfolio/PortfolioProjects';
import PortfolioPools from './pages/Portfolio/PortfolioPools';
import PortfolioLoans from './pages/Portfolio/PortfolioLoans';
import Poolsall from './pages/Pools/Poolsall';
import Poolsbet from './pages/Pools/Poolsbet';
import Poolsproject from './pages/Pools/Poolsproject';
import Modal from './components/Modal';
import './App.css';
import SolUpAllBets from './pages/SolUp/SolUpAllBets';
import SolUpNewBets from './pages/SolUp/SolupNewbets';
import SolUpTrendingBets from './pages/SolUp/SolUpTrendingBets';
import SolupPlaceBet from './pages/SolUp/SolupPlaceBet';

function App() {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobile = () => {
    setToggle(!toggle);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisited');

    if (!hasVisitedBefore) {
      setIsModalOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout toggle={toggle} toggleMobile={toggleMobile} />}>
          <Route index element={<Explore />} />
          <Route path='latest' element={<LatestProject />} />
          <Route path='trending' element={<TrendingProject />} />
          <Route path='explore' element={<Explore />} />
          <Route path='projectmarket' element={<Projectmarket />} />
          <Route path='othermarket' element={<Othermarket />} />
          <Route path='pools' element={<Pools />} />
          <Route path='solupbet' element={<SolUpBet />} />

          <Route path='portfolio' element={<Navigate to="/portfolioall" />} />
          <Route path='portfolioall' element={<PortfolioAll />} />
          <Route path='portfolioprojects' element={<PortfolioProjects />} />
          <Route path='portfoliobets' element={<PortfolioBet />} />
          <Route path='portfoliopools' element={<PortfolioPools />} />
          <Route path='portfolioloans' element={<PortfolioLoans />} />

          <Route path='pools' element={<Navigate to="/pools" />} />
          <Route path='allpools' element={<Poolsall />} />
          <Route path='projectpools' element={<Poolsproject />} />
          <Route path='betpools' element={<Poolsbet/>} />

          <Route path='solupbet' element={<Navigate to="/solupallbet" />} />
          <Route path='solupallbet' element={<SolUpAllBets/>}/>
          <Route path='soluptrendingbets' element={<SolUpTrendingBets/>}/>
          <Route path='solupnewbets' element={<SolUpNewBets/>}/>
          <Route path="/placebet/:betId" element={<SolupPlaceBet />} />
        </Route>
      </Routes>

    
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col items-center px-10 pb-4 text-center justify-center modal'>
          <div className='flex bg-white items-center'>
            <img className='w-5/12 ml-12 h-3/7' src='/group91.png' alt="" />
            <img className='w-5/12 h-3/7' src='/ccc.jpg' alt="" />
          </div>
          <h1 className='font-semibold md:text-3xl  text-gray-700'>Welcome to SolUp</h1>
          <p className='mt-2'>Welcome to Solup, the world's first decentralized market driven by the latest trends and aesthetics...</p>
          <button onClick={handleCloseModal} className='align-center flex justify-center py-3 px-16 mt-4 md:mt-6 rounded-lg bg-purple-600 text-white text-xs'>
            Continue
          </button>
        </div>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
