"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addGroup, editGroup, getGroup } from "@/app/controllers/groups_controller";
import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(dashboard)/layout";
import toast from "react-hot-toast";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const[group,setGroup] = useState(null)
    useEffect(()=>{
      setLoading(true)
      getGroup(params.uuid).then((data)=>{
        setGroup(data)
        setLoading(false)
      })
    },[])
    return ( group&& <div>
        <Breadcrumb prevPage="Groups" link="/groups"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            name :  e.target.name.value,
            type :  e.target.type.value
          }
          editGroup(group.id,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes saved")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit group</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Group name" 
                inputField={<input name="name" defaultValue={group.name} required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter group name" />}/>
                 <FormGroup label="Group type" 
                inputField={<select name="type" defaultValue={group.type}  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
               >
                    <option value="Main">Main</option>
                    <option value="Others">Others</option>
                </select>}/>
               
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Save changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]