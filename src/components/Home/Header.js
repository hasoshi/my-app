import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.scss';
import logo_BVSC from '../../assets/image/logo_BVSC.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logouts, SwitchTheme, SwitchLang, GetUser } from '../../redux/actions/action';
import uk from '../../assets/image/uk.jpg'
import vietnam from '../../assets/image/vietnam.jpg'
import { useTranslation } from 'react-i18next';

function Header() {
  const currDate = new Date();
  const date = currDate.toLocaleDateString();
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  //check theme mode
  const themeMode = useSelector((state) => state.Theme.themeMode)
  const [checkTheme, setCheckTheme] = useState(themeMode)

  const changeHandlerTheme = (e) => {
    setCheckTheme(e.target.value);
    dispatch(SwitchTheme(
      e.target.value
    ))
  };

  //check language mode
  const { t, i18n } = useTranslation();

  const langMode = useSelector((state) => state.Lang.langis)
  const [checkLang, setCheckLang] = useState(langMode)

  const changeHandlerLang = (e) => {
    if(checkLang === 'vi') {
      i18n.changeLanguage('en');
      setCheckLang(e.target.value);
      dispatch(SwitchLang(
        e.target.value
      )) 
    } else if(checkLang === 'en') {
      i18n.changeLanguage('vi');
      setCheckLang(e.target.value);
      dispatch(SwitchLang(
        e.target.value
      ))
    }
  };

  const dispatch = useDispatch();

  const userLogout = {username: '', fullname: ''};
  const Logout = () => {
    dispatch(logouts(false));
    dispatch(GetUser(userLogout));
  }

  const Fullname = useSelector((state) => state.Login.fullname);

  return(
    <div className={checkTheme === 'dark' ? "header-dark-mode" : "header-light-mode"}>
      <div className="navbar">
        <img className='logo-home' src={logo_BVSC} alt="#"/>
        <div className="date-time">
        <FiClock className="clock" size="1.5em"/>
          <span>&nbsp;</span>
          <span>{date}</span>
          <span>&nbsp;</span>
          <span>{time}</span>
        </div>
        <div className="marquee">
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
        </div>
        <div className="buttons2">
          <button type="button" className="bt" onClick={Logout}>
            <i class="fas fa-sign-out-alt"></i>{t("home.logout")}
          </button>
        </div>
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <BsFillPersonFill size="1.5em" color="#ffff" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <span className='fname'>{Fullname}</span>
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
                        name='radio_lang'
                        value='vi'
                        onChange={changeHandlerLang}
                      />
                      <img src={vietnam} className="vietnam2" alt=""/>
                    </div>
                    <div className="col">
                      <input type='radio'
                        name='radio_lang'
                        value='en'
                        onChange={changeHandlerLang}
                      />
                      <img src={uk} className="uk2" alt=""/>
                    </div>  
                  </div>
                </div>   
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='menu'>
        <ul className='primary'>
          <li className='search-box'>
            <input type='text' placeholder={t("menu.search")} className='input-search' />
            <button type='submit' className='button-search'><i class="fas fa-plus"></i></button>
          </li>
          <li className='menu-list item'>
            <a className='follow-list'>{t("menu.fs")} <i class="fas fa-caret-down"></i></a>
          </li>
            <li className='menu-list item'>
                <a className='follow-list'>HOSE <i class="fas fa-caret-down"></i></a>
                <ul className='sub-menu-item'>
                    <li className='sub-menu-list'>
                        <a><span>HOSE</span></a>
                    </li>
                    <li className='sub-menu-list'>
                        <a><span>VN30</span></a>
                    </li>
                    <li className='sub-menu-list'>
                        <a><span>{t("menu.putthrough")}</span></a>
                    </li>
                </ul>
            </li>
            <li className='menu-list item '>
                <a className='follow-list'>HNX<i class="fas fa-caret-down"></i></a>
                <ul className='sub-menu-item'>
                    <li className='sub-menu-list'>
                        <a ><span>HNX</span></a>
                    </li>
                    <li className='sub-menu-list'>
                        <a><span>HNX30</span></a>
                    </li>
                    <li className='sub-menu-list'>
                        <a><span>{t("menu.putthrough")}</span></a>
                    </li>
                </ul>
            </li>
            <li className='menu-list item'>
                <a className='follow-list'>UPCOM <i class="fas fa-caret-down"></i></a>
                <ul className='sub-menu-item'>
                    <li className='sub-menu-list'>
                        <a ><span>UPCOM</span></a>
                    </li>
                    <li className='sub-menu-list'>
                        <a><span>{t("menu.putthrough")}</span></a>
                    </li>
                </ul>
            </li>
            <li className='menu-list item'>
                <a className='follow-list'>{t("menu.ss")}<i class="fas fa-star"></i><i class="fas fa-caret-down"></i></a>
            </li>
            <li className='menu-list'>
                <a className='follow-list'>{t("menu.derivatives")}<i class="fas fa-caret-down"></i></a>
            </li>
            <li className='menu-list'>
                <a className='follow-list'>{t("menu.warrant")}</a>
            </li>
            <li className='menu-list'>
                <a className='follow-list'>{t("menu.bonds")}</a>
            </li>
            <li className='menu-list'>
                <a className='follow-list'>{t("menu.oddlot")}<i class="fas fa-caret-down"></i></a>
            </li>
        </ul>
      </div>
    </div>
  )
}
export default Header;