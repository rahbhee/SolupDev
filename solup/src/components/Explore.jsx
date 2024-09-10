import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Explore = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the /latest route when the component mounts
    navigate('/latest');
  }, [navigate]);

  return (
    <div>
      Explore
    </div>
  );
};

export default Explore;