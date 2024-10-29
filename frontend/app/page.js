'use client'
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useCreateMyTaskMutation } from "@/services/mutations"
import { useGetUserQuery } from "@/services/queries";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession()
  console.log(session?.user)
  const { data, isLoading, error } = useGetUserQuery();
  console.log(data)
  const mutation = useCreateMyTaskMutation()
  const handleUserCreate = async () => {

    if (!session?.user) {
      return
    }

    const userEmail = session.user.email; // Get the user's email
    const userExists = data?.some(user => user.gmail === userEmail);
    console.log("HELOOOOOOO",userExists)
    if(userExists){
      console.log("User Already Exist in the Db")
      return
    }

    try {
      const result = await mutation.mutateAsync(
        session?.user, // Send the entire form object
        {
          onSuccess: (data) => {
            console.log("User created successfully:", data)
          },
          onError: (error) => {
            console.error("Mutation error:", error)
            console.error("Error response:", error.response?.data)
            alert("Failed to create user: " + (error.response?.data?.message || error.message))
          },
        }
      )
    } catch (error) {
      console.error("Submit error:", error)
      alert("Error creating user. Please try again.")
    }
  }
  useEffect(() => {
    handleUserCreate()
  }, [])
  
  // const { data, isLoading, error } = useGetUserQuery();

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
