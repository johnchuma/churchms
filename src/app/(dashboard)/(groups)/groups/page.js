"use client"
import { useContext, useEffect, useState } from "react";
import { deleteDesease, deleteGroup, getGroups } from "@/app/controllers/groups_controller";
import {timeAgo} from "@/app/utils/time_ago"
import Link from "next/link";
import PageLoader from '@/app/components/pageLoader'
import {toast} from 'react-hot-toast'
import { LoaderContext } from "@/app/(dashboard)/layout";
const Page = () => {
    const [groups,setGroups] = useState([])
    const [refresh,setrefresh] = useState(0)
    const {loading,setLoading} = useContext(LoaderContext)
    const [keyword, setkeyword] = useState('');
   const itemsPerPage  = 7;
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [selectedItem,setselectedItem] = useState(0)

    useEffect(()=>{
        setLoading(true)
       getGroups().then((data)=>{
        setGroups(data)
        settotalPages(Math.ceil(data.length/itemsPerPage))
        setLoading(false)

       })
    },[refresh])
    return ( <div>
     
        <div className="flex justify-between items-center mb-5 ">
            <div className="flex flex-col">
            <h1 className='text-2xl font-medium text-slate-900'>Groups</h1>
    
            </div>
       
        <Link href="/addGroup" className="bg-indigo-600 text-white py-2 px-3 text-base font-medium rounded-lg">Add group</Link>
        </div>


        {
             groups&&<div className=" py-0 text-start bg-white">
             <div className="flex justify-end">
                <input className="border-slate-300 rounded-lg py-1 text-base "  onChange={(e)=>{
                    setkeyword(e.target.value)
                    keyword.includes
                }} placeholder="Search here"/>
             </div>
             <div className="overflow-x-auto mt-4">
            
                 <div className="grid gap-4 grid-cols-3">
                    {groups.filter((item)=>`${item.name}`.toLowerCase().includes(keyword.toLowerCase())).filter((item, index) => index + 1 > ((currentPage - 1) * itemsPerPage) && index + 1 <= (currentPage*itemsPerPage))
                    .map((item,key)=>{
                     return <Link href={`/groupMembers/${item.id}`} className="border-2 space-y-2 border-slate-3 hover:border-indigo-200 cursor-pointer  hover:bg-slate-50 rounded p-5 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <h1>
                        {item.name}
                        </h1>
                       </Link>
                    })}
 
                 </div>
            
             <div className="flex justify-between mt-4 text-base">
                <div>{currentPage} of {totalPages} pages</div>
                <div className="flex space-x-3">
                    <button onClick={()=>{
                        if(currentPage > 1){
                            setcurrentPage(currentPage-1)
                        }
                    }} className="">Prev</button>
                    <button onClick={()=>{
                         if(currentPage < totalPages){
                            setcurrentPage(currentPage+1)
                        }
                    }} className={` py-1 px-2 rounded bg-opacity-90 text-indigo-600 font-medium`}>Next</button>

                </div>

             </div>
             </div>
             
         </div>
        }
        
    </div> );
}
 
export default Page;