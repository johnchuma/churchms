"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addGroupTask } from "@/app/controllers/group_tasks_controller";



const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)

   
    return ( <div>
        <Breadcrumb prevPage="Tasks"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            groupId :  params.uuid,
            title :  e.target.title.value,
            description :  e.target.description.value,
            isDone :  false
          }
          addGroupTask(data).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Add task</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Task title" 
                inputField={<input name="title"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter task" />}/>
                <FormGroup label="Task description" 
                inputField={<textarea name="description"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter task description" />}/>
               
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add task
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;