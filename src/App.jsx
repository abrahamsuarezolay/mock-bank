import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
