import React, { useEffect, useState } from 'react';
import '../main/PriceBoard.scss'
import upcom from '../../../data/instruments/upcom.json';
import $ from 'jquery';

const COLUMNS = ["bidPrice1", "bidPrice2", "bidPrice3", "offerPrice1", "offerPrice2", "offerPrice3"];
function UPCOM() {   

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

  let get20Data = upcom.d.slice(0, 20);
  const [data, setData] = useState(get20Data);

  //random giá trị
  const randomValue = (min, max) => {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
  }

  //random các ô (vị trí cột + hàng), cellNumber = tổng số ô
  const randomizeCells = (cellNumber, i = 0, result = []) => {
    const columnIndex = randomValue(0, COLUMNS.length); //random cột cần change value
    const cellValue = randomValue(0, 9); //random giá trị ô 15 dòng đầu
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
  const updateRandomInfoValues = ({ data: {...data}, cellIndex, randomCells }) => {
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
    // console.log(randomCells);
    get20Data.slice().map((data, index) => {
      if (data.bidPrice1 && data.bidPrice2 && data.bidPrice3 &&
        data.offerPrice1 && data.offerPrice2 && data.offerPrice3 &&
        data.closePrice !== undefined) {
        const updatedInfo = updateRandomInfoValues({
          data: data,
          cellIndex: index,
          randomCells: randomCells
        });
          let bidPrice1 = updatedInfo.bidPrice1
          let bidPrice2 = updatedInfo.bidPrice2
          let bidPrice3 = updatedInfo.bidPrice3
          let offerPrice2 = updatedInfo.offerPrice2
          let offerPrice3 = updatedInfo.offerPrice3
          let offerPrice1 = updatedInfo.offerPrice1
          let closePrice = updatedInfo.closePrice
        return (
          data.bidPrice3_classHightLight = getHightLight(data.bidPrice3, bidPrice3, data),
          data.bidPrice2_classHightLight = getHightLight(data.bidPrice2, bidPrice2, data),
          data.bidPrice1_classHightLight = getHightLight(data.bidPrice1, bidPrice1, data),
          data.offerPrice1_classHightLight = getHightLight(data.offerPrice1, offerPrice1, data),
          data.offerPrice2_classHightLight = getHightLight(data.offerPrice2, offerPrice2, data),
          data.offerPrice3_classHightLight = getHightLight(data.offerPrice3, offerPrice3, data),
          data.closePrice_classHightLight = getHightLight(data.closePrice, closePrice, data),
          
          data.bidPrice1 = bidPrice1,
          data.bidPrice2 = bidPrice2,
          data.bidPrice3 = bidPrice3,
          data.offerPrice1 = offerPrice1,
          data.offerPrice2 = offerPrice2,
          data.offerPrice3 = offerPrice3,
          data.closePrice = closePrice
          );
      } else {
        return "";
      }
    });
    setData(get20Data.slice())
    setTimeout(function() {
      clearHightLight()
    }, 1000)
    
  };
  useEffect(() => {
      setInterval(ChangeData, 3000)
  }, [])

  const getHightLight = (currentValue, value, data) => {
    let className = ''
    if(currentValue === value) {
      className = ''
    } else if(currentValue !== value && value === data.reference) {
      className = 'hight-light-' + 'yellow'
    } else if(currentValue !== value && value === data.ceiling) {
      className = 'hight-light-' + 'purple'
    } else if(currentValue !== value && value === data.floor) {
      className = 'hight-light-' + 'blue'
    } else if(currentValue !== value && value > data.reference) {
      className = 'hight-light-' + 'green'
    } else {
      className = 'hight-light-' + 'red' 
    }
    return className;
  }

  const clearHightLight = () => {
    $(".table tbody tr td").removeClass('hight-light-yellow')
    $(".table tbody tr td").removeClass('hight-light-purple')
    $(".table tbody tr td").removeClass('hight-light-blue')
    $(".table tbody tr td").removeClass('hight-light-green')
    $(".table tbody tr td").removeClass('hight-light-red')

  }
  const setColor = (name, data, dataName) => {
    let className =''
    if (dataName === data.reference) {
        className = 'yellow-color '
    } else if (dataName === data.ceiling) {
        className = 'purple-color'
    } else if (dataName === data.floor) {
        className = 'blue-color'
    } else if (dataName > data.reference) {
        className = 'green-color '
    } else {
        className = 'red-color'
    }
    if(data[name + '_classHightLight']) {
      className = className + ' ' + data[name + '_classHightLight']
    }
    return className
  }
  
  const tableData = upcom.d.map((data,k) => {
    const ref = data.reference;
    const ceil = data.ceiling;
    const fl = data.floor;
    const styleMCK = {
      fontWeight: 'bold'
    }
    return(
      <>
        <tbody>
          <tr key={k}>
          <td style={styleMCK} className={setColor('closePrice', data, data.closePrice)} onClick={() => hanldeClick(data)}>{data.symbol}</td>
          <td className='color-ref'>{changeFormat(ref)}</td>
          <td className='color-ceil'>{changeFormat(ceil)}</td>
          <td className='color-fl'>{changeFormat(fl)}</td>
          {/* Bên mua */}
          <td className={setColor('bidPrice3', data, data.bidPrice3)}>{changeFormat(data.bidPrice3)}</td>
          <td className={setColor('bidVol3', data, data.bidPrice3)}>{changeFormat(data.bidVol3)}</td>
          <td className={setColor('bidPrice2', data, data.bidPrice2)}>{changeFormat(data.bidPrice2)}</td>
          <td className={setColor('bidVol2', data, data.bidPrice2)}>{changeFormat(data.bidVol2)}</td>
          <td className={setColor('bidPrice1', data, Number(data.bidPrice1))}>{changeFormat(Number(data.bidPrice1))}</td>
          <td className={setColor('bidVol1', data, Number(data.bidPrice1))}>{changeFormat(data.bidVol1)}</td>
          {/* Khớp lệnh*/}
          <td className={setColor('closePrice', data, data.closePrice)}>{changeFormat(data.closePrice)}</td>
          <td className={setColor('closeVol', data, data.closePrice)}>{changeFormat(data.closeVol)}</td>
          <td className={setColor('change', data, data.change)}>{changeFormat(data.change)}</td>
          <td></td>
         
          {/* Bên bán */}
          <td className={setColor('offerPrice1', data, Number(data.offerPrice1))}>{changeFormat(Number(data.offerPrice1))}</td>
          <td className={setColor('offerVol1', data, Number(data.offerPrice1))}>{changeFormat(data.offerVol1)}</td>
          <td className={setColor('offerPrice2', data, data.offerPrice2)}>{changeFormat(data.offerPrice2)}</td>
          <td className={setColor('offerVol2', data, data.offerPrice2)}>{changeFormat(data.offerVol2)}</td>
          <td className={setColor('offerPrice3', data, data.offerPrice3)}>{changeFormat(data.offerPrice3)}</td>
          <td className={setColor('offerVol3', data, data.offerPrice3)}>{changeFormat(data.offerVol3)}</td>

          {/* Tổng GT */}
          <td className='TVAL'>{changeFormat(data.totalTrading)}</td> 
           {/* <td className='TVOL'>{changeFormat(data.totalTradingValue)}</td> */}
      
          <td className={setColor('high', data, data.high)}>{changeFormat(data.high)}</td>
          <td className={setColor('averagePrice', data, data.averagePrice)}>{changeFormat(data.averagePrice)}</td>
          <td className={setColor('low', data, data.low)}>{changeFormat(data.low)}</td> 
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
        <table class="table-modal">
          <thead>
            <tr>
              <th scope="col">Mã CK</th>
              <th scope="col">Giá</th>
              <th scope="col">+/-</th>
              <th scope="col">KL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details?.symbol}</td>
              <td>{details?.closePrice}</td>
              <td>{details?.change}</td>
              <td>{details?.closeVol}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default UPCOM;