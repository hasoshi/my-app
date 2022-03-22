import React, {useState} from 'react';
import '../Home/Home.scss'
import logo_BVSC from '../../assets/image/logo_BVSC.png' 
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Dropdown} from 'react-bootstrap';
function Home() {

  const currDate = new Date();
  const date = currDate.toLocaleDateString();
  const time = currDate.toLocaleTimeString( );
  
  const [checkTheme, setCheckTheme] = useState('dark')
  const changeHandlerTheme = (e) => {
    setCheckTheme(e.target.value);
  };

  const [checkLang, setCheckLang] = useState('viet')
  const changeHandlerLang = (e) => {
    setCheckLang(e.target.value);
  };

  return (
    <>
      <div className={checkTheme === 'dark' ? "dark-mode" : "light-mode"}>
        <header>
          <nav className="navbar navbar-expand-sm" id='nav'>
            <ul className="navbar-nav">
                <img className='logo-home' src={logo_BVSC} alt="#"/>
                <div className="date-time">
                  <span>&nbsp;</span>
                  <span>{date}</span>
                  <span>&nbsp;</span>
                  <span>{time}</span>
                </div>
                <marquee className="moving-header">
                  <p className="marquee-header">
                    <span className="marquee-item">KL thoả thuận: </span>
                    <span className="marquee-item">1.984.252 tỷ</span>
                    <span className="marquee-item">KLGD lô lẻ: </span>
                    <span className="marquee-item">16.702</span>
                    <span className="marquee-item">GTGD: </span>
                    <span className="marquee-item">12.558.999 tỷ</span>
                    <span className="marquee-item">GT thoả thuận: </span>
                    <span className="marquee-item">1.235.468 tỷ</span>
                    <span className="marquee-item">KLGD: </span>
                    <span className="marquee-item">61.192.002 tỷ</span>
                    <span className="marquee-item">KL thoả thuận: </span>
                    <span className="marquee-item">1.984.252 tỷ</span>
                    <span className="marquee-item">KLGD lô lẻ: </span>
                    <span className="marquee-item">16.702</span>
                    <span className="marquee-item">GTGD: </span>
                    <span className="marquee-item">12.558.999 tỷ</span>
                    <span className="marquee-item">GT thoả thuận: </span>
                    <span className="marquee-item">1.235.468 tỷ</span>
                    <span className="marquee-item">KLGD: </span>
                    <span className="marquee-item">61.192.002 tỷ</span>
                  </p>
                </marquee>
              <div className="nav-user">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <BsFillPersonLinesFill size="2em" color="#ffff" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className='setting-box'>
                      <div className='setting-box-theme'>
                        <div className='setting-option'>
                          <input type='radio'
                            name='radio_theme'
                            value='light'
                            className='input-item'
                            checkTheme={checkTheme === 'light'}
                            onChange={changeHandlerTheme}
                          />
                          <span className="span-item">Sáng</span>
                        </div>
                        <div className='setting-option'>
                          <input type='radio'
                            name='radio_theme'
                            value='dark'
                            className='input-item'
                            checkTheme={checkTheme === 'dark'}
                            onChange={changeHandlerTheme}
                          />
                          <span className="span-item">Tối</span>
                        </div>
                      </div>
                      <div className='setting-box-lang'>
                        <div className='setting-option'>
                          <input type='radio'
                            name='radio_theme'
                            className='input-item'
                            value='usk'
                            checkLang={checkLang === 'usk'}
                            onChange={changeHandlerLang}
                          />
                          <span className="span-item">Tiếng anh</span>
                        </div>
                        <div className='setting-option'>
                          <input type='radio'
                            name='radio_theme'
                            value='viet'
                            className='input-item'
                            checkLang={checkLang === 'viet'}
                            onChange={changeHandlerLang}
                          />
                          <span className="span-item">Tiếng việt</span>
                        </div>
                      </div>
                    </div>    
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Home;
