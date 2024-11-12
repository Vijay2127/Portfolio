import React from 'react'
import Aboutme from '../shared/Aboutme'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: Aboutme.ProjectTitle1,
            desc: Aboutme.ProjectDesc1,
            tech: Aboutme.ProjectTech1
        },
        {
            id: 2,
            title: Aboutme.ProjectTitle2,
            desc: Aboutme.ProjectDesc2,
            tech: Aboutme.ProjectTech2
        },
        {
            id: 3,
            title: Aboutme.ProjectTitle3,
            desc: Aboutme.ProjectDesc3,
            tech: Aboutme.ProjectTech3
        }
    ];
    return (
        <div className='px-12 mt-10'>
            <div className='flex items-center justify-start'>
                <div className='w-[20px] h-[10px] bg-red-500 rounded-full'></div>
                <div className='border-[1px] w-full mt-[2px] mx-2'></div>
                <h2 className='text-[28px] font-bold'>{Aboutme.Project}</h2>
                <div className='border-[1px] w-full mt-[2px] mx-2'></div>
                <div className='w-[20px] h-[10px] bg-red-500 rounded-full'></div>
            </div>
            <div className='flex flex-col justify-around mt-4 mx-1 gap-6 border-l-[1px] px-1'>
                {projects.map((item) => (

                    <div key={item.id} className='flex flex-col items-start'>
                        <div className='flex items-center w-full'>
                            <div className='border-b-[1px] border-gray-300 flex-grow max-w-[50px] mr-2'></div>
                            <h2 className='font-bold text-[20px]'>{item.title}</h2>
                        </div>
                        <div className='flex items-start w-full mt-2'>
                            <div className='border-b-[1px] border-gray-300 mr-2'></div>
                            <h2 className='text-gray-400'>{item.desc}</h2>
                        </div>
                        <div className='flex items-center w-full mt-2'>
                            <div className='border-b-[1px] border-gray-300 mr-2'></div>
                            <h2 className='text-red-700 font-sem'>{item.tech}</h2>

                        </div>

                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default Projects