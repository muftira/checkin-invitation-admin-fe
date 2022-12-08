import React from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarSidebar() {
  const location = useLocation();
  const page = location.pathname;
  const dataFiltered = localStorage.getItem('data')
  return (
    <div>
      <div className="fixed w-full h-screen ">
        <div className="navbar bg-bege"></div>
      </div>
      <div className="fixed w-[200px] h-[110px]  text-white ml-[15%] text-2xl flex justify-center items-center">
        <p className="font-bold ml-[-170px]">
          {page === "/" ? (
            ""
          ) : page === "/admin" ? (
            ""
          ) : page === "/home" ? (
            ""
          ) : page === "/dashboard" ? (
            <div className="text-white w-full flex justify-center items-center">
              <GiHamburgerMenu className="mt-1 lg:hidden inline" />
              &ensp;Daftar Tamu
            </div>
          ) : dataFiltered ? (
            <div className="text-white w-full  flex justify-center items-center">
              <GiHamburgerMenu className="mt-1 lg:hidden inline"  />
              &ensp;Update Tamu
            </div>
          ) : (
            <div className="text-white w-full  flex justify-center items-center">
              <GiHamburgerMenu className="mt-1 lg:hidden inline"  />
              &ensp;Input Tamu
            </div>
          )}
        </p>
      </div>
    </div>
  );
}

export default NavbarSidebar;
