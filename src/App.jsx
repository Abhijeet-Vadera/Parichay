import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CreateBiodata from './pages/CreateBiodata';
import Templates from './pages/Templates';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateBiodata />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </div>
    </Router>
  );
}