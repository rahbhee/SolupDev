import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState} from 'react'
import Layout from './components/layout';
import Dashboard from './components/Dashboard'
import Members from './pages/Members';
import Projectmarket from './components/projectMarket';
import Othermarket from './components/Othermarket';
import Portfolio from './components/Portfolio';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  
  const toggleMobile = () => {
    setToggle(!toggle)
  }
  return (
   <BrowserRouter>
   <Routes>
    < Route path='/' element={<Layout toggle={toggle} toggleMobile={toggleMobile}/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='members' element={<Members/>}/>
    <Route path='projectmarket' element={<Projectmarket/>}/>
    <Route path='Othermarket' element={<Othermarket/>}/>
    <Route path='Portfolio' element={<Portfolio/>}/>
    <Route path='Wallet' element={<Wallet/>}/>
    <Route path='Settings' element={<Settings/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
