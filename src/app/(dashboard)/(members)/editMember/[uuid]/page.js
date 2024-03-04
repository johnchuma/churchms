"use client"
import { useRouter } from "next/navigation";
import {addMember, editMember, getMember} from "@/app/controllers/members_controller"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import Spinner from '@/app/components/spinner'
import PageLoader from "@/app/components/pageLoader";

const Page = ({params}) => {

    const router = useRouter()
    const [uploading,setuploading] = useState(false)
    const [member,setMember] = useState(null)
    const [loading, setloading] = useState(false);

    useEffect(()=>{
      setloading(true)
      getMember(params.uuid).then((data)=>{
            setMember(data)
            setloading(false)
      })
    },[])
    return ( loading?<PageLoader/>: member&& <div>
        <Breadcrumb pageName="Edit member" prevLink="/members" prevPage="Members"/>
        <div className="py-12 px-8 bg-white shadow-lg mt-8">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setuploading(true)
          const data = {
            name :  e.target.name.value,
            phone :  e.target.phone.value,
            gender :  e.target.gender.value,
            age :  e.target.age.value,
          }
          editMember(member.id,data).then((data)=>{
          setuploading(false)
            router.back()
          })
        }}>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                    <label className="text-black">Member name</label>
                   <input defaultValue={member.name} name="name" className="border border-slate-300 rounded"
                    placeholder="Enter member name" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-black">Phone number</label>
                   <input defaultValue={member.phone} name="phone" className="border border-slate-300 rounded"
                    placeholder="Enter phone number" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-black">Gender</label>
                   <select defaultValue={member.gender} name="gender" className="border border-slate-300 rounded" 
                   placeholder="Enter price" >
                    <option >Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                   </select>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-black">Age</label>
                    <input defaultValue={member.age} name="age" className="border border-slate-300 rounded"
                    placeholder="Enter member age" />
                </div>
            </div>
            <button className="bg-primary justify-center flex py-4 w-48 mt-4 rounded text-white">
            {uploading?<Spinner/>:"Edit member"}
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;