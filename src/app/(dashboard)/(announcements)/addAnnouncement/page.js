"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext } from "react";
import toast from "react-hot-toast";
import { addAnnouncement } from "@/app/controllers/announcements_controller";
import { LoaderContext } from "@/app/(dashboard)/layout";


const Page = () => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
  const [selectedType,setSelectedType] = useState("Video")
    return ( <div>
        <Breadcrumb prevPage="Announcements"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          let data = {
            announcement :  e.target.announcement.value,
            
          }
          
          addAnnouncement(data).then((dat)=>{
            toast.success("Added successfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-medium text-slate-800 mb-4">New announcement</h1>
            <div className="grid grid-cols-1 gap-4">
                 <FormGroup label="Write anouncement" 
                inputField={<textarea name="announcement" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write anouncement here" />}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add announcement
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]