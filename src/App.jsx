import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Home'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/Login" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
      
  );
}

export default App
