"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addGroup } from "@/app/controllers/groups_controller";
import { useRouter } from "next/navigation";

import { useState,useContext } from "react";
import { LoaderContext } from "../../layout";
import toast from "react-hot-toast";


const Page = () => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    return ( <div>
        <Breadcrumb prevPage="Groups" link="/groups"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            name :  e.target.name.value,
            type :  e.target.type.value
          }
          addGroup(data).then((dat)=>{
            toast.success("Added successfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">New church group</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Group name" 
                inputField={<input name="name" required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter group name" />}/>
               <FormGroup label="Group type" 
                inputField={<select name="type" className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
               >
                    <option value="Others">Others</option>
                    <option value="Main">Main</option>
                </select>}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-sm justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add group
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]