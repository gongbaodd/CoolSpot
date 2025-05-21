import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransportPage from './pages/TransportPage';
import ExperiencesPage from './pages/ExperiencesPage';
import HostSelfAssessmentPage from './pages/HostSelfAssessmentPage';
import HostOnboardingPage from './pages/HostOnboardingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transport" element={<TransportPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
      <Route path="/host/assessment" element={<HostSelfAssessmentPage />} />
      <Route path="/host/onboarding" element={<HostOnboardingPage />} />
    </Routes>
  );
}

export default App;