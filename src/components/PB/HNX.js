import React from 'react';
import './PriceBoard.scss'
import hnx from '../../data/instruments/hnx.json';

function HNX() {   

  const check = (ref, cell, fl, result) => {
    if(ref < result) {
      return "green";
    }else if(result < ref) {
      return "red";
    }else if(result === fl) {
      return "jade-green";
    } else if(result === cell) {
      return "pink";
    }else {
      return "yellow";
    }
  }

  const tableData = hnx.d.map((data,k) => {
    return(
      <>
        <tbody>
          <tr key={k}>
          <td className='color-symbol'>{data.symbol}</td>
          <td className='color-ref'>{(Math.round(data.reference)/1000).toFixed(2)}</td>
          <td className='color-ceil'>{(Math.round(data.ceiling)/1000).toFixed(2)}</td>
          <td className='color-fl'>{(Math.round(data.floor)/1000).toFixed(2)}</td>
          {/* Bên mua */}
          <td className={check(data.reference, data.ceiling, data.floor, data.bidPrice3)}>
            {(Math.round(data.bidPrice3)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.bidVol3)}>
            {(Math.round(data.bidVol3)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.bidPrice2)}>
            {(Math.round(data.bidPrice2)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.bidVol2)}>
            {(Math.round(data.bidVol2)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.bidPrice1)}>
            {(Math.round(data.bidPrice1)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.bidVol1)}>
            {(Math.round(data.bidVol1)/1000).toFixed(2)}
          </td>
          {/* Khớp lệnh*/}
          <td className={check(data.reference, data.ceiling, data.floor, data.closePrice)}>
            {(Math.round(data.closePrice)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.closeVol)}>
            {(Math.round(data.closeVol)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.change)}>
            {(Math.round(data.change)/1000).toFixed(2)}
            </td>
          <td></td>
         
          {/* Bên bán */}
          <td className={check(data.reference, data.ceiling, data.floor, data.offerPrice1)}>
            {(Math.round(data.offerPrice1)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.offerVol1)}>
            {(Math.round(data.offerVol1)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.offerPrice2)}>
            {(Math.round(data.offerPrice2)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.offerVol2)}>
            {(Math.round(data.offerVol2)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.offerPrice3)}>
            {(Math.round(data.offerPrice3)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.offerVol3)}>
            {(Math.round(data.offerVol3)/1000).toFixed(2)}
          </td>

          {/* Tổng GT */}
          <td>{(Math.round(data.totalTrading)/1000).toFixed(2)}</td>
          <td>{(Math.round(data.totalTradingValue)/1000).toFixed(2)}</td>
      
          <td className={check(data.reference, data.ceiling, data.floor, data.high)}>
            {(Math.round(data.high)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.averagePrice)}>
            {(Math.round(data.averagePrice)/1000).toFixed(2)}
          </td>
          <td className={check(data.reference, data.ceiling, data.floor, data.low)}>
            {(Math.round(data.low)/1000).toFixed(2)}
          </td>
          {/* Dư */}
          <td></td>
          <td></td>
          {/* ĐTNN */}
          <td>{(Math.round(data.foreignBuy)/1000).toFixed(2)}</td>
          <td>{(Math.round(data.foreignSell)/1000).toFixed(2)}</td>
          <td>{(Math.round(data.foreignRemain)/1000).toFixed(2)}</td>
          </tr>
        </tbody>
      </>
    )
  })
  return (
    <>
    {tableData}
    </>
  );
}
 
export default HNX;