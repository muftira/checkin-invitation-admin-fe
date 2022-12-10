import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import DaftarTamu from "./pages/DaftarTamu";
import InputTamu from "./pages/InputTamu";
import LoginAdmin from "./pages/Login";
import LoginClient from "./pages/LoginClient";
import Home from "./pages/Home";
import SidebarMenu from "./component/SidebarMenu";
import Navbar from "./component/Navbar";
import TextNavbar from "./component/TextNavbar";
import "./App.css";


function App() {
  const [isSidebar, setisSidebar] = useState(false)
  const location = useLocation()
  const page = location.pathname
  const dataFiltered = localStorage.getItem('data')

  const handleSidebar = () => {
    localStorage.setItem('isSidebar', false)
  }

  return (
    <div>
      <div className={page === '/home' ? '' : 'absolute h-screen w-full flex items-end z-20'}>
      <TextNavbar isSidebar={isSidebar} setisSidebar={setisSidebar}/>
        {page === '/admin' ? '' : page === '/' ? '': page === '/home' ? '' : <div className=" relative lg:flex hidden lg:flex-col lg:items-center xl:w-[200px] lg:w-[170px] h-[calc(100vh-100px)] bg-[#FAFAFA] rounded-tr-[40px] rounded-br-[40px] shadow-black/40 shadow-lg">
          <SidebarMenu />
        </div>}
        
        <div className='w-full h-[calc(100%-100px)] flex justify-end items-start overflow-y-auto scrollbar'>
          <Routes>
            <Route path="/" element={<LoginClient />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/dashboard" element={<DaftarTamu isSidebar={isSidebar} setisSidebar={setisSidebar} />} />
            <Route path="inputtamu" element={<InputTamu isSidebar={isSidebar} setisSidebar={setisSidebar} />} />
          </Routes>
        </div>
      </div>
      {page !== '/home' ? <div className="">
      <Navbar/>
      </div> : '' }
    </div>
  );
}

export default App;
