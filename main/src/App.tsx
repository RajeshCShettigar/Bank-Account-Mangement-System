import React from 'react';
import './App.css';
import Login from './components/home/login';
import NetBanking from './components/netbanking/netbanking';
import DashBoard from './components/customerboard/dashboard';
import Admin from './components/admin/admin';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/netbanking" element={<NetBanking />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
