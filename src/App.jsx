import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Home from './Home'
import Signup from './Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar/>
      <Hero/>

      
   </div>
      
  );
}

export default App
