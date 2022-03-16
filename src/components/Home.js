
import '../asset/css/Home.css'
import logo_BVSC from '../asset/image/logo_BVSC.png' 
import React, {useState} from 'react';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // const {username} = this.props.match.params;
return (
  <React.Fragment>
  <header className="header">
    <a className="" href="/">
    <img src={logo_BVSC} className="logo-header" alt=""/>
    </a>
  </header>
  {/* <h3>Hello {username}</h3> */}
  <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="container">
      <span style={{ color: darkMode ? "grey" : "red" }}>Light</span>
      <div className="switch-checkbox">
          <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"> </span>
        </label>
      </div>
      <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>Dark</span>
    </div>
  </div>
  </React.Fragment>
);
}
export default Home;
