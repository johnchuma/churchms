"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { LoaderContext } from "@/app/(dashboard)/layout";
import { addScripture, editScripture, getScripture } from "@/app/controllers/scriptures_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
  const [scripture, setscripture] = useState(null);
    useEffect(() => {
      setLoading(true)
      getScripture(params.uuid).then((data)=>{
        setscripture(data)
      setLoading(false)

      })
    }, []);
    return ( scripture&& <div>
        <Breadcrumb prevPage="Scriptures"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          let data = {
            book :  e.target.book.value,
            words :  e.target.words.value,
            description :  e.target.description.value,
            
          }
          
          editScripture(scripture.id,data).then((dat)=>{
            toast.success("Save changes")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit scripture</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Book" 
                inputField={<input name="book" defaultValue={scripture.book} required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write a book" />}/>
                 <FormGroup label="Scripture" 
                inputField={<input name="words" defaultValue={scripture.words}  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write words" />}/>
                 <FormGroup label="Scripture description" 
                inputField={<textarea name="description" defaultValue={scripture.description} required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write short description here" />}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Save changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]