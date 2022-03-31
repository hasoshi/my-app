import React from 'react';
import './PriceBoard.scss'
import upcom from '../../data/instruments/upcom.json';

function UPCOM() {   
  const DisplayData = upcom.map(data => {
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
    {DisplayData}
    </>
  );
}
 
export default UPCOM;