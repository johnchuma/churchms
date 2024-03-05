"use client"
import { useEffect, useState } from "react";
import { deleteDesease, deleteMember, getMembers } from "../../../controllers/members_controller";
import {timeAgo} from "../../../utils/time_ago"
import Link from "next/link";
import PageLoader from '../../../components/pageLoader'
import {toast} from 'react-hot-toast'
const Page = () => {
    const [members,setMembers] = useState([])
    const [refresh,setrefresh] = useState(0)
    const [loading,setloading] = useState(false)
    const [keyword, setkeyword] = useState('');
   const itemsPerPage  = 7;
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [selectedItem,setselectedItem] = useState(0)

    useEffect(()=>{
        setloading(true)
       getMembers().then((data)=>{
        setMembers(data)
        settotalPages(Math.ceil(data.length/itemsPerPage))
        setloading(false)

       })
    },[refresh])
    return ( loading?<PageLoader/>: <div>
     
        <div className="flex justify-between items-start  ">
            <div className="flex flex-col">
            <h1 className='text-2xl font-bold text-slate-900'>Members</h1>
            <div className="grid grid-cols-7 text-center  mt-5 ">
            {[`All members`,'Children','Adults','Male',"Female",
            'Widows',"Babtised"].map((item,key)=>
            <p key={key} onClick={()=>{
                setselectedItem(key)
            }} className={`font-semibold text-lg cursor-pointer  py-2
             ${selectedItem==key?'border-b-2 border-indigo-600 text-slate-900':
             'text-gray-400'}`}  >{item}</p>)}
           </div>
            </div>
       
        <Link href="/addMember" className="bg-indigo-600 text-white py-2 px-3 text-sm font-bold rounded-lg">Add member</Link>
        </div>
        <div className="border-b border-slate-300 w-full mb-5"></div>

        {
             members&&<div className=" py-0 text-start bg-white">
             <div className="flex justify-end">
                <input className="border-slate-700 rounded-lg py-1 text-sm "  onChange={(e)=>{
                    setkeyword(e.target.value)
                    keyword.includes
                }} placeholder="Search here"/>
             </div>
             <div className="overflow-x-auto">
             <table className="min-w-full  ">
                 <thead className="font-medium border-b border-slate-200 py-3 ">
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Created</th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Name</th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Gender</th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Age</th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium">Phone number</th>               
                     <th className="text-start py-2 text-sm text-slate-900 font-medium"></th>
                     <th className="text-start py-2 text-sm text-slate-900 font-medium"></th>
                 </thead>
                 <tbody className="space-y-2">
                    {members.filter((item)=>`${item.name}`.toLowerCase().includes(keyword.toLowerCase())).filter((item, index) => index + 1 > ((currentPage - 1) * itemsPerPage) && index + 1 <= (currentPage*itemsPerPage))
                    .map((item,key)=>{
                     return <tr className="" key={key}>
                     <td className="py-2">{timeAgo(item.createdAt.toDate())}</td>
                     <td className="py-2">{item.name}</td>
                     <td className="py-2">{item.gender}</td>
                     <td className="py-2">{item.age}</td>
                     <td className="py-2">{item.phone}</td>
                     <td  className=" text-indigo-600 bg-opacity-20  font-bold">
                         <Link href={`/editMember/${item.id}`}>Edit</Link>
                     </td>
                     <td  className=" text-danger bg-opacity-20 font-bold">
                         <div className="cursor-pointer" onClick={()=>{
                            deleteMember(item.id).then((data)=>{
                                 setrefresh(refresh+1)
                                 toast.success('Deleted successfully')
                            })
                         }} href={"/member/adfafd"}>Delete</div>
                     </td>
                     </tr>
                    })}
 
                 </tbody>
             </table>
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