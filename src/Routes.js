// routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Cambia 'Router' a 'BrowserRouter'
import Home from './Home';
import Dashboard from './Dashboard';
import Data from './Data';

const MyRoutes = () => {
  return (
    <BrowserRouter> {/* Cambia 'Router' a 'BrowserRouter' */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />


      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
