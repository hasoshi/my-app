import React from "react";
import '../asset/css/Home.css'
import logo_BVSC from '../asset/image/logo_BVSC.png' 

// class Home extends React.Component {
//   render() {
  function Home() {
    const {username} = this.props.match.params;
    return (
      <div>
        <header className="header">
          <a className="" href="/">
          <img src={logo_BVSC} className="logo-header" alt=""/>
          </a>
        </header>
        <h3>Hello {username}</h3>
      </div>
    );
  }

export default Home;