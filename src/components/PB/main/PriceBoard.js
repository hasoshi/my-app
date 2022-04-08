import React from 'react';
import '../main/PriceBoard.scss'
import { useSelector } from 'react-redux'
import HOSE from '../pbs/HOSE';
import VN30 from '../pbs/VN30';
import UPCOM from '../pbs/UPCOM';
import HNX from '../pbs/HNX';
import { useTranslation } from 'react-i18next';

function PriceBoard() {   

  const { t } = useTranslation();
  const themeMode = useSelector((state) => state.Theme.themeMode);

  const Menu_table = useSelector((state) => state.Table.table);

  const Change_table = () => {
    if(Menu_table === 'HOSE') {
      return (<HOSE/>);
    } else if (Menu_table === 'HNX') {
      return (<HNX/>);
    } else if (Menu_table === 'VN30') {
      return (<VN30/>);
    } else {
      return (<UPCOM/>);
    }
  }
  
  return (
    <div className={themeMode === 'dark' ? 'theme-dark' : 'theme-light'} >
      <table className='pb'>
        <thead className="table-title">
          <tr>
            <th className='color-symbol' colSpan="1" rowSpan="2">{t("pb.mack")}</th>
            <th colSpan="1" rowSpan="2">{t("pb.tc")}</th>
            <th colSpan="1" rowSpan="2">{t("pb.tran")}</th>
            <th colSpan="1" rowSpan="2">{t("pb.san")}</th>
            <th colSpan="6" rowSpan="1">{t("pb.benmua")}</th>
            <th colSpan="4" rowSpan="1">{t("pb.khoplenh")}</th>
            <th colSpan="6" rowSpan="1">{t("pb.benban")}</th>
            {/* <th colSpan="1" rowSpan="2">{t("pb.tongKL")}</th> */}
            <th colSpan="1" rowSpan="2"><span>{t("pb.tongGT")}</span></th>
            <th colSpan="3" rowSpan="1">{t("pb.gia")}</th>
            <th colSpan="2" rowSpan="1">{t("pb.du")}</th>
            <th colSpan="3" rowSpan="1">{t("pb.đtnn")}</th>
          </tr>
          <tr>
            <th colSpan="1" rowSpan="1">{t("pb.gia3")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl3")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.gia2")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl2")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.gia1")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl1")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.gia")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl")}</th>
            <th colSpan="1" rowSpan="1">+/-</th>
            <th colSpan="1" rowSpan="1">%</th>
            <th colSpan="1" rowSpan="1">{t("pb.gia1")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl1")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.gia2")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl2")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.gia3")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.kl3")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.cao")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.tb")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.thap")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.mua")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.ban")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.mua")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.ban")}</th>
            <th colSpan="1" rowSpan="1">{t("pb.du")}</th>
          </tr>
        </thead>
          {Change_table()}
      </table>
    </div>
  );
}
 
export default PriceBoard;