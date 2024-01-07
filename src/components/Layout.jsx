import React from 'react';
import Navbar from './MyNavbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
