import React from 'react';
import '..//assets/css/Navbar.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleButtonClick = () => {
    // Navigate to a new route on button click
    navigate('/Login'); // Replace '/your-new-route' with the actual route
  };

  return (
    <div>

    <nav>
    
       <a href="/" >Home</a>
       <a href="/About" >About</a>
       {/* <a href="/Login" >Login</a> */}
       {/* <a href="/AdminPage">AdminPage</a>
       <a href="/Userpage">Userpage</a> */}
       <a href="/Contactpage">Contact</a>
       
   <div className='icon'><Button
            variant="text"
            startIcon={<AccountCircleIcon  style={{ fontSize: 32,color: 'white' }} />}
            onClick={handleButtonClick}>

  
  </Button>
   </div>    
        
    
    </nav>
    </div>
  );
};

export default Navbar;