import { useState } from 'react'
import Login from "./components/login"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login />
        </div>
    </>
  )
}

export default App
