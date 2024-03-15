"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { addBlog, editBlog, getBlog } from "@/app/controllers/blogs_controller";
import { LoaderContext } from "@/app/(dashboard)/layout";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [blog, setblog] = useState(null);
    useEffect(() => {
      setLoading(true)
      getBlog(params.uuid).then((data)=>{
        setblog(data)
      setLoading(false)

      })
    }, []);
    return (blog&& <div>
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
          
          editBlog(blog.id,data).then((dat)=>{
            toast.success("Saved successfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">New blog</h1>
            <div className="grid grid-cols-1 gap-4">
               
                <FormGroup label="Blog title" 
                inputField={<input defaultValue={blog.title} name="title" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write blog title" />}/>
                 <FormGroup label="Blog scriptures" 
                inputField={<input defaultValue={blog.scriptures} name="scriptures"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write blog scriptures" />}/>
                 <FormGroup label="Introduction" 
                inputField={<textarea defaultValue={blog.introduction} name="introduction" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write short introduction here" />}/>
                
                <div className="space-y-4">
                        <FormGroup label="First paragraph" 
                inputField={<textarea defaultValue={blog.paragraph1} name="paragraph1"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Second paragraph" 
                inputField={<textarea defaultValue={blog.paragraph2} name="paragraph2"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Third paragraph" 
                inputField={<textarea defaultValue={blog.paragraph3} name="paragraph3"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Fourth paragraph" 
                inputField={<textarea defaultValue={blog.paragraph4} name="paragraph4"  className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Conclusion" 
                inputField={<textarea defaultValue={blog.conclusion} name="conclusion" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write conclusion" />}/>
                
                    </div>  
                
                
           
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Save Changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;