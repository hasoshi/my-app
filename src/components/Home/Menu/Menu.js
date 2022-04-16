import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Menu/Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { MenuTable, NameTable, TurnSlide } from '../../../redux/actions/action';
import { useTranslation } from 'react-i18next';

function Menu() {
  const themeMode = useSelector((state) => state.Theme.themeMode)
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const Menu_table = useSelector((state) => state.Table.table);
  const [table, setTable] = useState(Menu_table);
  const TableHoseVn30 = useSelector((state) => state.Table.menu_table);
  const [tableName, settabName] = useState(TableHoseVn30);

  const setTabHose = () => {
    setTable('HOSE');
    dispatch(MenuTable('HOSE'));
    settabName('HOSE');
    dispatch(NameTable('HOSE'))
  }
  const setTabVN30 = () => {
    setTable('VN30')
    dispatch(MenuTable('VN30'))
    settabName('VN30')
    dispatch(NameTable('VN30'))
  }
  const setTabHNX = () => {
    setTable('HNX')
    dispatch(MenuTable('HNX'))
  }
  const setTabUPCOM = () => {
    setTable('UPCOM')
    dispatch(MenuTable('UPCOM'))
  }
  const slideStatus = useSelector((state)=> state.Slide.isShow)
  const [slide,setSlide] = useState(slideStatus)
  const OnSlide = () => {
    dispatch(TurnSlide(!slide))
    setSlide(!slide)
  }
  const setActiveIcon = () => {
    if(slideStatus){
      return 'activeSlide'
    }else{
      return 'icon-toggle'
    }
  }

  return(
    <div className={themeMode === 'dark' ? "theme-dark" : "theme-light"}>
      <div className='menu'>
        <ul className='primary'>
          <li className='search-box'>
            <input type='text' placeholder={t("menu.search")} className='input-search' />
            <button type='submit' className='button-search'><i className="fas fa-plus"></i></button>
          </li>
          <li className='menu-list item'>
            <a className='follow-list'>{t("menu.fs")} <i className="fas fa-caret-down"></i></a>
          </li>
          <li className='menu-list item'>
            <a className={table==='HOSE' ? 'follow-list-done' : 'follow-list'} onClick={setTabHose}>{tableName}<i className="fas fa-caret-down"></i></a>
            <ul className='sub-menu-item'>
              <li className={table === 'HOSE' ? 'sub-menu-list-done' : 'sub-menu-list'} onClick={setTabHose}>
                <a><span>HOSE</span></a>
              </li>
              <li className={table === 'VN30' ? 'sub-menu-list-done' : 'sub-menu-list'} onClick={setTabVN30}>
                <a><span>VN30</span></a>
              </li>
              <li className='sub-menu-list'>
                <a><span>{t("menu.putthrough")}</span></a>
              </li>
            </ul>
          </li>
          <li className='menu-list item '>
            <a className={table==='HNX' ? 'follow-list-done' : 'follow-list'} onClick={setTabHNX}>HNX<i className="fas fa-caret-down"></i></a>
            <ul className='sub-menu-item'>
              <li className={table === 'HNX' ? 'sub-menu-list-done' : 'sub-menu-list'} onClick={setTabHNX}>
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
            <a className={table==='UPCOM' ? 'follow-list-done' : 'follow-list'} onClick={setTabUPCOM}>UPCOM <i className="fas fa-caret-down"></i></a>
            <ul className='sub-menu-item'>
                <li className={table === 'UPCOM' ? 'sub-menu-list-done' : 'sub-menu-list'} onClick={setTabUPCOM}>
                  <a ><span>UPCOM</span></a>
                </li>
                <li className='sub-menu-list'>
                  <a><span>{t("menu.putthrough")}</span></a>
                </li>
            </ul>
          </li>
          <li className='menu-list item'>
            <a className='follow-list'>{t("menu.ss")}<i className="fas fa-star"></i><i className="fas fa-caret-down"></i></a>
          </li>
          <li className='menu-list'>
            <a className='follow-list'>{t("menu.derivatives")}<i className="fas fa-caret-down"></i></a>
          </li>
          <li className='menu-list'>
            <a className='follow-list'>{t("menu.warrant")}</a>
          </li>
          <li className='menu-list'>
            <a className='follow-list'>{t("menu.bonds")}</a>
          </li>
          <li className='menu-list'>
            <a className='follow-list'>{t("menu.oddlot")}<i className="fas fa-caret-down"></i></a>
          </li>
          {/* <li className='slideshow'>
            <ul className='secondary icon-toggle-two'>
              <li className={setActiveIcon()} onClick={OnSlide}>
                <a className='icon-secondary'><i class="fas fa-video"></i></a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
export default Menu;