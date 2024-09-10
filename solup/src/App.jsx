import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Explore from './components/Explore';
import LatestProject from './pages/LatestProject';
import TrendingProject from './pages/TrendingProject';
import Projectmarket from './components/Projectmarket';
import Othermarket from './components/Othermarket';
import Pools from './components/Pools';
import SolUpBet from './components/SolUpBet';
import Portfolio from './components/Portfolio';
import Modal from './components/Modal'; // Import Modal component
import './App.css';
import signuphero from '/ccc.jpg'
import group91 from '/group91.png'

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
    // Check if the user has visited the site before
    const hasVisitedBefore = localStorage.getItem('hasVisited');

    if (!hasVisitedBefore) {
      // If not, open the modal
      setIsModalOpen(true);
      // Set flag in localStorage to indicate the user has visited
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

 

  return (
    <>
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
            <Route path='portfolio' element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Modal shown on first visit */}

      
      <Modal isOpen={isModalOpen}  onClose={handleCloseModal} >
        <div className='flex flex-col items-center px-10 pb-4 text-center justify-center modal'>
            <div className='flex bg-white items-center'>
            <img className='w-5/12 ml-12 h-3/7' src={group91} alt="" />
            <img className='w-5/12 h-3/7' src={signuphero} alt="" />
            </div> 
            <h1 className='font-semibold md:text-3xl  text-gray-700'>Welcome to SolUp</h1>
            <div className='form-title mb-1 w-2/6'></div>
            <p className='mt-2'>Welcome to Solup, the world's first decentralized market driven by the latest trends and aesthetics. At SolUp, we believe that trading should be simple, seamless and accessible to everyone - whether you're a Web3 enthusiast or just discovering the world of decentralized platforms for the first time.</p>
            <button onClick={handleCloseModal} className='align-center flex justify-center py-3 px-16 mt-4 md:mt-6 rounded-lg bg-purple-600 text-white text-xs'>
             Continue
            </button>      
        </div>
      </Modal>
    </>
  );
}

export default App;
