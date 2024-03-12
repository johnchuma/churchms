"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addGroupCalender } from "@/app/controllers/group_calender_controller";
import { Timestamp } from "firebase/firestore";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)

   
    return ( <div>
        <Breadcrumb prevPage="Calenders"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            groupId :  params.uuid,
            date : Timestamp.fromDate(new Date(e.target.date.value)) ,
            title :  e.target.title.value,
            description :  e.target.description.value,
          }
          addGroupCalender(data).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Add event</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Event title" 
                inputField={<input name="title"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter event title" />}/>
                 <FormGroup label="Event date" 
                inputField={<input type="date" name="date"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                />}/>
                <FormGroup label="Event description" 
                inputField={<textarea name="description"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter event description" />}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add event
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;