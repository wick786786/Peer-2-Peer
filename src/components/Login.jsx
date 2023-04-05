import React,{useState} from 'react'
import './login.css'

const Login = () => {
    const [activeTab, setActiveTab] = useState('#signup');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabClick = (e) => {
    e.preventDefault();
    setActiveTab(e.target.getAttribute('href'));
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  }
  return (
    
    <div className="form">
       
    <ul className="tab-group">
      <li className={`tab ${activeTab === '#signup' ? 'active' : ''}`}>
        <a href="#signup" onClick={handleTabClick}>Sign Up</a>
      </li>
      <li className={`tab ${activeTab === '#login' ? 'active' : ''}`}>
        <a href="#login" onClick={handleTabClick}>Log In</a>
      </li>
    </ul>

    <div className="tab-content">
      <div id="signup" style={{ display: activeTab === '#signup' ? 'block' : 'none' }}>
        <h1>Sign Up </h1>

        <form onSubmit={handleSubmit}>
          <div className="top-row">
            <div className="field-wrap">
              <label>
                First Name<span className="req">*</span>
              </label>
              <input type="text" required autoComplete="off" value={firstName} onChange={handleFirstNameChange} />
            </div>

            <div className="field-wrap">
              <label>
                Last Name<span className="req">*</span>
              </label>
              <input type="text" required autoComplete="off" value={lastName} onChange={handleLastNameChange} />
            </div>
          </div>

          <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email" required autoComplete="off" value={email} onChange={handleEmailChange} />
          </div>

          <div className="field-wrap">
            <label>
              Set A Password<span className="req">*</span>
            </label>
            <input type="password" required autoComplete="off" value={password} onChange={handlePasswordChange} />
          </div>

          <button type="submit" className="button button-block">Get Started</button>

        </form>
      </div>

      <div id="login" style={{ display: activeTab === '#login' ? 'block' : 'none' }}>
        <h1>Welcome Back!</h1>

        <form onSubmit={handleSubmit}>
          <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <input type="email" required autoComplete="off" />
          </div>

          <div className="field-wrap">
            <label>
              Password<span className="req">*</span>
           
              </label>
            <input type="password" required autoComplete="off" />
          </div>

      <p className="forgot">
        <a href="#">Forgot Password?</a>
      </p>

      <button type="submit" className="button button-block">
        Log In
      </button>
    </form>
  </div>
</div>
</div>
  )
}

export default Login;






