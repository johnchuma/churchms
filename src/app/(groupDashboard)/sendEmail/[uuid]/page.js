"use client"
import { useContext, useEffect, useState } from "react";
import { deleteDesease, deleteMember, editMember, getMembers } from "@/app/controllers/members_controller";
import {timeAgo} from "@/app/utils/time_ago"
import Link from "next/link";
import PageLoader from '@/app/components/pageLoader'
import {toast} from 'react-hot-toast'
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import Breadcrumb from "@/app/components/breadcrumb";
import { getGroup } from "@/app/controllers/groups_controller";
const Page = ({params}) => {
    const [members,setMembers] = useState([])
    const [refresh,setrefresh] = useState(0)
    const {loading,setLoading,group,setGroup} = useContext(LoaderContext)
    const [keyword, setkeyword] = useState('');
   const itemsPerPage  = 7;
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [selectedItem,setselectedItem] = useState(0)
    
    useEffect(()=>{
        setLoading(true)
       getMembers().then((data)=>{
        setMembers(data)
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
            <h1 className='text-2xl font-bold text-slate-900'>Members of {group&&group.name}</h1>
            <div className="grid grid-cols-2 gap-8 text-center  mt-5">
            {[`Members`,'Add member'].map((item,key)=>
            <p key={key} onClick={()=>{
                setselectedItem(key)
            }} className={` font-medium text-base cursor-pointer py-2
             ${selectedItem==key?'border-b-2 border-indigo-600 text-slate-900':
             'text-gray-500'}`}  >{item}</p>)}
           </div>
            </div>
       
        </div>
        <div className="border-b border-slate-300 w-full mb-5"></div>

        {
             members&&<div className=" py-0 text-start bg-white">
             <div className="flex justify-end">
                <input className="border-slate-300 rounded-lg py-1 text-base "  onChange={(e)=>{
                    setkeyword(e.target.value)
                    keyword.includes
                }} placeholder="Search here"/>
             </div>
             <div className="overflow-x-auto">
            {selectedItem==0&&<table className="min-w-full  ">
                 <thead className="font-medium border-b border-slate-200 py-3 ">
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Created</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Name</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Gender</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Address</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Phone number</th>               
                     <th className="text-start py-2 text-base text-slate-900 font-medium"></th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium"></th>
                 </thead>
                 <tbody className="space-y-2">
                    {members.filter((item)=>item.groups.includes(params.uuid)).filter((item)=>`${item.name}`.toLowerCase().includes(keyword.toLowerCase())).filter((item, index) => index + 1 > ((currentPage - 1) * itemsPerPage) && index + 1 <= (currentPage*itemsPerPage))
                    .map((item,key)=>{
                     return <tr className="" key={key}>
                     <td className="py-2 text-base">{timeAgo(item.createdAt.toDate())}</td>
                     <td className="py-2 text-base">{item.name}</td>
                     <td className="py-2 text-base">{item.gender}</td>
                     <td className="py-2 text-base">{item.address}{item.groups.length}</td>
                     <td className="py-2 text-base">{item.phone}</td>
                     <td  className=" bg-opacity-20  font-bold">
                      
                     <svg onClick={()=>{
                           setLoading(true)
                            let groups = item.groups;
                            let payload = {
                                groups:[...groups.filter((item)=>item!=params.uuid)]
                            }
                           editMember(item.id,payload).then((data)=>{
                           setrefresh(refresh+1)
                           setLoading(false)
                           toast.success("member is removed successfully")
                           })
                         }} xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                       className="w-5 h-5 text-red-600 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>


                 
                  </td>
                     <td  className=" text-danger bg-opacity-20 font-bold">
                      
                     </td>
                     </tr>
                    })}
 
                 </tbody>
             </table>}
             {selectedItem==1&&<table className="min-w-full  ">
                 <thead className="font-medium border-b border-slate-200 py-3 ">
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Created</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Name</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Gender</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Address</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Phone number</th>               
                     <th className="text-start py-2 text-base text-slate-900 font-medium"></th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium"></th>
                 </thead>
                 <tbody className="space-y-2">
                    {members.filter((item)=>!item.groups.includes(params.uuid)).filter((item)=>`${item.name}`.toLowerCase().includes(keyword.toLowerCase())).filter((item, index) => index + 1 > ((currentPage - 1) * itemsPerPage) && index + 1 <= (currentPage*itemsPerPage))
                    .map((item,key)=>{
                     return <tr className="" key={key}>
                     <td className="py-2 text-base">{timeAgo(item.createdAt.toDate())}</td>
                     <td className="py-2 text-base">{item.name}</td>
                     <td className="py-2 text-base">{item.gender}</td>
                     <td className="py-2 text-base">{item.address}</td>
                     <td className="py-2 text-base">{item.phone}</td>
                     <td  className=" bg-opacity-20  font-bold">
                      
                         <svg onClick={()=>{
                           setLoading(true)
                            let groups = item.groups??[];
                            let payload = {
                                groups:[...groups,params.uuid]
                            }
                           editMember(item.id,payload).then((data)=>{
                           setrefresh(refresh+1)
                           setLoading(false)
                           toast.success("member is added successfully")
                           })
                         }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                         stroke="currentColor" className="w-5 h-5 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>

                    
                     </td>
                     <td  className=" text-danger bg-opacity-20 font-bold">
                       
                     </td>
                     </tr>
                    })}
 
                 </tbody>
             </table>}
             
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
                    }} className={` py-1 px-2 rounded bg-opacity-90 text-indigo-600 font-bold`}>Next</button>

                </div>

             </div>
             </div>
         </div>
        }
        
    </div> );
}
 
export default Page;