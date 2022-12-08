import React, { useState, useEffect } from "react";
import { postData, updateData } from "../utils/axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function KegiatanHarian() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dataFiltered = JSON.parse(localStorage.getItem('data')) 
  const navigate = useNavigate()
  
  
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      if(dataFiltered){ 
        setName(dataFiltered.name)
        setAddress(dataFiltered.address)
        }
    }else{
      navigate('/admin')
    }
    
  }, [])
  

  const addData = (e, name, address) => {
    e.preventDefault();
    if (name && address) {
      if (dataFiltered) {
        updateData(dataFiltered._id, name, address)
        .then((res) => {
          swal({
            title: "Berhasil diubah!",
            icon: "success",
            button: "Tutup !",
          });
          setName("");
          setAddress("");
          localStorage.removeItem("data");
          navigate('/dashboard')
          console.log(res);
        })
        .catch((err) => console.log("GAGAL =>", err))
      }else{
        postData(name, address)
        .then((res) => {
          swal({
            title: "Berhasil ditambahkan!",
            text: `Tamu Bernama ${res.data.name}`,
            icon: "success",
            button: "Tutup !",
          });
          setName("");
          setAddress("");
          console.log(res.data);
        })
        .catch((err) => {
          console.log("GAGAL =>", err);
        });
      }
    } else {
      return swal({
        title: "Lengkapi Data !",
        icon: "warning",
        button: "Tutup!",
      });
    }
  };

  function handleClear(e){
    localStorage.removeItem('data')
    setName('')
    setAddress('')
    navigate('/dashboard')
  }

  

  return (
    <div className="w-[calc(100vw-240px)] bg-red  flex flex-col pr-7 mb-10">
      <div className="w-full h-[150px] bg-bege-two rounded-xl shadow-black/40 shadow-lg flex flex-col justify-center items-center">
        <form className="w-[95%] flex flex-col items-start">
          <div className="w-full flex justify-center items-center space-x-10">
            <div className="w-1/2">
              <p className="text-sm mb-1 mt-4 font-bold">Nama Tamu</p>
              <input
                className="ring-2 ring-neutral-400 rounded-md px-1 py-1 w-full text-sm"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="w-1/2">
              <p className="text-sm mb-1 mt-4 font-bold">Alamat/Instansi</p>
              <input
                className="ring-2 ring-neutral-400 rounded-md px-1 py-1 w-full text-sm"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            {dataFiltered ? <div className="space-x-4"><button
              onClick={(e) => handleClear(e)}
              className="w-[200px] h-9 bg-icon rounded-md mt-6 text-sm text-white shadow-black/40 shadow-lg font-bold active:bg-[#1C1C1C]/40"
            >
              Cancel
            </button>
            <button
              onClick={(e) => addData(e, name, address)}
              className="w-[200px] h-9 bg-[#1C1C1C] rounded-md mt-6 text-sm text-white shadow-black/40 shadow-lg font-bold active:bg-[#1C1C1C]/40"
            >
              Update Tamu
            </button></div> : <button
              onClick={(e) => addData(e, name, address)}
              className="w-[200px] h-9 bg-[#1C1C1C] rounded-md mt-6 text-sm text-white shadow-black/40 shadow-lg font-bold active:bg-[#1C1C1C]/40"
            >
              Tambah Tamu
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default KegiatanHarian;
