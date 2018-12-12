import React from 'react';
import ReactGA from 'react-ga';
import './App.css';
import AppRoutes from './AppRoutes';

// Initialize Google Analytics for the website
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
