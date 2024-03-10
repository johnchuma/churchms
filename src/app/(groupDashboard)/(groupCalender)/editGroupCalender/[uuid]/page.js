"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";

import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { editGroupCalender, getGroupCalender } from "@/app/controllers/group_calender_controller";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { timestampToDate } from "@/app/utils/timestamp_to_date";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [groupCalender, setgroupCalender] = useState(null);
    
    useEffect(()=>{
        setLoading(true)
        getGroupCalender(params.uuid).then((data)=>{
          setgroupCalender(data)
          setLoading(false)
        })
      },[])
    return ( groupCalender&& <div>
        <Breadcrumb prevPage="Calender"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            date : Timestamp.fromDate(new Date(e.target.date.value)) ,
            title :  e.target.title.value,
            description :  e.target.description.value,
          }
          editGroupCalender(params.uuid,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes Saved")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit source of income</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Event title" 
                inputField={<input name="title" defaultValue={groupCalender.title}  required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter event title" />}/>
            
                 <FormGroup label="Event date" 
                inputField={<input type="date" name="date" 
                defaultValue={timestampToDate(groupCalender.date)}
                   required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"/>}/>
               
                <FormGroup label="Event description" 
                inputField={<textarea name="description" defaultValue={groupCalender.description}  required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter event description" />}/>
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-sm justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Edit event
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;