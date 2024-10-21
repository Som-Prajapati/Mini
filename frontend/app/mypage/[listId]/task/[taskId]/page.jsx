'use client'
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import Create from '@/components/Create'
import Cards from '@/components/Cards'
import { ArrowUp, Menu, Trash2 } from 'lucide-react'
import DialogDemo from '@/components/DialogDemo'
import List from "@/components/List";
import { useRouter } from "next/navigation";


const Page = () => {

  const { data: session } = useSession()
  const router = useRouter()
  console.log("HELLO",session?.user?.image)
  const handleClick = () => {
    console.log("Helo")
    router.push(`/mypage/${1}/task/${1}`)
  }

  return (
    <>
    {/* Sidebar */}
    <div className='w-[25vw] h-[90.8vh] bg-#09090b top-[55px] sticky rounded-md m-1 flex flex-col items-center gap-3 p-1 border-zinc-800 border-[0.5px] '>
      <div className='h-auto px-[1px] py-[10px] bg-#18181b w-[90%] rounded-md flex flex-col gap-2 justify-center items-center '>
        <h3 className='text-2xl font-bold text-white'> My List </h3>
        <div className='w-[21vw] h-[0.5px] bg-zinc-700'></div>
        <div className="h-[71vh] overflow-y-scroll bg-#09090b ">
        <div className="flex flex-col ">
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div></div>
      </div>
      <div className=' fixed bottom-4'>
        <DialogDemo/>
      </div>
      </div>
      {/* Mypage */}
    <div className='h-auto w-auto bg-#09090b m-2 flex flex-col items-start gap-6 pt-[50px] '>
      
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
      <Cards image={session?.user?.image} onClick={handleClick} />
    </div>
    {/* Create */}
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
    <Create/>
    </>
  )
}

export default Page