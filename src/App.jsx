import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IntroPage from './pages/IntroPage';
import OutputPage from './pages/OutputPage';
import SummaryPage from './pages/SummaryPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/output" element={<OutputPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

