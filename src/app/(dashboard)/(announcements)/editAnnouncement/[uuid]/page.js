"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { addAnnouncement, editAnnouncement } from "@/app/controllers/announcements_controller";
import { LoaderContext } from "@/app/(dashboard)/layout";
import { getAnnouncement } from "@/app/controllers/announcements_controller";


const Page = ({ params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [selectedType,setSelectedType] = useState("Video")
    const [announcement, setannouncement] = useState(null);
    useEffect(() => {
      setLoading(true)
      getAnnouncement(params.uuid).then((data)=>{
        setannouncement(data)
      setLoading(false)

      })
    }, []);
    return ( announcement&&<div>
        <Breadcrumb prevPage="Announcements"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          let data = {
            announcement :  e.target.announcement.value,
            
          }  
          editAnnouncement(announcement.id,data).then((dat)=>{
            toast.success("Saved successfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">New announcement</h1>
            <div className="grid grid-cols-1 gap-4">
                 <FormGroup label="Write anouncement" 
                inputField={<textarea defaultValue={announcement.announcement} name="announcement" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write anouncement here" />}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Save changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;