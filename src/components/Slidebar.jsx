import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";

const Slidebar = () => {


  return (
   
        <div className='w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center
        mt-20'>
            <a className='text-black -rotate-90 tracking-widest w-[130px] cursor-pointer hover:scale-105 transition-all ease-in-out hover:text-red-500 ]' href="/public/Vijay_Resume.pdf" download={"Vijay_Resume.pdf"}>Download CV</a>
            <div className='flex flex-col gap-7 mb-10'>
                <a target='_blank' href="https://www.linkedin.com/in/vijayakumar-m-0276592b6/"><FaLinkedin className='cursor-pointer text-[20px] hover:scale-110 transition-all ease-in-out'/></a>
                <a target='_blank' href="https://github.com/Vijay2127"><FaGithub className='cursor-pointer text-[20px] hover:scale-110 transition-all ease-in-out text-black'/></a>
                <a target='_blank' href="https://www.instagram.com/vijay27_behappy/"><FaInstagram className='cursor-pointer text-[20px] hover:scale-110 transition-all ease-in-out text-red-500'/></a>

            </div>
        </div>
        
        
  
  )
}

export default Slidebar