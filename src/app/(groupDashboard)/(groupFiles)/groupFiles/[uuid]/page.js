"use client"
import { useContext, useEffect, useState } from "react";
import {timeAgo} from "@/app/utils/time_ago"
import Link from "next/link";
import PageLoader from '@/app/components/pageLoader' 
import {toast} from 'react-hot-toast'
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import Breadcrumb from "@/app/components/breadcrumb";
import { getGroup } from "@/app/controllers/groups_controller";
import { deleteGroupFile, getGroupFiles } from "@/app/controllers/group_files_controller";

const Page = ({params}) => {
    const [groupfiles,setGroupFiles] = useState([])
    const [refresh,setrefresh] = useState(0)
    const {loading,setLoading,group,setGroup} = useContext(LoaderContext)
    const [keyword, setkeyword] = useState('');
    const itemsPerPage  = 7;
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [selectedItem,setselectedItem] = useState(0)

    useEffect(()=>{
       setLoading(true)
       getGroupFiles(params.uuid).then((data)=>{
            setGroupFiles(data)
            settotalPages(Math.ceil(data.length/itemsPerPage))
            setLoading(false)
       })
    },[refresh])

    useEffect(() => {
        getGroup(params.uuid).then((data)=>setGroup(data))
    }, []);

    return ( <div>
            <Breadcrumb prevPage="Groups" link="/groups" />
     
        <div className="flex justify-between items-start mt-5  ">
            <div className="flex flex-col">
            <h1 className='text-2xl font-bold text-slate-900'>Files of {group&&group.name}</h1>
            </div>
            <Link href={`/addGroupFile/${params.uuid}`} className="bg-indigo-600 text-white
             py-2 px-3 text-sm font-bold rounded-lg">Add file</Link>
        </div>
        <div className="grid grid-cols-8 gap-8 text-center  mt-5">
            {[`Images`,'Video','Audio','Documents'].map((item,key)=>
            <p key={key} onClick={()=>{
                setselectedItem(key)
            }} className={` font-medium text-base cursor-pointer py-2
             ${selectedItem==key?'border-b-2 border-indigo-600 text-slate-900':
             'text-gray-500'}`}  >{item}</p>)}
           </div>
           <div className="border-b border-slate-300 w-full mb-5"></div>

        {
             groupfiles&&<div className=" py-0 text-start bg-white mt-4">
             <div className="flex justify-end">
                <input className="border-slate-300 rounded-lg py-1 text-sm "  onChange={(e)=>{
                    setkeyword(e.target.value)
                    keyword.includes
                }} placeholder="Search here"/>
             </div>
             <div className="overflow-x-auto">
            {<table className="min-w-full  ">
                 <thead className="font-medium border-b border-slate-200 py-3 ">
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Created</th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Amount</th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Description</th>             
                     <th className="text-start py-2 text-sm text-slate-900 font-medium"></th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium"></th>
                 </thead>
                 <tbody className="space-y-2">
                    {groupfiles.filter((item)=>`${item.name}`.toLowerCase().includes(keyword.toLowerCase())).filter((item, index) => index + 1 > ((currentPage - 1) * itemsPerPage) && index + 1 <= (currentPage*itemsPerPage))
                    .map((item,key)=>{
                     return <tr className="" key={key}>
                     <td className="py-2 text-sm">{timeAgo(item.createdAt.toDate())}</td>
                     <td className="py-2 text-sm">{item.amount}TSH</td>
                     <td className="py-2 text-sm">{item.description}</td>

    
                     <td  className=" text-indigo-600 bg-opacity-20  font-bold">
                         <Link href={`/editGroupFiles/${item.id}`}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                          className="w-5 h-5 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                         </Link>
                     </td>
                     <td  className=" text-danger bg-opacity-20 font-bold">
                         <div className="cursor-pointer" onClick={()=>{
                            deleteGroupFile(item.id).then((data)=>{
                                 setrefresh(refresh+1)
                                 toast.success('Deleted successfully')
                            })
                         }} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                       </svg>
                       </div>
                     </td>
                     </tr>
                    })}
 
                 </tbody>
             </table>}
            
             
             <div className="flex justify-between mt-4 text-sm">
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
                    }} className={` py-1 px-2 rounded bg-opacity-90 text-indigo-600 font-bold`}>Next</button>

                </div>

             </div>
             </div>
         </div>
        }
        
    </div> );
}
 
export default Page;