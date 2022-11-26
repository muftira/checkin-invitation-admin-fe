import React from 'react'

function KegiatanHarian() {
  return (
    <div className='w-[calc(100vw-240px)] bg-red  flex flex-col pr-7 mb-10'>
      <div className='w-full h-[250px] bg-bege-two rounded-xl shadow-black/40 shadow-lg flex flex-col justify-center items-center'>
      <form className='w-[95%] flex flex-col items-start'>
          <p className="text-sm mb-1 mt-4">Nama Tamu</p>
          <input
            className="ring-2 ring-neutral-400 rounded-md px-1 py-1 w-full text-sm"
            type="text"
            onChange=''
            required
          />
          <p className="text-sm mb-1 mt-4 ">Alamat/Instansi</p>
          <input
            className="ring-2 ring-neutral-400 rounded-md px-1 py-1 w-full text-sm"
            type="password"
            onChange=''
            required
          />
          <div className='w-full flex justify-center'>
          <button onClick='' className="w-[200px] h-9 bg-bege rounded-md mt-6 text-sm text-white shadow-black/40 shadow-lg font-bold active:bg-bege/80">
            Tambah Tamu
          </button>
          </div>
          
        </form>
      </div> 
    </div>
  )
}

export default KegiatanHarian