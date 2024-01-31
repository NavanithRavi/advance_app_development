import React, { useState } from 'react';




const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      {/* <button onClick={toggleSidebar}></button> */}
      <ul>
      <li><a href="/" >Home</a></li>
      <li><a href="/Profile" >Profile</a></li>
      <li><a href="/Login" >Login</a></li>
      <li><a href="/Login" >Login</a></li>
      
        </ul>
       
    </aside>
  );
};

export default Sidebar;