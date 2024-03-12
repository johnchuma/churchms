"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";

import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { editGroupTask, getGroupTask } from "@/app/controllers/group_tasks_controller";

const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [groupTask, setgroupTask] = useState(null);
    
    useEffect(()=>{
        setLoading(true)
        getGroupTask(params.uuid).then((data)=>{
          setgroupTask(data)
          setLoading(false)
        })
      },[])
    return ( groupTask&& <div>
        <Breadcrumb prevPage="Tasks"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            title :  e.target.title.value,
            description :  e.target.description.value,
          }
          editGroupTask(params.uuid,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes Saved")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit tasks</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Task title" 
                inputField={<input name="title" defaultValue={groupTask.title}   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter task" />}/>
                <FormGroup label="Task description" 
                inputField={<textarea name="description" defaultValue={groupTask.description}  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter task description" />}/>
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
             Save changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;