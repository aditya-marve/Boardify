import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
