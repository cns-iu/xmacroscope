import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';

//
// Serve the app from a subdirectory in production if needed.
//
const basename = process.env.NODE_ENV === 'development' ? '/' : '/';

const App = () => (
  <BrowserRouter basename={basename}>
    <div className="base-container">
      <AppRoutes />
    </div>
  </BrowserRouter>
);

export default App;
