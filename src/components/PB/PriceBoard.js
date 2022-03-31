import React from 'react';
import './PriceBoard.scss'
import hose from '../../data/instruments/hose.json';
import { useSelector } from 'react-redux'

function PriceBoard() {   
  const themeMode = useSelector((state) => state.Theme.themeMode);

  const DisplayData = hose.map(data => {
    return(
      <tr>
        <td>{data.symbol}</td>
        <td>{data.reference}</td>
        <td>{data.ceiling}</td>
        <td>{data.floor}</td>
        <td>{data.bidPrice3}</td>
        <td>{data.bidVol3}</td>
        <td>{data.bidPrice2}</td>
        <td>{data.bidVol2}</td>
        <td>{data.bidPrice1}</td>
        <td>{data.bidVol1}</td>
        <td>{data.closePrice}</td>
        <td>{data.closeVol}</td>
        <td>{data.change}</td>
        <td>{data.offerPrice1}</td>
        <td>{data.offerVol1}</td>
        <td>{data.offerPrice2}</td>
        <td>{data.offerVol2}</td>
        <td>{data.offerPrice3}</td>
        <td>{data.offerVol3}</td>
        <td>{data.totalTrading}</td>
        <td>{data.totalTradingValue}</td>
        <td>{data.high}</td>
        <td>{data.averagePrice}</td>
        <td>{data.low}</td>
  
      </tr>
    )
  })
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
        {DisplayData}
      </tbody>
    </table>
    </>
  );
}
 
export default PriceBoard;