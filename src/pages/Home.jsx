import React from "react";
import NavbarClient from "../component/NavbarClient";

function Home() {
  return (
    <div className="w-full h-screen bg-bege flex flex-col justify-start items-center">
      <NavbarClient />
      <p className="flex lg:hidden text-white text-4xl mt-[100px]">Please View on Desktop Mode</p>
      <div className="lg:flex lg:flex-col justify-center items-center hidden">
        <p className="font-bold text-2xl mb-4">Detail Tamu</p>
        <div className="flex justify-center items-center space-x-4 mb-6"> 
          <div className="w-[600px] h-[150px]  bg-bege-two flex justify-center items-center rounded-lg shadow-black/40 shadow-lg">
            <div className="w-full flex flex-col items-start justify-center p-4 space-y-2">
              <div className="space-y-2 text-left">
                <p>Nama Tamu : </p>
                <p>Alamat : </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="w-1/2 space-y-2 flex flex-col items-start">
                  <p>Kedatangan : </p>
                  <p>Undangan : </p>
                </div>
                <div className="w-1/2 space-y-2 flex flex-col items-start">
                  <p>Tanggal : </p>
                  <p>Waktu : </p>
                </div>
              </div>
            </div>
          </div>
            <div className="w-[150px] h-[150px] bg-isArrived rounded-lg relative p-4 shadow-black/40 shadow-lg">
              <p>Total Kedatangan</p>
              <p className="absolute top-[40%] left-[40%] text-6xl font-bold">0</p>
            </div>
            <div className="w-[150px] h-[150px] bg-notArrived rounded-lg relative p-4 shadow-black/40 shadow-lg">
              <p>Total Belum Datang</p>
              <p className="absolute top-[40%] left-[40%] text-6xl font-bold">0</p>
            </div>
        </div>
        <p className="font-bold text-2xl mb-4">Daftar Tamu</p>
        <div>
          <div className="w-[930px] h-[250px]  bg-bege-two flex justify-center items-center rounded-lg shadow-black/40 shadow-lg">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
