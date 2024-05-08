"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addSourceOfIncome } from "@/app/controllers/source_of_income_controller";
import { addGroupFile } from "@/app/controllers/group_files_controller";
import { getLink } from "@/app/utils/get_link";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [selectedType,setSelectedType] = useState('Image')

   
    return ( <div>
        <Breadcrumb prevPage="Files"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            groupId :  params.uuid,
            type : e.target.type.value,
            title : e.target.title.value,
            description : e.target.description.value,
           
          }
          if(e.target.link != null ){
             data.link = e.target.link.value
              addGroupFile(data).then((dat)=>{
              setLoading(false)
              toast.success("added successfully")
                router.back()
              })
          }
          else{
              getLink(e.target.file.files[0]).then((response)=>{
                  data.link = response
                  addGroupFile(data).then((dat)=>{
                  setLoading(false)
                  toast.success("added successfully")
                    router.back()
                  })
              })
          }
        
         
        }}>
            <h1 className="text-2xl font-medium text-slate-800 mb-4">Add file</h1>
            <div className="grid grid-cols-1 gap-4">
            <FormGroup label="File type" 
                inputField={<select onChange={(e)=>{
                     setSelectedType(e.target.value)
                }} name="type"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg">
                    <option value="Image">Image</option>
                    <option value="Video">Video</option>
                    <option value="Audio">Audio</option>
                    <option value="Document">Document</option>
                </select>}/>
                {selectedType == "Image" &&
                <FormGroup label="Pick file" 
                inputField={<input name="file" type="file"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                 />}/>
                }
                  {selectedType == "Document" &&
                <FormGroup label="Pick file" 
                inputField={<input name="file" type="file"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                 />}/>
                }
                  {selectedType == "Video" &&
                  <div className="space-y-4">
                    <FormGroup label="Video link" 
                inputField={<input name="link" placeholder="Enter video link"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                 />}/>
              
                  </div>
                
                }
                
                {selectedType == "Audio" &&<div className="space-y-4">
                <FormGroup label="Audio link" 
                inputField={<input name="link" placeholder="Enter audio link"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                 />}/>
               
                </div>
                
                }
                 <FormGroup label="Title" 
                inputField={<input name="title" placeholder="Enter title"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                 />}/>
                 <FormGroup label="Description" 
                inputField={<textarea name="description" placeholder="Enter description"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                 />}/>
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add file
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;