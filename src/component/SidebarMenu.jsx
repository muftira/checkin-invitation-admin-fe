import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { IoCreateOutline, IoLogOutOutline } from "react-icons/io5";

function SidebarMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;

  const dataFiltered = localStorage.getItem("data");

  const getSignout = (e) => {
    e.preventDefault();
    localStorage.removeItem("data");
    localStorage.removeItem("user");
    localStorage.removeItem('userClient')
    navigate("/admin");
  };

  const handleClickDaftarTamu = (e) => {
    e.preventDefault()
    localStorage.removeItem("data");
    navigate("/dashboard")
  }

  return (
    <div>
      <div className="text-left text-font mt-10 flex flex-col space-y-1 ">
        <p className="font-bold mb-6">Menu</p>
        <button
          className={`${
            page === "/dashboard"
              ? "bg-[#1C1C1C] p-2 rounded-lg text-white flex justify-center items-center shadow-black/40 shadow-lg"
              : "p-2 flex justify-center items-center"
          } `}
          onClick={(e) => handleClickDaftarTamu(e)}
        >
          {" "}
          <RiHomeLine />
          &ensp; Daftar Tamu
        </button>
        {dataFiltered ? (
          <button
            className={`${
              page === "/inputtamu"
                ? "bg-[#1C1C1C] p-2 rounded-lg text-white flex justify-center items-center shadow-black/40 shadow-lg"
                : "p-2 flex justify-center items-center "
            } `}
            onClick={(e) => navigate("/inputtamu")}
          >
            {" "}
            <IoCreateOutline /> &ensp; Update Tamu
          </button>
        ) : (
          <button
            className={`${
              page === "/inputtamu"
                ? "bg-[#1C1C1C] p-2 rounded-lg text-white flex justify-center items-center shadow-black/40 shadow-lg"
                : "p-2 flex justify-center items-center "
            } `}
            onClick={(e) => navigate("/inputtamu")}
          >
            {" "}
            <IoCreateOutline /> &ensp; Input Tamu
          </button>
        )}
      </div>
      <div
        onClick={(e) => getSignout(e)}
        className="flex justify-center items-center absolute bottom-6 cursor-pointer"
      >
        <IoLogOutOutline /> &ensp;<p>Sign out</p>
      </div>
    </div>
  );
}

export default SidebarMenu;
