import React,{ useState } from 'react'
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import SidebarMenu from "../component/SidebarMenu";

function TextNavbar({isSidebar, setisSidebar}) {
    const location = useLocation()
  const page = location.pathname
  const dataFiltered = localStorage.getItem('data')

  const handleSidebar = () => {
    setisSidebar(!isSidebar)
  }

  return (
    <div className="fixed top-0 w-[200px] h-[110px]  text-white ml-[15%] text-2xl flex justify-center items-center ">
        <p className="font-bold sm:ml-[-170px] ml-[-60px] cursor-pointer ">
          {page === "/" ? (
            ""
          ) : page === "/admin" ? (
            ""
          ) : page === "/home" ? (
            ""
          ) : page === "/dashboard" ? (
            <div onClick={() => handleSidebar()} className="text-white w-full flex justify-center items-center ">
                {isSidebar ? <MdClear className="mt-1 lg:hidden inline"/> : <GiHamburgerMenu className="mt-1 lg:hidden inline" />}
              
              &ensp;Daftar Tamu
              
            </div>
          ) : dataFiltered ? (
            <div onClick={() => handleSidebar()} className="text-white w-full  flex justify-center items-center">
              {isSidebar ? <MdClear className="mt-1 lg:hidden inline"/> : <GiHamburgerMenu className="mt-1 lg:hidden inline" />}
              &ensp;Update Tamu
            </div>
          ) : (
            <div onClick={() => handleSidebar()} className="text-white w-full  flex justify-center items-center">
              {isSidebar ? <MdClear className="mt-1 lg:hidden inline"/> : <GiHamburgerMenu className="mt-1 lg:hidden inline" />}
              &ensp;Input Tamu
            </div>
          )}
        </p>
      </div>
  )
}

export default TextNavbar