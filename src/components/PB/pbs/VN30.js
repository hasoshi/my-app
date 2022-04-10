import React, { useEffect, useState } from 'react';
import '../main/PriceBoard.scss'
import vn30 from '../../../data/instruments/vn30.json';

const CHANGING_COLUMNS = ["bidPrice1", "bidPrice2", "bidPrice3", "offerPrice1", "offerPrice2", "offerPrice3"];

function VN30() {   

  const changeFormat = (data) => {
    if (data > 0) {
        return ((Math.round(data) / 1000).toFixed(2))
    } else {
        return '';
    }
  }

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (selectedRec) => {
      setSelectedData(selectedRec);
      setShow(true);
  };

  const hideModal = () => {
      setShow(false);
  };

  let get20Data = vn30.d.slice(0, 20) 
  const [data, setData] = useState(get20Data);

  //random giá trị [floor, ceiling]
  const randomValue = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
  }

  //random các ô 
  const randomizeCells = (cellNumber, i = 0, result = []) => {
    const columnIndex = randomValue(0, CHANGING_COLUMNS.length);
    const cellValue = randomValue(0, 9);
    const pair = `${CHANGING_COLUMNS[columnIndex]}:${cellValue}`;
    if (!result.includes(pair)) {
      i++;
    } else {
      return randomizeCells(cellNumber, i, result);
    }
    if (i === 6) {
      return result;
      
    }
    result.push(pair);
    return randomizeCells(cellNumber, i, result);
  };
  // console.log(result);

  const updateRandomInfoValues = ({ data, cellIndex, randomCells }) => {
    const infoKeys = Object.keys(data);
    for (const infoKey of infoKeys) {
      if (randomCells.some((cell) => cell === `${infoKey}:${cellIndex}`)) {
        data[infoKey] = randomValue(data.floor, data.ceiling);
      }
    }
    return data;
  };
  
  const ChangeData = () => {
    const randomCells = randomizeCells(10);
    get20Data.slice().map((data, index) => {
      console.log(index);
      if (data.bidPrice1 && data.bidPrice2 && data.bidPrice3 &&
        data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
        data.closePrice !== undefined) {
        const updatedInfo = updateRandomInfoValues({
          data: data,
          randomCells: randomCells,
          cellIndex: index
        });
        return (
          setData(get20Data.slice(0, 10)),
          data.bidPrice1 = updatedInfo.bidPrice1,
          data.bidPrice2 = updatedInfo.bidPrice2,
          data.bidPrice3 = updatedInfo.bidPrice3,
          data.offerPrice2 = updatedInfo.offerPrice2,
          data.offerPrice3 = updatedInfo.bidPrice3
        );
      } else {
        return "";
      }
    });
  };
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


  const tableData = vn30.d.map((data,k) => {
    const ref = data.reference;
    const ceil = data.ceiling;
    const fl = data.floor;
    return(
      <>
        <tbody>
          <tr key={k}>
          <td className={check(ref, ceil, fl, data.closePrice)} onClick={() => hanldeClick(data)}>{data.symbol}</td>
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
    {show && <Modal details={selectedData} handleClose={hideModal} />}
    </>
  );
}

const Modal = ({handleClose, details}) => {
  return (
    <div className="modal">
    <div className="modal-main">
      <button onClick={handleClose} id='close'>X</button>
      <div className='modal-header'>
        {details?.FullName}
      </div>
      <div className="modal-body">
      </div>
    </div>
  </div>
  );
};

export default VN30;