import { Routes, Route } from "react-router-dom";
import DaftarTamu from "./pages/DaftarTamu";
import InputTamu from "./pages/InputTamu";
import LoginAdmin from "./pages/Login";
import LoginClient from "./pages/LoginClient";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import SidebarMenu from "./component/SidebarMenu";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation()
  const page = location.pathname

  return (
    <div>
      <div className={page === '/home' ? '' : 'absolute h-screen w-full flex items-end z-20'}>
        {page === '/admin' ? '' : page === '/' ? '': page === '/home' ? '' : <div className=" relative flex flex-col items-center w-[10%] h-[calc(100vh-100px)] bg-[#FAFAFA] rounded-tr-[40px] rounded-br-[40px] shadow-black/40 shadow-lg">
          <SidebarMenu />
        </div>}
        
        <div className='w-full h-[calc(100%-100px)] flex justify-end items-start overflow-y-auto scrollbar'>
          <Routes>
            <Route path="/" element={<LoginClient />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/dashboard" element={<DaftarTamu />} />
            <Route path="inputtamu" element={<InputTamu />} />
          </Routes>
        </div>
      </div>
      {page !== '/home' ? <div className="">
        <Navbar />
      </div> : '' }
    </div>
  );
}

export default App;
