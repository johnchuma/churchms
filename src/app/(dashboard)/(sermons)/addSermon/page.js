"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addSermon } from "@/app/controllers/sermons_controller";
import { useRouter } from "next/navigation";

import { useState,useContext } from "react";
import { LoaderContext } from "../../layout";
import toast from "react-hot-toast";


const Page = () => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
  const [selectedType,setSelectedType] = useState("Video")
    return ( <div>
        <Breadcrumb prevPage="Sermons"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          let data = {
            type :  e.target.type.value,
            title :  e.target.title.value,
            scriptures :  e.target.scriptures.value,
            introduction :  e.target.introduction.value,
            link :  e.target.link.value,
            document :  "",
            conclusion : "",
            paragraph1 : "",
            paragraph2 : "",
            paragraph3 : "",
            paragraph4 : "",
          }
          switch (selectedType) {
            case "Text":
              
                    data.conclusion =  e.target.conclusion.value
                    data.paragraph1 =  e.target.paragraph1.value
                    data.paragraph2 =  e.target.paragraph2.value
                    data.paragraph3 =  e.target.paragraph3.value
                    data.paragraph4 =  e.target.paragraph4.value
                
                break;
            case "Video":
                
                    data.link =  e.target.link.value
                
                break;
            case "Audio":
                
                    data.link =  e.target.link.value
            
                break;
            case "Document":
                
                break;
            default:
                break;
          }
          addSermon(data).then((dat)=>{
            toast.success("Added successfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">New sermon</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Sermon type" 
                    inputField={
                    <select onChange={(e)=>{
                        setSelectedType(e.target.value)
                    }} name="type" className="border text-base w-3/5 py-1  border-slate-300 rounded-lg" >
                    <option value="Video">Video</option>
                    <option value="Text">Text</option>
                    <option value="Audio">Audio</option>
                    <option value="Document">Document</option>
                </select>}/>
                <FormGroup label="Sermon title" 
                inputField={<input name="title" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write sermon title" />}/>
                 <FormGroup label="Sermon scriptures" 
                inputField={<input name="scriptures"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write sermon scriptures" />}/>
                 <FormGroup label="Introduction" 
                inputField={<textarea name="introduction" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write short introduction here" />}/>
                {
                    selectedType == "Text"&&<div className="space-y-4">
                        <FormGroup label="First paragraph" 
                inputField={<textarea name="paragraph1" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Second paragraph" 
                inputField={<textarea name="paragraph2" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Third paragraph" 
                inputField={<textarea name="paragraph3" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Fourth paragraph" 
                inputField={<textarea name="paragraph4" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write paragraph here" />}/>
                 <FormGroup label="Conclusion" 
                inputField={<textarea name="conclusion" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write conclusion" />}/>
                
                    </div>  
                }
                  {
                    selectedType == "Video" &&<div className="space-y-4">
                            <FormGroup label="Link" 
                            inputField={<input name="link" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                            placeholder="Paste link here" />}/>
                    </div>  
                }
                 {
                    selectedType == "Audio"  &&<div className="space-y-4">
                            <FormGroup label="Link" 
                            inputField={<input name="link" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                            placeholder="Paste link here" />}/>
                    </div>  
                }
              {
                    selectedType == "Document"&&<div>
                        <FormGroup label="Upload file" 
                            inputField={<input name="document" type="file" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                            placeholder="" />}/>
                    </div>
                }
           
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add sermon
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]