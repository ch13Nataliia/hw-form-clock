import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Clock from './Clock';
function Layout() {
  return (
    <>
      <header className="page-header">
        <h1>Cats Protaction</h1>
        <Navigation />
        <Clock />
      </header>
      <main>
      
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
