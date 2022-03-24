import React, {useState} from 'react';
import '../Home/Home.scss'
import logo_BVSC from '../../assets/image/logo_BVSC.png' 
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logouts, SwitchTheme, SwitchLang, GetUser } from '../../redux/actions/action';
import uk from '../../assets/image/uk.jpg'
import vietnam from '../../assets/image/vietnam.jpg'
import { useTranslation } from 'react-i18next';

function Home() {

  const currDate = new Date();
  const date = currDate.toLocaleDateString();
  const time = currDate.toLocaleTimeString( );
  
  const themeMode = useSelector((state) => state.Theme.themeMode)
  const [checkTheme, setCheckTheme] = useState(themeMode)
  const changeHandlerTheme = (e) => {
    setCheckTheme(e.target.value);
    dispatch(SwitchTheme(
      e.target.value
    ))
  };

  const { t, i18n } = useTranslation();
  const langMode = useSelector((state) => state.Lang.langis)
  const [checkLang, setCheckLang] = useState(langMode)
  const changeHandlerLang = (e) => {
    if(checkLang === "en") {
      i18n.changeLanguage("en");
      setCheckLang(e.target.value);
      dispatch(SwitchLang(
        e.target.value
    ))
    }else if(checkLang === "vi") {
      i18n.changeLanguage("vi");
      setCheckLang(e.target.value);
      dispatch(SwitchLang(
        e.target.value
    ))
    }
  };



  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logouts(false))
    dispatch(GetUser(''))
  }

  const User = useSelector((state) => state.Login.username)
  
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
                    <span className="marquee-item">{t("home.1")}</span>
                    <span className="marquee-item">{t("home.2")}</span>
                    <span className="marquee-item">{t("home.3")} </span>
                    <span className="marquee-item">16.702</span>
                    <span className="marquee-item">{t("home.9")}</span>
                    <span className="marquee-item">{t("home.4")}</span>
                    <span className="marquee-item">{t("home.5")}</span>
                    <span className="marquee-item">{t("home.6")}</span>
                    <span className="marquee-item">{t("home.7")}</span>
                    <span className="marquee-item">{t("home.8")}</span>
                    <span className="marquee-item">{t("home.1")}</span>
                    <span className="marquee-item">{t("home.2")}</span>
                    <span className="marquee-item">{t("home.3")}</span>
                    <span className="marquee-item">16.702</span>
                    <span className="marquee-item">{t("home.9")}</span>
                    <span className="marquee-item">{t("home.4")}</span>
                    <span className="marquee-item">{t("home.5")} </span>
                    <span className="marquee-item">{t("home.6")}</span>
                    <span className="marquee-item">{t("home.7")}</span>
                    <span className="marquee-item">{t("home.8")}</span>
                  </p>
                </marquee>
              <div className="buttons2">
                <button type="button" onClick={handleLogout}>{t("home.logout")}</button>
              </div>
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <BsFillPersonLinesFill size="1.5em" color="#ffff" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <span className='fname'>{User}</span>
                      <div className='setting-box-theme'>
                        <span id='lang'>{t("home.theme")}</span>
                        <div className="row">
                          <div className="col">
                          <input type='radio'
                            name='radio_theme'
                            value='light'
                            checkTheme={checkTheme === 'light'}
                            onChange={changeHandlerTheme}
                          />
                            <span className="span-item">{t("home.light")}</span>
                          </div>
                          <div className="col">
                          <input type='radio'
                            name='radio_theme'
                            value='dark'
                            checkTheme={checkTheme === 'dark'}
                            onChange={changeHandlerTheme}
                          />
                          <span className="span-item">{t("home.dark")}</span>
                          </div>
                        </div>
                      </div>
                      <div className='setting-box-lang'>
                        <span id='lang'>{t("home.lang")}</span>
                        <div className="row">
                          <div className="col">
                            <input type='radio'
                              name='radio_theme'
                              value='vi'
                              // checkLang={checkLang === 'vi'}
                              onChange={changeHandlerLang}
                            />
                            <img src={uk} className="uk2" alt=""/>
                            
                          </div>
                          <div className="col">
                            <input type='radio'
                              name='radio_theme'
                              value='en'
                              // checkLang={checkLang === 'en'}
                              onChange={changeHandlerLang}
                            />
                            <img src={vietnam} className="vietnam2" alt=""/>
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
