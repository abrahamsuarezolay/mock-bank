// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './providers/AuthContext';
import { DataProvider } from './providers/DataContext';
import BaseRoutes from './routes/BaseRoutes';

function App() {
  return (
    <div className='app'>
      <div className="background-container">
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <BaseRoutes />
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
