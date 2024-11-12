import React from 'react'
import Aboutme from '../shared/Aboutme'

const Skills = () => {

    const skills=[
        {
            id:1,
            title:Aboutme.Frontend,
            desc:Aboutme.Frontdesc
        },
        {
            id:2,
            title:Aboutme.backend,
            desc:Aboutme.backdesc
        },
        {
            id:3,
            title:Aboutme.framework,
            desc:Aboutme.frameworkdesc
        },

    ]

  return (
    <div className='px-12 mt-7'>
        <div className='flex items-center justify-center'>
            <div className='w-[20px] h-[10px] bg-red-500 rounded-full'></div>
            <div className='border-[1px] w-full mt-[2px] mx-2'></div>
            <h2 className='text-[30px] font-bold'>{Aboutme.Skill}</h2>
            
            <div className='border-[1px] w-full mt-[2px] mx-2'></div>
            <div className='w-[20px] h-[10px] bg-red-500 rounded-full'></div>
        </div>

        <div className='flex justify-around mt-10 gap-10'>
            {skills.map((items) =>(
               
                    <div key={items.id} className='text-center'>
                        <h2 className='font-bold text-[20px]'>{items.title}</h2>
                        <h2 className='text-gray-400 mt-3'>{items.desc}</h2>
                    </div>
             
            ))}
        </div>
    </div>
  )
}

export default Skills