import React from 'react';
import './PriceBoard.scss'
import { useSelector } from 'react-redux'
import Hose from './Hose';
import VN30 from './VN30';

function PriceBoard() {   
  const themeMode = useSelector((state) => state.Theme.themeMode);
  return (
    <>
    <table className={themeMode === 'dark' ? 'table-dark-mode' : 'table-light-mode'} >
      <thead className="table-title">
        <tr>
          <th colSpan="1" rowSpan="2">Mã CK</th>
          <th colSpan="1" rowSpan="2">TC</th>
          <th colSpan="1" rowSpan="2">Trần</th>
          <th colSpan="1" rowSpan="2">Sàn</th>
          <th colSpan="6" rowSpan="1">Bên mua</th>
          <th colSpan="4" rowSpan="1">Khớp lệnh</th>
          <th colSpan="6" rowSpan="1">Bên bán</th>
          <th colSpan="1" rowSpan="2">Tổng KL</th>
          <th colSpan="1" rowSpan="2">Tổng GT</th>
          <th colSpan="3" rowSpan="1">Giá</th>
          <th colSpan="2" rowSpan="1">Dư</th>
          <th colSpan="3" rowSpan="1">DTNN</th>
        </tr>
        <tr>
          <th colSpan="1" rowSpan="1">Giá 3</th>
          <th colSpan="1" rowSpan="1">KL 3</th>
          <th colSpan="1" rowSpan="1">Giá 2</th>
          <th colSpan="1" rowSpan="1">KL 2</th>
          <th colSpan="1" rowSpan="1">Giá 1</th>
          <th colSpan="1" rowSpan="1">KL 1</th>
          <th colSpan="1" rowSpan="1">Giá</th>
          <th colSpan="1" rowSpan="1">KL</th>
          <th colSpan="1" rowSpan="1">+/-</th>
          <th colSpan="1" rowSpan="1">%</th>
          <th colSpan="1" rowSpan="1">Giá 1</th>
          <th colSpan="1" rowSpan="1">KL 1</th>
          <th colSpan="1" rowSpan="1">Giá 2</th>
          <th colSpan="1" rowSpan="1">KL 2</th>
          <th colSpan="1" rowSpan="1">Giá 3</th>
          <th colSpan="1" rowSpan="1">KL 3</th>
          <th colSpan="1" rowSpan="1">Cao</th>
          <th colSpan="1" rowSpan="1">TB</th>
          <th colSpan="1" rowSpan="1">Thấp</th>
          <th colSpan="1" rowSpan="1">Mua</th>
          <th colSpan="1" rowSpan="1">Bán</th>
          <th colSpan="1" rowSpan="1">Mua</th>
          <th colSpan="1" rowSpan="1">Bán</th>
          <th colSpan="1" rowSpan="1">Dư</th>
        </tr>
      </thead>
      <tbody>
        {/* <Hose/> */}
        <VN30 />
      </tbody>
    </table>
    </>
  );
}
 
export default PriceBoard;