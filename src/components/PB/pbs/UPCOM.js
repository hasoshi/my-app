import React, { useEffect, useState } from 'react';
import '../main/PriceBoard.scss'
import upcom from '../../../data/instruments/upcom.json';

function UPCOM() {   

  const changeFormat = (data) => {
    if (data > 0) {
        return ((Math.round(data) / 1000).toFixed(2))
    } else {
        return '';
    }
  }

  let get20Data = upcom.d.slice(0, 20) 
  const start = 0 
  const end = Math.floor(Math.random() * (20 - 10)) + 10 
  const [data, setData] = useState(get20Data);

  const randomValue = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
  }
  
  const ChangeData = () => {
    get20Data.slice(start, end).map((data) => {
        if (data.bidPrice2 && data.bidPrice3 &&
          data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
          data.closePrice !== undefined) {
          randomValue(data.floor, data.ceiling)
          return (
            setData(get20Data.slice(0, 10)),
            data.bidPrice3 = randomValue(data.floor, data.ceiling),
            data.bidPrice2 = randomValue(data.floor, data.ceiling),
            data.bidPrice1 = randomValue(data.floor, data.ceiling),
            data.offerPrice1 = randomValue(data.floor, data.ceiling),
            data.offerPrice2 = randomValue(data.floor, data.ceiling),
            data.offerPrice3 = randomValue(data.floor, data.ceiling),
            data.closePrice = randomValue(data.floor, data.ceiling)
            )
        }else {
            return ''
        }
    })
  }
  useEffect(() => {
      setInterval(ChangeData, 3000)
  }, [])

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

  const checkHighLight = (ref, ceil, fl, result) => {
    if(ref < result && result < ceil) {
      return "green-hl";
    }else if(result > fl && result < ref) {
      return "red-hl";
    }else if(result === fl) {
      return "jade-green-hl";
    } else if(result === ceil) {
      return "pink-hl";
    }else if(result === ref) {
      return "yellow-hl";
    }
  }


  const tableData = upcom.d.map((data,k) => {
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
          <td className={checkHighLight(ref, ceil, fl, data.bidPrice3)}>{changeFormat(data.bidPrice3)}</td>
          <td className={check(ref, ceil, fl, data.bidPrice3)}>{changeFormat(data.bidVol3)}</td>
          <td className={checkHighLight(ref, ceil, fl, data.bidPrice2)}>{changeFormat(data.bidPrice2)}</td>
          <td className={check(ref, ceil, fl, data.bidPrice2)}>{changeFormat(data.bidVol2)}</td>
          <td className={checkHighLight(ref, ceil, fl, Number(data.bidPrice1))}>{changeFormat(Number(data.bidPrice1))}</td>
          <td className={check(ref, ceil, fl, Number(data.bidPrice1))}>{changeFormat(data.bidVol1)}</td>
          {/* Khớp lệnh*/}
          <td className={checkHighLight(ref, ceil, fl, data.closePrice)}>{changeFormat(data.closePrice)}</td>
          <td className={check(ref, ceil, fl, data.closePrice)}>{changeFormat(data.closeVol)}</td>
          <td className={checkHighLight(ref, ceil, fl, data.closePrice)}>{changeFormat(data.change)}</td>
          <td></td>
         
          {/* Bên bán */}
          <td className={checkHighLight(ref, ceil, fl, Number(data.offerPrice1))}>{changeFormat(Number(data.offerPrice1))}</td>
          <td className={check(ref, ceil, fl, Number(data.offerPrice1))}>{changeFormat(data.offerVol1)}</td>
          <td className={checkHighLight(ref, ceil, fl, data.offerPrice2)}>{changeFormat(data.offerPrice2)}</td>
          <td className={check(ref, ceil, fl, data.offerPrice2)}>{changeFormat(data.offerVol2)}</td>
          <td className={checkHighLight(ref, ceil, fl, data.offerPrice3)}>{changeFormat(data.offerPrice3)}</td>
          <td className={check(ref, ceil, fl, data.offerPrice3)}>{changeFormat(data.offerVol3)}</td>

          {/* Tổng GT */}
          <td className='TVAL'>{changeFormat(data.totalTrading)}</td>
          {/* <td className='TVOL'>{changeFormat(data.totalTradingValue)}</td> */}
      
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

export default UPCOM;