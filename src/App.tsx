import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransportPage from './pages/TransportPage';
import ExperiencesPage from './pages/ExperiencesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transport" element={<TransportPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
    </Routes>
  );
}

export default App;