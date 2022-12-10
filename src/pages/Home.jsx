import React, { useState, useEffect, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import NavbarClient from "../component/NavbarClient";
import { BsHourglassSplit } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { getData } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import Arriving from "../component/Arriving";
import swal from "sweetalert";
import { updateArriving } from "../utils/axios";

function Home() {
  const gridRef = useRef();
  const [data, setData] = useState([]);
  const [inputField, setInputField] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const [selectedRow, setSelectedRow] = useState("");
  const navigate = useNavigate();
  const [columnDefs, setColumnDefs] = useState([
    { field: "name", sortable: true, headerName: "Nama" },
    { field: "address", headerName: "Alamat/Instansi" },
    {
      field: "isArrived",
      headerName: "Status Kedatangan",
      cellRenderer: Arriving,
    },
    { field: "date", headerName: "Tanggal" },
    { field: "time", headerName: "Waktu" },
  ]);
  const getApi = useCallback((value) => {
    setDataFilter(value);
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("GAGAL =>", err);
      });
  }, []);

  useEffect(() => {
    const userClient = JSON.parse(localStorage.getItem("userClient"));
    if (userClient) {
      getApi();
    } else {
      navigate("/");
    }
  }, []);

  function getFilter(e) {
    const searchWords = e.target.value;
    setInputField(searchWords);
    const newFilter = data.filter((product) => {
      return product.name.toLowerCase().includes(searchWords.toLowerCase());
    });

    if (searchWords === "") {
      return getApi();
    } else {
      return setData(newFilter);
    }
  }

  function getArriving() {
    const arrived = [];
    const hasnotArrived = [];
    const arriving =
      data &&
      data.map((item) =>
        item.isArrived
          ? arrived.push(item.isArrived)
          : hasnotArrived.push(item.isArrived)
      );

    return { arrived, hasnotArrived };
  }
  const onSelectionChanged = useCallback(() => {
    const _selectedRows = gridRef.current.api.getSelectedRows()[0];

    //cara lewat DOM
    document.querySelector(".selectedName").innerHTML = _selectedRows.name;

    //cara lewat useState
    setSelectedRow(_selectedRows);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    swal({
      title: "apakah yakin diubah?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        updateArriving(selectedRow._id, selectedRow.isArrived)
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => console.log("GAGAL", err));
        swal("Data terubah!", {
          icon: "success",
        });
      } else {
        swal("Data Aman!");
      }
    });
  };
  console.log("selectedrow =>", selectedRow);

  return (
    <div className="w-full h-screen bg-bege flex flex-col justify-start items-center">
      <NavbarClient />
      <p className="flex lg:hidden text-white text-4xl mt-[100px]">
        Please View on Desktop Mode
      </p>
      <div className="lg:flex lg:flex-col justify-center items-center hidden">
        <p className="p-2 bg-bege-two shadow-black/40 shadow-lg flex justify-center items-center rounded-lg font-bold text-2xl mb-4">
          Detail Tamu
        </p>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="w-[600px] h-[180px]  bg-status-one flex justify-center items-center rounded-lg shadow-black/40 shadow-lg relative">
            <div className="w-8 h-8 rounded-md bg-bege-two absolute left-5 top-[-20px] shadow-black/40 shadow-md text-icon flex justify-center items-center text-[20px]">
              <CgDetailsMore />
            </div>
            <div className="w-full flex flex-col items-start justify-center p-4 space-y-2">
              <div className="space-y-2 text-left">
                <p className="">
                  Nama Tamu : <span className="selectedName font-bold"></span>
                </p>
                <p>
                  Alamat :{" "}
                  <span className="font-bold">{selectedRow.address}</span>
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="w-1/2 space-y-2 flex flex-col items-start">
                  <p>
                    Kedatangan :{" "}
                    {selectedRow.isArrived === true ? (
                      <button
                        onClick={(e) => handleUpdate(e)}
                        className="w-16 h-9 bg-isArrived text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-isArrived/40"
                      >
                        Sudah
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleUpdate(e)}
                        className="w-16 h-9 bg-notArrived text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-notArrived/40"
                      >
                        Belum
                      </button>
                    )}
                  </p>
                  <p>
                    Undangan :{" "}
                    {selectedRow.isSpread === true ? (
                      <button className="w-16 h-9 bg-isArrived text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-isArrived/40">
                        Sudah
                      </button>
                    ) : (
                      <button className="w-16 h-9 bg-notArrived text-white font-bold rounded-md shadow-black/40 shadow-md active:bg-notArrived/40">
                        Belum
                      </button>
                    )}
                  </p>
                </div>
                <div className="w-1/2 space-y-2 flex flex-col items-start">
                  <p>
                    Tanggal :{" "}
                    <span className="font-bold">{selectedRow.date}</span>
                  </p>
                  <p>
                    Waktu :{" "}
                    <span className="font-bold">
                      {selectedRow.time} {selectedRow ? "WIB" : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[150px] h-[180px] text-center bg-notArrived rounded-lg relative p-4 shadow-black/40 shadow-lg">
            <div className="w-8 h-8 rounded-md bg-bege-two absolute left-5 top-[-20px] shadow-black/40 shadow-md text-icon flex justify-center items-center text-[20px]">
              <BsHourglassSplit />
            </div>
            <p>Total Belum Datang</p>
            <p className="absolute top-[40%] left-[40%] text-6xl font-bold">
              {getArriving().hasnotArrived.length}
            </p>
          </div>
          <div className="w-[150px] h-[180px] text-center bg-isArrived rounded-lg relative p-4 shadow-black/40 shadow-lg">
            <div className="w-8 h-8 rounded-md bg-bege-two absolute left-5 top-[-20px] shadow-black/40 shadow-md text-icon flex justify-center items-center text-[20px]">
              <MdVerified />
            </div>
            <p>Total Kedatangan</p>
            <p className="absolute top-[40%] left-[40%] text-6xl font-bold">
              {getArriving().arrived.length}
            </p>
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
                onChange={(e) => getFilter(e, data)}
                value={inputField}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[930px] h-[300px] p-4 bg-bege-two rounded-3xl shadow-black/40 shadow-lg mt-6 ag-theme-alpine overflow-hidden">
            <AgGridReact
              ref={gridRef}
              rowData={data}
              columnDefs={columnDefs}
              rowSelection={"single"}
              onGridReady={getApi}
              onSelectionChanged={onSelectionChanged}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
