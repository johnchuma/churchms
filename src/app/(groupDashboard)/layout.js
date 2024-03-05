"use client"
import { createContext, useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import GroupSidebar from "../components/group_sidebar";
export const LoaderContext = createContext()
const Layout = ({children}) => {
  const [loading,setLoading] = useState(false)
    return ( <div>
 <div className="bg-white  min-h-screen overflow-x-hidden relative">
  {loading&&<div className="w-screen bg-gray-900 bg-opacity-30 min-h-screen flex justify-center items-center fixed">
  <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-t-transparent"></div> 
  </div>}
      <Header/>
      <div className="grid grid-cols-11 overflow-x-hidden">
        <GroupSidebar/>
        <div className=" bg-white h-screen col-span-9 py-8 px-12">
          <LoaderContext.Provider value={{loading,setLoading}}>
              {children}
          </LoaderContext.Provider>
        </div>
      </div>
    </div>
    </div> );
}
 
export default Layout;