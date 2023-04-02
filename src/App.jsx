import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Home'
import Home from './components/Home'
import Signup from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     
     <Home/> 
      
   </div>
      
  );
}

export default App
