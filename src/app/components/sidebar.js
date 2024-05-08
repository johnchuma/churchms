"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const path = usePathname()
    return ( <div className=" fixed w-3/12 bg-slate-100 h-screen overflow-scroll py-10">
        <h1 className="text-base px-6 mt-24">FEATURES</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Home",href:"/home"},
            {title:"Members",href:"/members"},
            {title:"Groups",href:"/groups"},
            {title:"Projects",href:"/projects"},
            {title:"Calender",href:"/calenders"},
            {title:"Blog",href:"/blogs"},
            {title:"Announcements",href:"/announcements"} ,
            {title:"Daily scriptures",href:"/scriptures"},
            {title:"Sermons",href:"/sermons"}, 
         ].map((item)=>{
            return <Link className={`${path.includes(item.href)?"bg-indigo-600 text-white py-2 ":"bg-transparent  hover:font-medium transition-all duration-100"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        <h1 className="text-base px-6 mt-5">ORDERS</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Social banners/posters",href:"/WES"},
            {title:"Musicians & engineers",href:"null"},
            {title:"Instruments",href:"/grou"},
            {title:"Decorations",href:"null"}
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 hover:font-medium text-white py-2 ":"bg-transparent hover:font-medium transition-all duration-100"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        <h1 className="text-base px-6 mt-5">SOCIAL</h1>
        <div className=" mt-3 flex flex-col space-y-3  text-base font-medium ">
        {[
            {title:"Our website",href:"/WES"},
            {title:"Youtube channel",href:"null"},
            {title:"Facebook page",href:"/gros"},
            {title:"Instagram",href:"null"},
           
         ].map((item)=>{
            return <Link className={`${path == item.href?"bg-indigo-600 text-white py-2 ":"bg-transparent hover:font-medium transition-all duration-100"} pl-10`} href={item.href}>{item.title}</Link>
          })}
        </div>
        
    </div> );
}
 
export default Sidebar;