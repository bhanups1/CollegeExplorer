// File: src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopColleges from './pages/TopColleges';
import TopAcademics from './pages/TopAcademics';
import TopPlacements from './pages/TopPlacements';
import CategoryPage from './pages/CategoryPage'; // 👈 IMPORT this
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen ">
      <ScrollToTop />
        <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-colleges" element={<TopColleges />} />
          <Route path="/top-academics" element={<TopAcademics />} />
          <Route path="/top-placements" element={<TopPlacements />} />
          <Route path="/colleges/:category" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
