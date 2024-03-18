"use client"
import { createContext, useState,useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import GroupSidebar from "../components/group_sidebar";
import { getGroup } from "../controllers/groups_controller";

export const LoaderContext = createContext()
const Layout = ({children}) => {
  const [loading,setLoading] = useState(false)
  const [group,setGroup] = useState(null)
  
    return ( <div>
 <div className="bg-white  min-h-screen overflow-x-hidden relative">
  {loading&&<div className="w-screen z-50 bg-gray-900 bg-opacity-30 min-h-screen flex justify-center items-center fixed">
  <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-t-transparent"></div> 
  </div>}
      <Header/>
      <LoaderContext.Provider value={{loading,setLoading,group,setGroup}}>
      <div className=" flex overflow-x-hidden">
        <GroupSidebar/>
        <div className=" bg-white h-screen ml-auto mt-24 w-9/12 py-8 px-12">
              {children}
        </div>
      </div>
      </LoaderContext.Provider>

    </div>
    </div> );
}
 
export default Layout;