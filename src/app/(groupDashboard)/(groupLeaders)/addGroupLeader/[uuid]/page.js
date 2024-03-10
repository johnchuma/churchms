"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";

import { getMembers } from "@/app/controllers/members_controller";
import { addGroupLeader } from "@/app/controllers/group_leaders_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading,group} = useContext(LoaderContext)
    const [members, setmembers] = useState([]);
    const [seletedMember, setSeletedMember] = useState(null);

   useEffect(() => {
    getMembers().then((data)=>setmembers(data))
   }, []);
    return ( <div>
        <Breadcrumb prevPage="Leaders"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            groupId :  params.uuid,
            leadership: e.target.leadership.value,
            userId :seletedMember.id,
            name :seletedMember.name,
            phone :seletedMember.phone,
          }
          addGroupLeader(data).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Add leader</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Select member" 
                inputField={<select onChange={(e)=>{
                  
                      setSeletedMember(members[e.target.value])
                }} name="userId"   required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                >   <option>Select member</option>
                    {members.map((item,index)=><option key={item.id} value={index}>{item.name}</option>)}
                </select>}/>
                <FormGroup label="Leadership position" 
                inputField={<input name="leadership"  required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter leadership position" />}/>
               
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-sm justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add leader
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;