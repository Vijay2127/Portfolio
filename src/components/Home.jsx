import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='h-[150px] border-r-[1px] mt-[0px]'></div>
        <div className='h-[5px] w-[5px] bg-red-400 rounded-full'></div>
        <h2 className='mt-4 text-black tracking-widest text-[12px] font-medium'>HELLO! MY NAME IS</h2>
        <h2 className='text-[22px] lg:text-[70px] md:text-[40px] sm:text-[20px] font-bold text-black tracking-widest mt-3 '>Vijayakumar</h2>
        <img className='w-[150px] h-[150px] bg-red-300 p-5 rounded-full mt-4' src="/introduction.jpeg" alt="" />
    </div>
  )
}

export default Home