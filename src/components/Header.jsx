import React from 'react'
import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import { HashLink as LinkTo } from 'react-router-hash-link';
const Header = () => {

    const menu=[
        {
            id:1,
            name:"HOME",
            path:"#home"
        },
        {
            id:2,
            name:"SKILLS",
            path:"#skills"
        },
        {
            id:3,
            name:"PROJECTS",
            path:"#projects"
        },
       
    ];
  
  return (
   
    <div className='fixed top-0 left-0 w-full z-10 flex text-center items-center justify-between border-b-[1px] bg-white'>
        <div className='w-[90px] h-[90px] bg-black'>
            <h1 className='text-white text-5xl p-5'>V</h1>
        </div>
        <div className='flex gap-14'>
            {menu.map((item) =>(
                
                <LinkTo className='text-black hover:text-red-500 cursor-pointer' 
                key={item.id} to={item.path}>{item.name}</LinkTo>

            ))}
        </div>
        <div className='w-[90px] h-[90px] bg-red-500 flex items-center justify-center'>
           
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mvijaykumarpbt@gmail.com&body=Hello%20Vijay," target='_blank' className='text-white
             cursor-pointer text-5xl'>{<MdMailOutline className='hover:scale-110 transition-all ease-in-out hover:text-white'/>}</a>
        </div>
    </div>
   
  )
}

export default Header