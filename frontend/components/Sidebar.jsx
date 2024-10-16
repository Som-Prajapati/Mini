import React from 'react'
import { MessageCircleMore, Settings,User,Users } from 'lucide-react'
import Link from 'next/link'; 

const Sidebar = () => {
  return (
    <div className='flex flex-row'>
    <div className='w-[4vw] h-[90.8vh] bg-#09090b top-[55px] sticky rounded-md m-1 border border-zinc-800 border-1'>
      <div className='flex justify-center items-center align-middle flex-col gap-7 mt-4  text-white'>
      {/* Link to the profile page */}
      <Link href="/mypage">
            <User /> {/* Use <a> tag inside <Link> */}
          </Link>

          {/* Link to the users page */}
          <Link href="/mygroups">
            <Users />
          </Link>

          {/* Link to the messages page */}
          <Link href="/mychats">
            <MessageCircleMore />
          </Link>

          {/* Link to the settings page */}
          <Link href="/mysettings">
            <Settings />
          </Link>
      </div>
    </div>
    
    </div>
  )
}

export default Sidebar