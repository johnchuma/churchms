"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addMember, editMember, getMember } from "@/app/controllers/members_controller";
import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addSourceOfIncome } from "@/app/controllers/source_of_income_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)

   
    return ( <div>
        <Breadcrumb prevPage="Income sources"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            groupId :  params.uuid,
            name :  e.target.name.value,
            allowPledging :   e.target.allowPledging.value=="true"?true:false,
            recordUserInfo:  e.target.recordUserInfo.value=="true"?true:false
          }
          addSourceOfIncome(data).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Add source of income</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Income source name" 
                inputField={<input name="name"  required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter source name" />}/>
                <FormGroup label="It records user info ?" 
                inputField={<select name="recordUserInfo" className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                >   <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>}/>
               <FormGroup label="It allows pledging ?" 
                inputField={<select name="allowPledging" className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                >   <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>}/>
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-sm justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add income source
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;