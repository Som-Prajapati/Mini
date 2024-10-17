'use client'
import { signIn, signOut } from "next-auth/react";

import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  console.log(session?.user)

  return (
    <>
    <div className="flex flex-col ">
    <button className="w-[20vw] m-1 p-2 bg-gray-800 " onClick={async()=>{await signIn('google')}}>signIn</button>
    <button className="w-[20vw] m-1 p-2 bg-slate-500 " onClick={()=>{signOut()}}>LogOut</button>
    </div>

    </>
  );
}


// 'use client'
// import { useSession, SessionProvider } from 'next-auth/react';
// import { auth } from "../auth";


// export default async function Home() {
//   const session = await auth()
//   // const session = useSession();
//   return (
//     <>
//     {/* <SessionProvider> */}
//       {/* <p>Welcome {session?.user?.name}</p> */}
//     {/* </SessionProvider> */}
//     <h1>
//       {JSON.stringify(session, null, 2)}
//     </h1>
//     </>
//   );
// }
