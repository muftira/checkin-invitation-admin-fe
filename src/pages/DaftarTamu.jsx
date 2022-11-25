import React from 'react'

function Dashboard() {
  return (
    
        <div className='w-[calc(100vw-240px)] bg-red  flex flex-col pr-7 mb-10'>
          <div className='w-ful h-full space-y-10'>
          <div className='h-[250px] w-full bg-status-one rounded-[20px] shadow-black/40 shadow-lg flex justify-center items-center space-x-16 '>
                <div className='w-[320px] h-[200px] flex flex-col justify-center items-start space-y-4'>
                    <p className='font-bold text-2xl'>Status</p>
                    <p>Berikut ini adalah Statistik dari  Proses Kedatangan Tamu</p>
                </div>
                <div className='w-[320px] h-[150px] bg-bege-two flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px]'>
                    </div>
                </div>
                <div className='w-[320px] h-[150px] bg-bege-two flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px]'>
                    </div>
                </div>
                <div className='w-[320px] h-[150px] bg-bege-two flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px]'>
                    </div>
                </div>
            </div>
            <div className='h-[250px] w-full bg-status-two rounded-[20px] shadow-black/40 shadow-lg flex justify-center items-center space-x-16 '>
                <div className='w-[320px] h-[200px] flex flex-col justify-center items-start space-y-4'>
                    <p className='font-bold text-2xl'>Status</p>
                    <p>Berikut ini adalah Statistik dari  Proses Sebaran Undangan</p>
                </div>
                <div className='w-[320px] h-[150px] bg-bege-two flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px]'>
                    </div>
                </div>
                <div className='w-[320px] h-[150px] bg-bege-two flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px]'>
                    </div>
                </div>
                <div className='w-[320px] h-[150px] bg-bege-two flex flex-col justify-center items-center rounded-xl relative'>
                    <div className='w-10 h-10 rounded-md bg-icon absolute left-6 top-[-25px]'>
                    </div>
                </div>
            </div>
          </div>
          <div className='w-full flex justify-center mt-10'>
            <div className='p-2 bg-bege-two shadow-black/40 shadow-lg flex justify-center items-center rounded-lg font-bold text-2xl'>
              <p>Daftar Tamu</p>
            </div>
          </div>
          <div className='w-full h-[400px] bg-bege-two rounded-3xl shadow-black/40 shadow-lg mt-6'>
            <div>

            </div>
          </div>

        </div>
    
  )
}

export default Dashboard