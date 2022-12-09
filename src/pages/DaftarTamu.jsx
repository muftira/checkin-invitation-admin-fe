import React, { useState, useEffect } from "react";
import { BsHourglassSplit, BsFillBarChartFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getData } from "../utils/axios";
import CheckBox from "../component/CheckBox";
import ClearFilter from "../component/ClearFilter";
import Option from "../component/Option";
import Arriving from "../component/Arriving";
import Spreading from "../component/Spreading";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [rowData, setRowData] = useState();
  const [inputField, setInputField] = useState("");
  const [isCheckBox, setisCheckBox] = useState(false);
  const [dataFilter, setDataFilter] = useState([])
  const navigate = useNavigate()
  const [columnDefs, setColumnDefs] = useState([
    { field: "_id", headerName: "Opsi", cellRenderer: Option },
    { field: "name", sortable: true, headerName: "Nama" },
    { field: "address", headerName: "Alamat/Instansi" },
    { field: "isArrived", headerName: "Status Kedatangan", cellRenderer: Arriving},
    { field: "isSpread", headerName: "Status Undangan", cellRenderer: Spreading },
    { field: "date", headerName: "Tanggal" },
    { field: "time", headerName: "Waktu" },
  ]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      getApi()
    }else{
      navigate('/admin')
    }
    
  }, []);
  
  function getApi (value)  {
    setDataFilter(value)
    getData()
    .then((res) => {
      setRowData(res.data);
    })
    .catch((err) => {
      console.log("GAGAL =>", err);
    });
  }
  
  function getFilter(e) {
    const searchWords = e.target.value;
    setInputField(searchWords);
    const newFilter = rowData.filter((product) => {
      return product.name.toLowerCase().includes(searchWords.toLowerCase());
    });

    if (searchWords === "") {
      return getApi()
    } else {
      return setRowData(newFilter)
    }
  }

  const getArriving = () => {
    const arrived = [];
    const hasnotArrived = [];
    const arriving = rowData &&
      rowData.map((data) =>
        data.isArrived
          ? arrived.push(data.isArrived)
          : hasnotArrived.push(data.isArrived)
      );

    return { arrived, hasnotArrived };
  };

  const getSpreading = () => {
    const spread = [];
    const hasnotSpread = [];
    const spreading = rowData &&
      rowData.map((data) =>
        data.isSpread
          ? spread.push(data.isSpread)
          : hasnotSpread.push(data.isSpread)
      );

    return { spread, hasnotSpread };
  };


  return (
    <div className="w-[calc(100vw-240px)] bg-red  flex flex-col pr-7 mb-10">
      <div className="w-ful h-full space-y-10">
        <div className="h-[250px] w-full bg-status-one rounded-[20px] shadow-black/40 shadow-lg flex justify-center items-center space-x-16 ">
          <div className="w-[320px] h-[200px] flex flex-col justify-center items-start space-y-4">
            <p className="font-bold text-2xl">Status</p>
            <p>Berikut ini adalah Statistik dari Proses Kedatangan Tamu</p>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Tamu Belum Datang</p>
            <p className="absolute top-[40%] text-6xl font-bold">
              {getArriving().hasnotArrived.length}
            </p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsHourglassSplit />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Tamu Sudah Datang</p>
            <p className="absolute top-[40%] text-6xl font-bold">
              {getArriving().arrived.length}
            </p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <MdVerified />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Total Tamu</p>
            <p className="absolute top-[40%] text-6xl font-bold">
              {getArriving().hasnotArrived.length +
                getArriving().arrived.length}
            </p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsFillBarChartFill />
            </div>
          </div>
        </div>
        <div className="h-[250px] w-full bg-status-two rounded-[20px] shadow-black/40 shadow-lg flex justify-center items-center space-x-16 ">
          <div className="w-[320px] h-[200px] flex flex-col justify-center items-start space-y-4">
            <p className="font-bold text-2xl">Status</p>
            <p>Berikut ini adalah Statistik dari Proses Sebaran Undangan</p>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Belum Disebar</p>
            <p className="absolute top-[40%] text-6xl font-bold">
              {getSpreading().hasnotSpread.length}
            </p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsHourglassSplit />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Sudah Disebar</p>
            <p className="absolute top-[40%] text-6xl font-bold">
              {getSpreading().spread.length}
            </p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <MdVerified />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Total Undangan</p>
            <p className="absolute top-[40%] text-6xl font-bold">
              {getSpreading().hasnotSpread.length +
                getSpreading().spread.length}
            </p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsFillBarChartFill />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center  mt-10">
        <div className="p-2 bg-bege-two shadow-black/40 shadow-lg flex justify-center items-center rounded-lg font-bold text-2xl">
          <p>Daftar Tamu</p>
        </div>
        <div className="w-full flex justify-end space-x-4">
          <div className="w-full flex justify-end space-x-2 relative">
            <p className="font-bold">Search</p>
            <input
              className="ring-2 ring-neutral-400 rounded-md px-1 py-1 w-[200px] text-sm"
              type="text"
              placeholder="Cari Nama ..."
              onChange={(e) => getFilter(e, rowData)}
              value={inputField}
            />
            <div className="w-20 h-8">
              {dataFilter ? <ClearFilter getApi={getApi} setisCheckBox={setisCheckBox}/> : <button
                onClick={() => setisCheckBox(!isCheckBox)}
                className="w-full h-full bg-[#1C1C1C] font-bold text-white shadow-black/40 shadow-md rounded-md flex justify-center items-center active:bg-[#1C1C1C]/40"
              >
                <FiFilter />
                &ensp;Filter
              </button>}
              
            </div>
            {isCheckBox ? (
                <div className="absolute top-6 z-20 right-0">
                  <CheckBox rowData={rowData} setRowData={setRowData} isCheckBox={isCheckBox} setisCheckBox={setisCheckBox} getApi={getApi}/>
                </div>
              ) : null}
          </div>
        </div>
      </div>
      <div className="max-w-full h-[400px] p-4 bg-bege-two rounded-3xl shadow-black/40 shadow-lg mt-6 ag-theme-alpine overflow-hidden">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default Dashboard;
