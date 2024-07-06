import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure correct import for BrowserRouter
import Home from './routes/home'; // Adjusted path to your Home component
import Page2 from './routes/page2'; // Adjusted path to your Page2 component
import ErrorPage from './routes/ErrorPage';
import DynamicRoute from './routes/DynamicRoute';
import Layout from './layout/layout';

function App() {
  return (
    <div className="App">
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/user/:id" element={<DynamicRoute />} />
        <Route path="*" element={<ErrorPage />} /> {/* Fallback route for 404 errors */}
      </Routes>
      </Layout>
    </Router>
  </div>
  );
}

export default App;