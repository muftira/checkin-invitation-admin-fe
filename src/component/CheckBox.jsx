import React,{ useEffect, useState } from "react";
import { json } from "react-router-dom";

function CheckBox({rowData, setRowData, isCheckBox, setisCheckBox, getApi}) {
  const [checkBox, setCheckBox] = useState([])
  const [value, setValue] = useState([])
  
  useEffect(() => {
    getApi(value)
    const belumDisebar = []
    const sudahDisebar = []
    const belumDatang = []
    const sudahDatang = []
    const undangan = rowData && rowData.filter((data) => data.isSpread ? sudahDisebar.push(data) : belumDisebar.push(data))
    const kedatangan = rowData && rowData.filter((data) => data.isArrived ? sudahDatang.push(data) : belumDatang.push(data))
    const totalCheckBox = []
    totalCheckBox.push(belumDisebar,sudahDisebar, belumDatang, sudahDatang)
    setCheckBox(totalCheckBox)
  }, [])

  function getFilter (e) {
    e.preventDefault()
    setRowData(JSON.parse(value))
    setisCheckBox(!isCheckBox)
  }

  console.log('checkbox =>',rowData);

  console.log('value =>', value);
  return (
    <div className="w-[170px] h-[220px] flex flex-col justify-center items-center space-y-1 bg-bege-two rounded-lg mt-5 shadow-black/40 shadow-lg">
      <div className="text-left space-y-2">
        {/* {checkBox && checkBox.map((data) => <div className="space-x-2">
            <input type="radio" value={JSON.stringify(data)} name="radiovalues" onChange={(e) => setValue(e.target.value)}/>
            <label></label>
          </div>)} */}
      
        <div>
          <div className="w-full flex justify-center font-bold ">
            <p>Undangan</p>
          </div>
          <div className="space-x-2">
            <input type="radio" value={checkBox && JSON.stringify(checkBox[0])} name="radiovalues" onChange={(e) => setValue(e.target.value)} />
            <label>Belum disebar</label>
          </div>
          <div className="space-x-2">
            <input type="radio" value={checkBox && JSON.stringify(checkBox[1])} name="radiovalues" onChange={(e) => setValue(e.target.value)}/>
            <label>Sudah disebar</label>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center font-bold ">
            <p>Kedatangan</p>
          </div>
          <div className="space-x-2">
            <input type="radio" value={checkBox && JSON.stringify(checkBox[2])} name="radiovalues" onChange={(e) => setValue(e.target.value)}/>
            <label>Belum Datang</label>
          </div>
          <div className="space-x-2">
            <input type="radio" value={checkBox && JSON.stringify(checkBox[3])} name="radiovalues" onChange={(e) => setValue(e.target.value)}/>
            <label>Sudah Datang</label>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pt-3">
        <button onClick={(e) => getFilter(e)} className="w-20 h10 bg-[#1C1C1C] border border-button rounded-md flex justify-center p-[2px] text-white font-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CheckBox;
