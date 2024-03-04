"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const path = usePathname()
    return ( <div className="col-span-2 bg-slate-50 h-screen  py-10">
        <h1 className="text-sm px-6">FEATURES</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-sm font-medium ">
        {[
            {title:"Home",href:"/"},
            {title:"Members",href:"/members"},
            {title:"Groups",href:"/groups"},
            {title:"Reports",href:"null"},
            {title:"Calender",href:"/calender"},
            {title:"Blog",href:"null"},
            {title:"Anouncements",href:"null"} ,
            {title:"Daily scriptures",href:"null"},
            {title:"Sermons",href:"null"}, 
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 text-white py-2 ":"bg-transparent"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        <h1 className="text-sm px-6 mt-5">ORDERS</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-sm font-medium ">
        {[
            {title:"Social banners/posters",href:"/WES"},
            {title:"Musicians & engineers",href:"null"},
            {title:"Instruments",href:"/groups"},
            {title:"Decorations",href:"null"},
           
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 text-white py-2 ":"bg-transparent"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        <h1 className="text-sm px-6 mt-5">SOCIAL</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-sm font-medium ">
        {[
            {title:"Our website",href:"/WES"},
            {title:"Youtube channel",href:"null"},
            {title:"Facebook page",href:"/groups"},
            {title:"Instagram",href:"null"},
           
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 text-white py-2 ":"bg-transparent"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        
    </div> );
}
 
export default Sidebar;