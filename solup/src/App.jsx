import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState} from 'react'
{/*import Layout from './components/layout';
import Dashboard from './components/Dashboard'
import Latest from './pages/LatestProject';
import TrendingProject from './pages/TrendingProject';
import Projectmarket from './components/projectMarket';
import Othermarket from './components/Othermarket';
import Portfolio from './components/Portfolio';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import LatestProject from './pages/LatestProject';*/}

import Signup from './Signup/Signup'
import './App.css';


function App() {
  {/*const [toggle, setToggle] = useState(false);
  
  const toggleMobile = () => {
    setToggle(!toggle)
  }*/}
  
  return (
    <>
    <Signup/>
    </>
   /*<BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout toggle={toggle} toggleMobile={toggleMobile}/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='latest' element={<LatestProject/>}/>
    <Route path='trending' element={<TrendingProject/>}/>
    <Route path='projectmarket' element={<Projectmarket/>}/>
    <Route path='Othermarket' element={<Othermarket/>}/>
    <Route path='Portfolio' element={<Portfolio/>}/>
    <Route path='Wallet' element={<Wallet/>}/>
    <Route path='Settings' element={<Settings/>}/>
    </Route>
   </Routes>*/
   
  )
}

export default App;
