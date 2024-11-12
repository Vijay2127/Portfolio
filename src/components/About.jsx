import React from 'react'
import Aboutme from '../shared/Aboutme'
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";

const About = () => {
  return (
    <div className='mt-5 text-center px-20 lg:px-28 md:px-24 sm:px-20 flex flex-col items-center'>
        <h2 className='text-[28px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-bold tracking-widest text-black'>{Aboutme.About_Heading}</h2>
        <ImQuotesLeft className='bg-red-300 text-[44px] p-3 rounded-full mt-2'/>
        <h2 className='my-5 text-gray-400 text-[16px] tracking-widest'>{Aboutme.About_Desc}</h2>
        <ImQuotesRight className='bg-red-300 text-[44px] p-3 rounded-full mt-2'/>
    </div>
  )
}

export default About