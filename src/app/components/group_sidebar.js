"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";

const GroupSidebar = () => {
     const {group} = useContext(LoaderContext)
    const path = usePathname()
    return ( <div className="w-3/12 fixed overflow-scroll bg-gray-100 h-screen mt-24  py-10">
        <h1 className="text-base px-6">MENU</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Members",href:`/groupMembers`},
            {title:"Income sources",href:`/groupIncomeSources`},
            {title:"Leaders",href:`/groupLeaders`},
            {title:"Expenses",href:`/groupExpenses`},
            {title:"Tasks",href:`/groupTasks`},
            {title:"Calenders",href:`/groupCalender`},
            {title:"Files",href:`/groupFiles`}, 
         ].map((item)=>{
            return <Link className={`${path.includes(item.href)?"bg-indigo-600 text-white py-2 ":"bg-transparent hover:font-bold transition-all duration-100"} pl-10`} href={item.href+`/${group&&group.id}`}>{item.title}</Link>
          })}
        </div>
        <h1 className="text-base px-6 mt-5">COMMUNICATION</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"SMS",href:`/sendSms`},
            {title:"Email",href:`/sendEmail`},
         
         ].map((item)=>{
            return <Link className={`${path.includes(item.href)?"bg-indigo-600 text-white py-2 ":"bg-transparent hover:font-bold transition-all duration-100"} pl-10`} href={item.href+`/${group&&group.id}`}>{item.title}</Link>
          })}
        </div>
        
    </div> );
}
 
export default GroupSidebar;