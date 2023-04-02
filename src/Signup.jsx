import React from 'react'
import profile from "./profile.jpg"
import email from"./email.jpg"
import pass from "./pass.png"
const Signup = () => {
  return (
    <div className="signup-main">
        <div className='sub-main'>
            <div>
                <div className="imgs">
                    <div className="container-image">
                        <img className="profile" src={profile}/> 
                    </div>
                </div>
                <div>
                    <h1>Signin Page</h1>
                </div>
                <div>
                    <img className='email' src={email}/>
                    <input type="text" placeholder='user-Email' className="name"/>
                </div>

                <div className='second-input'>
                    <img className="email" src={pass}/>
                    <input type="password" placeholder='password' className="name"/>
                </div>
                <div className='login-btn'>
                <button>Login</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
