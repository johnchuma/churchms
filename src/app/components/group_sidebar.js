"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const GroupSidebar = () => {
    const path = usePathname()
    return ( <div className="col-span-2 bg-slate-100 h-screen  py-10">
        <h1 className="text-sm px-6">MENU</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-sm font-medium ">
        {[
            {title:"Members",href:"/groupMembers"},
            {title:"Income sources",href:"/groupIncomeSources"},
            {title:"Leaders",href:"/groupLeaders"},
            {title:"Expenses",href:"/groupExpenses"},
            {title:"Plans",href:"/groupPlans"},
            {title:"Calenders",href:"/groupCalenders"},
            {title:"Files",href:"/groupFiles"}, 
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 text-white py-2 ":"bg-transparent"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        <h1 className="text-sm px-6 mt-5">COMMUNICATION</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-sm font-medium ">
        {[
            {title:"SMS",href:"/sendSMS"},
            {title:"Email",href:"/sendEmail"},
         
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 text-white py-2 ":"bg-transparent"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        
    </div> );
}
 
export default GroupSidebar;