import React from "react";

function Profil() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[100px] h-[100px] rounded-full bg-[#D9D9D9] flex justify-center items-center mt-10 mb-6">
        Foto
      </div>
      <div className="text-center">
        <p className="font-bold">Aji Kurniawan</p>
        <p className="text-sm text-[#666666]">Administrator</p>
      </div>
    </div>
  );
}

export default Profil;
