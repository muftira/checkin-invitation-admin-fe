import React from "react";
import { MdClear } from 'react-icons/md';


function ClearFilter({getApi, setisCheckBox}) {
  const handleClear = (e) => {
        getApi()
        setisCheckBox(false)
    }
  return (
    <button onClick={(e) => handleClear(e)} className="w-full h-full bg-icon font-bold text-white shadow-black/40 shadow-md rounded-md flex justify-center items-center active:bg-[#1C1C1C]/40">
      <MdClear/> Clear
    </button>
  );
}

export default ClearFilter;
