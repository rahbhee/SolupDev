import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioNav from './PortfolioNav'


  
  const Portfolio = () => {
    const navigate = useNavigate();

    useEffect(() => {
      // Automatically navigate to PortfolioAll when Portfolio is clicked
      navigate('/portfolioall');
    }, [navigate]);
    
  return (
    <div>
      <PortfolioNav/>
    </div>
  )
}

export default Portfolio;
