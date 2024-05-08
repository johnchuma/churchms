"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext } from "react";
import toast from "react-hot-toast";
import { addBlog } from "@/app/controllers/blogs_controller";
import { LoaderContext } from "@/app/(dashboard)/layout";


const Page = () => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
  const [selectedType,setSelectedType] = useState("Video")
    return ( <div>
        <Breadcrumb prevPage="Blogs"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          let data = {
            title :  e.target.title.value,
            scriptures :  e.target.scriptures.value,
            introduction :  e.target.introduction.value,
            paragraph1 :  e.target.conclusion.value,
            paragraph2 :  e.target.paragraph1.value,
            paragraph3 :  e.target.paragraph2.value,
            paragraph4 :  e.target.paragraph3.value,
            conclusion :  e.target.paragraph4.value
          }
          
          addBlog(data).then((dat)=>{
            toast.success("Added successfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-medium text-slate-800 mb-4">New blog</h1>
            <div className="grid grid-cols-1 gap-4">
               
                <FormGroup label="Blog title" 
                inputField={<input name="title" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write blog title" />}/>
                 <FormGroup label="Blog scriptures" 
                inputField={<input name="scriptures"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write blog scriptures" />}/>
                 <FormGroup label="Introduction" 
                inputField={<textarea name="introduction" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write short introduction here" />}/>
                
                <div className="space-y-4">
                        <FormGroup label="First paragraph" 
                inputField={<textarea name="paragraph1"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Second paragraph" 
                inputField={<textarea name="paragraph2"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Third paragraph" 
                inputField={<textarea name="paragraph3"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Fourth paragraph" 
                inputField={<textarea name="paragraph4"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Conclusion" 
                inputField={<textarea name="conclusion" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write conclusion" />}/>
                
                    </div>  
                
                
           
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add blog
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]