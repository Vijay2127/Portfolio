import React, { useEffect, useState } from 'react'

const Progressbar = () => {

  const [scrollbar,setScrollbar]=useState()
  useEffect(() =>{
    window.addEventListener("scroll",onscroll)
    return () => window.removeEventListener("scroll",onscroll)
  })

  const onscroll= () =>{
    const scrolltop=window.document.documentElement.scrollTop;
    const scrollheigth=window.document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const fullscrollheight=(scrolltop/scrollheigth)*100;
    setScrollbar(fullscrollheight);

    
  }
  
  return (
    <div className='bg-gray-200 w-1.5 fixed mt-[90px] h-full mb-4 ml-[-5px]'>
        <div className='bg-red-500 transition-all ease-out duration-500' style={{height:`${scrollbar}%`}}>

        </div>
    </div>
  )
}

export default Progressbar