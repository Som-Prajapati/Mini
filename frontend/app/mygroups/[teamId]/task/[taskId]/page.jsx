'use client'

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Create from '@/components/Create';
import MyTeamCard from '@/components/MyTeamCard';
import TeamList from '@/components/TeamList';
import { useRouter } from "next/navigation";
import { useGetMyTeamQuery, useGetMyTeamTaskQuery } from "@/services/queries";
import { useDeleteMyTeamTaskMutation } from "@/services/mutations";
import { Trash2, Menu, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import EmptyCard from '@/components/EmptyCard';
import DialogDemo from '@/components/DialogDemo';
import SkeletonDemo from "@/components/SkeletonDemo";

const ErrorComponent = ({ error }) => <div>Error: {error?.message || "An error occurred"}</div>;

const Page = ({ params }) => {
    const { data: session } = useSession();
    const router = useRouter();
    
    // Queries
    const { data: myTeamTask, isLoading, error } = useGetMyTeamTaskQuery(session?.user?.email, params.teamId);
    const { data: teamData, isLoading: teamLoading, error: teamError } = useGetMyTeamQuery(session?.user?.email);
    // const deleteTaskMutation = useDeleteMyTeamTaskMutation();
    const [task, setTask] = useState(null);

    useEffect(() => {
        if (myTeamTask?.newTask && params.taskId) {
            const currentTask = myTeamTask.newTask.find(item => item.task_id === parseInt(params.taskId, 10));
            setTask(currentTask);
        }
    }, [myTeamTask, params.taskId]);    

    if (isLoading || teamLoading || !myTeamTask || !teamData) return <SkeletonDemo />;
    if (error || teamError) return <ErrorComponent error={error || teamError} />;

    // Handlers
    console.log("HAAAAA",teamData)
    const handleRoute = (teamTitle, taskId = 10) => {
        router.push(`/mygroups/${teamTitle}/task/${taskId}`);
    };

    const handleDelete = async () => {
        // if (!task) return;
        // try {
        //     await deleteTaskMutation.mutateAsync({
        //         userMail: session?.user?.email,
        //         task_id: task.task_id,
        //     });
        //     console.log("Task deleted successfully");
        // } catch (error) {
        //     console.error("Error deleting task:", error);
        // }
        // console.log("hola")
    };
    console.log("LELELELEEL",task)

    return (
        <>
            {/* Sidebar */}
            <div className='w-[25vw] h-[90.8vh] bg-#09090b top-[55px] sticky rounded-md m-1 flex flex-col items-center gap-3 p-1 border-zinc-800 border-[0.5px]'>
                <div className='h-auto px-[1px] py-[10px] bg-#18181b w-[90%] rounded-md flex flex-col gap-2 justify-center items-center'>
                    <h3 className='text-2xl font-bold text-white'>Groups</h3>
                    <div className='w-[21vw] h-[0.5px] bg-zinc-700'></div>
                    <div className="h-[71vh] overflow-y-scroll bg-#09090b">
                        <div className="flex flex-col">
                        {Array.isArray(teamData?.teamTitle) && teamData.teamTitle.length > 0 ? (
                            teamData.teamTitle.map((item, index) => (
                                <TeamList
                                    key={index}
                                    listName={item.team_title}
                                    handleClick={() => handleRoute(item.team_title)}
                                />
                            ))
                        ) : (
                            <div className="text-white">No lists available</div>
                        )}
                        </div>
                    </div>
                </div>
                <div className='fixed bottom-4'>
                    <DialogDemo email={session?.user?.email} />
                </div>
            </div>

            {/* My Page */}
            <div className='h-auto w-auto bg-#09090b m-2 flex flex-col items-start gap-6 pt-[50px]'>
                {Array.isArray(myTeamTask) && myTeamTask.length > 0 ? (
                    myTeamTask.map((item, index) => (
                        <MyTeamCard
                            myTeamTask={myTeamTask}
                            key={index}
                            keye={index}
                            teamName={params.teamId}
                            handleClick={() => handleRoute(item.name)}
                        />
                    ))
                ) : (
                    <EmptyCard />
                )}
            </div>

            {/* Task Detail */}
            <div className='h-[90.8vh] w-[35vw] rounded-md bg-#09090b top-[55px] left-[10px] sticky m-2 flex flex-col border border-zinc-800'>
                <div onClick={handleDelete} className='text-white flex justify-between m-1 p-3 cursor-pointer'>
                    <Trash2 />
                    <Menu />
                </div>
                <div className='h-[1px] w-full bg-zinc-800'></div>
                {task && (
                    <>
                        <div className='flex flex-row p-1 justify-between'>
                            <h1 className='text-2xl font-semibold text-white flex p-2 items-center'>{task.title}</h1>
                            <div className='text-white font-thin text-xs flex m-2 items-end'>
                                <p>{task.start_d.split(' ')[0]}</p>
                            </div>
                        </div>
                        <div className='h-[1px] w-full bg-zinc-800'></div>
                        <div className='h-[40vh] text-sm font-inter text-white flex p-3'>
                            <span>{task.descrption}</span>
                        </div>
                        <div className='h-[1px] w-full bg-zinc-800'></div>
                        <div className='p-3 text-white flex flex-row'>
                            {task.priority === 1 && <span>Priority : Low <ArrowDown /></span>}
                            {task.priority === 2 && <span>Priority : Mid <ArrowRight /></span>}
                            {task.priority === 3 && <span>Priority : High <ArrowUp /></span>}
                        </div>
                        <div className='h-[1px] w-full bg-zinc-800'></div>
                        <div className='p-3 text-white flex flex-col items-center'>
                            <p>Assigned To</p>
                            <div className='h-[1px] w-[50%] bg-zinc-800'></div>
                        </div>
                    </>
                )}
            </div>
            <Create userMail={session?.user?.email} teamId={params.teamId} />
        </>
    );
};

export default Page;
