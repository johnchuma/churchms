"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";

import { getMembers } from "@/app/controllers/members_controller";
import { addGroupLeader, editGroupLeader, getGroupLeader } from "@/app/controllers/group_leaders_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading,group} = useContext(LoaderContext)
    const [members, setmembers] = useState([]);
    const [leader, setleader] = useState([]);

    const [seletedMember, setSeletedMember] = useState(null);

   useEffect(() => {
    setLoading(true)
    getGroupLeader(params.uuid).then((data)=>{
     setleader(data)
   
    })

    getMembers().then((data)=>{
        setmembers(data)
        setLoading(false)  
    })

    
   }, []);
    return ( <div>
        <Breadcrumb prevPage="Leaders"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            leadership: e.target.leadership.value,
            
          }
          editGroupLeader(leader.id,data).then((dat)=>{
          setLoading(false)
          toast.success("Saved changes")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Add leader</h1>
            <div className="grid grid-cols-1 gap-4">
              
                <FormGroup label="Leadership position" 
                inputField={<input defaultValue={leader.leadership} name="leadership"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter leadership position" />}/>
               
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Edit leader
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;