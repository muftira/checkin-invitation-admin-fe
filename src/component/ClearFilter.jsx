import React from "react";

function ClearFilter({getApi, setisCheckBox}) {
    const handleClear = (e) => {
        getApi()
        setisCheckBox(false)
    }
  return (
    <button onClick={(e) => handleClear(e)} className="w-full h-full bg-[#1C1C1C] font-bold text-white shadow-black/40 shadow-md rounded-md flex justify-center items-center">
      Clear
    </button>
  );
}

export default ClearFilter;
