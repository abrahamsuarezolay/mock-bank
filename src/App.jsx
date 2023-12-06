// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import LoginForm from './components/Login/LoginForm/LoginForm';
import Home from './components/Home/Home';
import Register from './components/Login/RegisterForm/Register';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseRoutes from './routes/BaseRoutes';
import { DataProvider } from './contexts/DataContext';

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
