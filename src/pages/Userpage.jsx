import React, { useState } from 'react';
import SidebarUser from '../components/Sidebar';


function Userpage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div>
        <button onClick={toggleSidebar}>&#9776;</button>
        
      </div>
      {isSidebarOpen && <SidebarUser />}
    </div>
  );
}

export default Userpage;
