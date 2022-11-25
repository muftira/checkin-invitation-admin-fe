import React from "react";
import { useLocation } from "react-router-dom";


function NavbarSidebar() {
  const location = useLocation()
  const page = location.pathname
  return (
    
    <div>
      <div className="fixed w-full h-screen ">
        <div className="navbar bg-bege">   
        </div>
      </div>
      <div className="fixed w-[200px] h-[110px]  text-white ml-[15%] text-2xl flex justify-center items-center">
        <p className="font-bold ml-[-170px]">{page === '/' ? 'Daftar Tamu' : 'Input Tamu'}</p>
      </div>
    </div>
  );
}

export default NavbarSidebar;
