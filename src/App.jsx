import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/login"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
