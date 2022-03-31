import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home/Home.scss';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import { useSelector } from 'react-redux';
import PriceBoard from '../PB/PriceBoard';

function Home() {
  const themeMode = useSelector((state) => state.Theme.themeMode)
  const { t, i18n } = useTranslation();

  // const langMode = useSelector((state) => state.Lang.langis)
  return(
    <div className={themeMode === 'dark' ? "home-dark-mode" : "home-light-mode"}>
      <Header />
      <PriceBoard />
    {/* Footer */}
      <div class="footer">
        <div className="footer-item">
        <span className="t">{t("home.text0")}</span><span className="n">x1000</span>
        <span className="t">{t("home.text1")}</span><span className="n">x10</span>
        <span className="t">{t("home.text2")}</span><span className="n">x1</span>
        <span className="t">{t("home.text1")}</span><span className="n">x1</span>
        <span className="t">{t("home.text4")}</span><span className="n">x1</span>
        </div>
        <button className="bts"><i className="fa fa-shopping-cart"></i> {t("home.footer1")}</button>
        <button className="bts2"><i class="fas fa-chart-line"></i> {t("home.footer2")}</button>
      </div>
    </div>
  );
}
export default Home;