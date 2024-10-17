import React from 'react'
import Cards from '@/components/Cards'
import { ArrowUp, Menu, Trash2 } from 'lucide-react'

const page = () => {
  return (
    <>
    <div className='w-[25vw] h-[90.8vh] bg-#09090b top-[55px] sticky rounded-md m-1 flex flex-col items-center gap-3 p-2 border-zinc-800 border-[0.5px]'>
      <div className='h-auto px-[5px] py-[10px] bg-#18181b w-[90%] rounded-md flex justify-center items-center overflow-hidden border-zinc-800 border-[0.5px]'>
        <h3 className='text-2xl font-extrabold text-white'> Assigned By </h3>
      </div>
    </div>
    <div className='h-auto w-auto bg-#09090b m-2 flex flex-col items-start gap-6 pt-[50px] '>
      
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    <div className='h-[90.8vh] w-[35vw] rounded-md bg-#09090b top-[55px] sticky m-2 flex flex-col border border-zinc-800 border-1'>
      <div className='text-white flex justify-between m-1 p-3'>
      <Trash2 />
        <Menu />
      </div>
    <div className='h-[1px] w-full bg-zinc-800'></div>
    <div className='flex flex-row p-1 justify-between'>
      <div className='flex flex-row p-0'>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJjy2EHvBhqzTo7eXNWTeMxwzhom1dc9hNQwIQoVpZ883BlfA=s96-c" alt="" className='cardimg m-2 rounded-full p-[1px]' />
                    <h1 className='text-2xl font-semibold text-white flex p-2 items-center'>Title Hello World</h1>
                </div>
                <div className=' text-white font-thin text-xs flex m-2 items-end'>
                  <p>time</p>
                  
                </div>
                </div>

                <div className='h-[1px] w-full bg-zinc-800'></div>

                <div className='h-[40vh] text-sm font-inter font-poppins text-white flex p-3'>
                    <span>dfghjkln siush dfshd fiukajsnkdxcshdf sdf  sdfhv sdfh soidlzkf sdkf sdkzf sdkzf ;</span>
                </div>
                <div className='h-[1px] w-full bg-zinc-800'></div>
                <div className='p-3 text-white flex flex-row'>
                  <p>Priority : High</p>
                  <ArrowUp />
                    {/* <ArrowRight /> */}
                    {/* <ArrowDown /> */}
                </div>
                <div className='h-[1px] w-full bg-zinc-800'></div>
                <div className='p-3 text-white flex flex-col items-center'>
                  <p>Assigned To</p>
                  <div className='h-[1px] w-[50%] bg-zinc-800'></div>
                </div>
                <div className='flex flex-row  text-white justify-start align-middle items-center'>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJjy2EHvBhqzTo7eXNWTeMxwzhom1dc9hNQwIQoVpZ883BlfA=s96-c" alt="" className='cardimg2 m-2 rounded-full ' />
                    Arjun, 
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJjy2EHvBhqzTo7eXNWTeMxwzhom1dc9hNQwIQoVpZ883BlfA=s96-c" alt="" className='cardimg2 m-2 rounded-full ' />
                    Tejas
                    </div>
    </div>

    
    
    
    
    
    
    </>
  )
}

export default page