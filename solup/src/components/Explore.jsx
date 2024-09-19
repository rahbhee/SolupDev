import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  useEffect(() => {
  
    navigate('/latest');
  }, [navigate]);

  return (
    <div>
     
      Loading...
    </div>
  );
};

export default Explore;
