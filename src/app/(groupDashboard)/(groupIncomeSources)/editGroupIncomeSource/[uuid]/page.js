"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addMember, editMember, getMember } from "@/app/controllers/members_controller";
import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addSourceOfIncome, editSourceOfIncome, getSourceOfIncome } from "@/app/controllers/source_of_income_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [incomeSource, setincomeSource] = useState(null);
    
    useEffect(()=>{
        setLoading(true)
        getSourceOfIncome(params.uuid).then((data)=>{
          setincomeSource(data)
          setLoading(false)
        })
      },[])
    return ( incomeSource&& <div>
        <Breadcrumb  prevPage="Income sources"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            name :  e.target.name.value,
            allowPledging :  e.target.allowPledging.value,
            recordUserInfo: e.target.recordUserInfo.value
          }
          editSourceOfIncome(params.uuid,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes Saved")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit source of income</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Income source name" 
                inputField={<input defaultValue={incomeSource.name} name="name"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter source name" />}/>
                <FormGroup label="It records user info ?" 
                inputField={<select defaultValue={incomeSource.recordUserInfo} name="recordUserInfo" className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                >   <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>}/>
               <FormGroup label="It allows pledging ?" 
                inputField={<select defaultValue={incomeSource.allowPledging} name="allowPledging" className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                >   <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>}/>
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Edit income source
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;