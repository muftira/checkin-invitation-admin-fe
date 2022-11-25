import { Routes, Route } from "react-router-dom";
import DaftarTamu from "./pages/DaftarTamu";
import InputTamu from "./pages/InputTamu";
import Navbar from "./component/Navbar";
import SidebarMenu from "./component/SidebarMenu";
import "./App.css";

function App() {
  return (
    <div>
      <div className="absolute h-screen w-full flex items-end z-20">
        <div className=" fixed flex flex-col items-center w-[10%] h-[calc(100vh-100px)] bg-[#FAFAFA] rounded-tr-[40px] rounded-br-[40px] shadow-black/40 shadow-lg">
          <SidebarMenu />
        </div>
        <div className='w-full h-[calc(100%-100px)] flex justify-end items-start overflow-y-auto scrollbar'>
          <Routes>
            <Route path="/" element={<DaftarTamu />} />
            <Route path="inputtamu" element={<InputTamu />} />
          </Routes>
        </div>
      </div>
      <div className="">
        <Navbar />
      </div>
      
    </div>
  );
}

export default App;
