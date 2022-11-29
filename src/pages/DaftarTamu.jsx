import React, { useState, useEffect } from "react";
import { BsHourglassSplit, BsFillBarChartFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getData } from "../utils/axios";

function Dashboard() {
  const [rowData, setRowData] = useState();
  const [arrived, setArrived] = useState([])
  const [hasnotArrived, setHasnotArrived] = useState([])
  const [columnDefs, setColumnDefs] = useState([
    { field: "name", sortable: true, headerName: 'Nama' },
    { field: "address", sortable: true, headerName: 'Alamat/Instansi' },
    { field: "isArrived", sortable: true, headerName: 'Status Kedatangan' },
    { field: "isSpread", sortable: true, headerName: 'Status Undangan' },
    { field: "date", sortable: true, headerName: 'Tanggal' },
    { field: "time", sortable: true, headerName: 'Waktu' }
  ]);

  useEffect(() => {
    getData()
      .then((res) => {
        setRowData(res.data);
      })
      .catch((err) => {
        console.log("GAGAL =>", err);
      });
  }, []);

  const getArriving = () => {
    const arrived = []
    const hasnotArrived = []
    const Arriving = rowData && rowData.map((data) => data.isArrived ? arrived.push(data.isArrived) : hasnotArrived.push(data.isArrived) )

    return {arrived, hasnotArrived}
  }

  const getSpreading = () => {
    const spread = []
    const hasnotSpread = []
    const spreading = rowData && rowData.map(data => data.isSpread ? spread.push(data.isSpread) : hasnotSpread.push(data.isSpread))

    return {spread, hasnotSpread}
  }

  console.log('Ariving =>', getArriving().arrived);
  console.log("DATA =>", rowData);
  console.log('Spreading =>', getSpreading().hasnotSpread);

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
            <p className="absolute top-[40%] text-6xl font-bold">{getArriving().hasnotArrived.length}</p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsHourglassSplit />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Tamu Sudah Datang</p>
            <p className="absolute top-[40%] text-6xl font-bold">{getArriving().arrived.length}</p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <MdVerified />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Total Tamu</p>
            <p className="absolute top-[40%] text-6xl font-bold">{getArriving().hasnotArrived.length + getArriving().arrived.length}</p>
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
            <p className="absolute top-[40%] text-6xl font-bold">{getSpreading().hasnotSpread.length}</p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsHourglassSplit />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Sudah Disebar</p>
            <p className="absolute top-[40%] text-6xl font-bold">{getSpreading().spread.length}</p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <MdVerified />
            </div>
          </div>
          <div className="w-[320px] h-[150px] bg-bege-two flex flex-col justify-start items-center rounded-xl relative shadow-black/40 shadow-lg">
            <p className="mt-4">Total Undangan</p>
            <p className="absolute top-[40%] text-6xl font-bold">{getSpreading().hasnotSpread.length+getSpreading().spread.length}</p>
            <div className="w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px] shadow-black/40 shadow-lg text-white flex justify-center items-center text-[25px]">
              <BsFillBarChartFill />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="p-2 bg-bege-two shadow-black/40 shadow-lg flex justify-center items-center rounded-lg font-bold text-2xl">
          <p>Daftar Tamu</p>
        </div>
      </div>
      <div className="max-w-full h-[400px] p-4 bg-bege-two rounded-3xl shadow-black/40 shadow-lg mt-6 ag-theme-alpine overflow-hidden">
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
}

export default Dashboard;
