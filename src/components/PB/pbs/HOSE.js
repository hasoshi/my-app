import React, { useEffect, useState } from 'react';
import '../main/PriceBoard.scss'
import hose from '../../../data/instruments/hose.json';

const COLUMNS = ["bidPrice1", "bidPrice2", "bidPrice3", "offerPrice1", "offerPrice2", "offerPrice3"];
function HOSE() {   

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

  let get20Data = hose.d.slice(0, 20);
  const [data, setData] = useState(get20Data);

  //random giá trị
  const randomValue = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
  }

  //random các ô (vị trí cột + hàng), cellNumber = tổng số ô
  const randomizeCells = (cellNumber, i = 0, result = []) => {
    const columnIndex = randomValue(0, COLUMNS.length); //random cột cần change value
    const cellValue = randomValue(0, 14); //random giá trị ô 15 dòng đầu
    const pair = `${COLUMNS[columnIndex]}:${cellValue}`; // xác định vị trí cột và vị trí dòng (vị trí ô)
    // console.log("columnIndex:", columnIndex);
    // console.log("cellValue:", cellValue);
    // console.log("pair:", pair);
    // console.log("------");
    if (!result.includes(pair)) { //tìm kiếm pair trong result, 
      i++; //nếu pair k có trong result thì tăng i
    } else {
      return randomizeCells(cellNumber, i, result);
    }
    if (i === 10) { //chọn 10 điểm
      return result;
    }
    result.push(pair);
    return randomizeCells(cellNumber, i, result);
  };
 
  //update giá trị cho các ô
  const updateRandomInfoValues = ({ data, cellIndex, randomCells }) => {
    const infoKeys = Object.keys(data); //xác định key dạng object
    // console.log(infoKeys);
    for (const infoKey of infoKeys) {
      if (randomCells.some((cell) => cell === `${infoKey}:${cellIndex}`)) {
        // console.log("$$$",`${infoKey}:${cellIndex}`);
        data[infoKey] = randomValue(data.floor, data.ceiling);
      }
    }
    return data;
    
  };
  
  const ChangeData = () => {
    const randomCells = randomizeCells();
    console.log(randomCells);
    get20Data.slice().map((data, index) => {
      if (data.bidPrice1 && data.bidPrice2 && data.bidPrice3 &&
        data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
        data.closePrice !== undefined) {
        const updatedInfo = updateRandomInfoValues({
          data: data,
          cellIndex: index,
          randomCells: randomCells
        });
        return (
          setData(get20Data.slice()),
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


  const tableData = hose.d.map((data,k) => {
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

export default HOSE;