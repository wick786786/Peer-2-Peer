import React from 'react'
import "./App.css"
import codeimg from "./codeimg.gif"
import codecoding from "./code-coding.gif"
import vscode from "./vscode.gif"
const Hero = () => {
  return (
    <div className="wrapper">
    <div className="hero">
        
       <div className="text">
         <span>C</span>
         <span>o</span>
         <span>d</span>
         <span>e.</span>              
       </div>
       
       <div className='text'>
          <span>R</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w.</span>
       </div>
       <div className='text'>
          <span>D</span>
          <span>e</span>
          <span>p</span>
          <span>l</span>
          <span>o</span>
          <span>y.</span>
       </div>
    </div>
    
    <div className="codeimg">
        <img src={codeimg}/>
        
    </div>
    </div>
   
  )
}

export default Hero
