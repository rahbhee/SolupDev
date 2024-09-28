import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Pools = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //Navigate to All Pools when component loads
        navigate('/allpools');
    }, [navigate]);

  return (
    <div>
       
    
    
    </div>

  )
}

export default Pools