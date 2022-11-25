import React,{ useState } from 'react'
import Profil from "./Profil";
import { useNavigate, useLocation } from "react-router-dom";
import { RiHomeLine } from 'react-icons/ri'
import { IoCreateOutline } from 'react-icons/io5'

function SidebarMenu() {
    const [active, setActive] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const page = location.pathname
    
  return (
    <div>
        <div className='text-left text-font mt-10 flex flex-col space-y-1 '>
            <p className='font-bold mb-6'>Menu</p>
            <button className={`${page !== '/' ? 'p-2 flex justify-center items-center' : 'bg-[#1C1C1C] p-2 rounded-lg text-white flex justify-center items-center shadow-black/40 shadow-lg'} `} onClick={(e) => navigate('/')}> <RiHomeLine/>&ensp; Daftar Tamu</button>
            <button className={`${page !== '/' ? 'bg-[#1C1C1C] p-2 rounded-lg text-white flex justify-center items-center shadow-black/40 shadow-lg' : 'p-2 flex justify-center items-center '} `} onClick={(e) => navigate('/inputtamu')}> <IoCreateOutline/> &ensp; Input Tamu</button>
        </div>
    </div>
  )
}

export default SidebarMenu