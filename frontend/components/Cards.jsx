import { ArrowDown, ArrowRight, ArrowUp, Pin } from 'lucide-react'
import React from 'react'

const Card = () => {
    return (
        <>
            <div className='bg-#09090b border border-zinc-800 border-1 w-auto h-[22vh] rounded-lg flex flex-col relative hover:bg-zinc-800'>
                <div className='flex flex-row '>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJjy2EHvBhqzTo7eXNWTeMxwzhom1dc9hNQwIQoVpZ883BlfA=s96-c" alt="" className='cardimg m-2 rounded-full p-[1px]' />
                    <h1 className='text-2xl font-semibold text-white flex p-2 items-center'>Title Hello World</h1>
                </div>
                <div className='text-sm font-inter font-poppins text-white flex pl-10 pr-1 py-1 overflow-hidden w-[70%] h-[auto]'>
                    <span>dfghjkln siush dfshd fiukajsnkdxcshdf sdf  sdfhv sdfh soidlzkf sdkf sdkzf sdkzf ;</span>
                </div>
                <div className='absolute right-10 top-2 w-auto flex flex-row gap-5 justify-center text-white'>
                    {/* <Pin /> */}
                    <ArrowUp />
                    {/* <ArrowRight /> */}
                    {/* <ArrowDown /> */}
                </div>
                <div className='absolute right-7 bottom-3 text-white font-thin text-xs'>
                    02/10/2024
                </div>
            </div>
        </>
    )
}

export default Card