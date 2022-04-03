import React from 'react';
import './PriceBoard.scss'
import hnx from '../../data/instruments/hnx.json';

function HNX() {   

  const check = (ref, ceil, fl, result) => {
    if(ref < result && result < ceil) {
      return "green";
    }else if(result > fl && result < ref) {
      return "red";
    }else if(result === fl) {
      return "jade-green";
    } else if(result === ceil) {
      return "pink";
    }else if(result === ref) {
      return "yellow";
    }
  }

  const changeFormat = (data) => {
    if (data > 0) {
        return ((Math.round(data) / 1000).toFixed(2))
    } else {
        return '';
    }
  }

  const tableData = hnx.d.map((data,k) => {
    const ref = data.reference;
    const ceil = data.ceiling;
    const fl = data.floor;
    return(
      <>
        <tbody>
          <tr key={k}>
          <td className={check(ref, ceil, fl, data.closePrice)}>{data.symbol}</td>
          <td className='color-ref'>{changeFormat(ref)}</td>
          <td className='color-ceil'>{changeFormat(ceil)}</td>
          <td className='color-fl'>{changeFormat(fl)}</td>
          {/* Bên mua */}
          <td className={check(ref, ceil, fl, data.bidPrice3)}>{changeFormat(data.bidPrice3)}</td>
          <td className={check(ref, ceil, fl, data.bidPrice3)}>{changeFormat(data.bidVol3)}</td>
          <td className={check(ref, ceil, fl, data.bidPrice2)}>{changeFormat(data.bidPrice2)}</td>
          <td className={check(ref, ceil, fl, data.bidPrice2)}>{changeFormat(data.bidVol2)}</td>
          <td className={check(ref, ceil, fl, Number(data.bidPrice1))}>{changeFormat(Number(data.bidPrice1))}</td>
          <td className={check(ref, ceil, fl, Number(data.bidPrice1))}>{changeFormat(data.bidVol1)}</td>
          {/* Khớp lệnh*/}
          <td className={check(ref, ceil, fl, data.closePrice)}>{changeFormat(data.closePrice)}</td>
          <td className={check(ref, ceil, fl, data.closePrice)}>{changeFormat(data.closeVol)}</td>
          <td className={check(ref, ceil, fl, data.closePrice)}>{changeFormat(data.change)}</td>
          <td></td>
         
          {/* Bên bán */}
          <td className={check(ref, ceil, fl, Number(data.offerPrice1))}>{changeFormat(Number(data.offerPrice1))}</td>
          <td className={check(ref, ceil, fl, Number(data.offerPrice1))}>{changeFormat(data.offerVol1)}</td>
          <td className={check(ref, ceil, fl, data.offerPrice2)}>{changeFormat(data.offerPrice2)}</td>
          <td className={check(ref, ceil, fl, data.offerPrice2)}>{changeFormat(data.offerVol2)}</td>
          <td className={check(ref, ceil, fl, data.offerPrice3)}>{changeFormat(data.offerPrice3)}</td>
          <td className={check(ref, ceil, fl, data.offerPrice3)}>{changeFormat(data.offerVol3)}</td>

          {/* Tổng GT */}
          <td>{changeFormat(data.totalTrading)}</td>
          {/* <td>{changeFormat(data.totalTradingValue)}</td> */}
      
          <td className={check(ref, ceil, fl, data.high)}>{changeFormat(data.high)}</td>
          <td className={check(ref, ceil, fl, data.averagePrice)}>{changeFormat(data.averagePrice)}</td>
          <td className={check(ref, ceil, fl, data.low)}>{changeFormat(data.low)}</td>
          {/* Dư */}
          <td></td>
          <td></td>
          {/* ĐTNN */}
          <td>{changeFormat(data.foreignBuy)}</td>
          <td>{changeFormat(data.foreignSell)}</td>
          <td>{changeFormat(data.foreignRemain)}</td>
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