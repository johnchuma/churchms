"use client"
import { useContext, useEffect, useState } from "react";
import {timeAgo} from "@/app/utils/time_ago"
import Link from "next/link";
import {toast} from 'react-hot-toast'
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import Breadcrumb from "@/app/components/breadcrumb";

import { editIncomeCollection, getIncomeCollection, getIncomeCollections } from "@/app/controllers/income_collection_controller";
import { getSourceOfIncome } from "@/app/controllers/source_of_income_controller";
import { formatDate } from "@/app/utils/date_format";

const Page = ({params}) => {
    const [incomecollections,setIncomeCollections] = useState([])
    const [refresh,setrefresh] = useState(0)
    const {loading,setLoading} = useContext(LoaderContext)
    const [collection,setcollection] = useState(null)
    const [keyword, setkeyword] = useState('');
    const itemsPerPage  = 7;
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);

  

    useEffect(() => {
        setLoading(true)
        getIncomeCollection(params.uuid).then((data)=>{
            setcollection(data)
            setLoading(false)
        })
    }, [refresh]);

    return ( collection&& <div>
            <Breadcrumb prevPage="Collections" />
     
        <div className="flex justify-between items-start mt-5  ">
            <div className="flex flex-col">
            <h1 className='text-2xl font-medium text-slate-900'>{collection&&collection.name} payouts</h1>
            </div>
            <Link href={`/addPledgePayout/${params.uuid}`} className="bg-indigo-600 text-white
             py-2 px-3 text-base font-medium rounded-lg">Record payout</Link>
        </div>
        
        {
             incomecollections&&<div className=" py-0 text-start bg-white mt-4">
             <div className="flex justify-end">
                <input className="border-slate-300 rounded-lg py-1 text-base "  onChange={(e)=>{
                    setkeyword(e.target.value)
                    keyword.includes
                }} placeholder="Search here"/>
             </div>
             <div className="overflow-x-auto">
            {<table className="min-w-full  ">
                 <thead className="font-medium border-b border-slate-200 py-3 ">
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Date</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium">Paid</th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium"></th>
                     <th className="text-start py-2 text-base text-slate-900 font-medium"></th>
                 </thead>
                 <tbody className="space-y-2">
                    {collection.payouts.filter((item, index) => index + 1 > ((currentPage - 1) * itemsPerPage) && index + 1 <= (currentPage*itemsPerPage))
                    .map((item,key)=>{
                     return <tr className="" key={key}>
                     <td className="py-2 text-base">{formatDate(item.createdAt)}</td>
                     <td className="py-2 text-base">{item.amount}TSH</td>
                    
                     <td  className=" text-danger bg-opacity-20 font-medium">
                         <div className="cursor-pointer" onClick={()=>{
                            editIncomeCollection(collection.id,{payouts:[...collection.payouts.filter((e)=>e.id!=item.id)]}).then((data)=>{
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