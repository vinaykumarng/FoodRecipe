import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <Outlet />
      <Footer />
    </>
  );
}
