"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { addProject, editProject, getProject } from "@/app/controllers/projects_controller";
import { LoaderContext } from "@/app/(dashboard)/layout";
import { getAllSourceOfIncome } from "@/app/controllers/source_of_income_controller";
import { formatDate } from "@/app/utils/date_format";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [sourceofincomes,setSourceOfIncomes] = useState([])
    const [project, setproject] = useState(null);
    useEffect(() => {
      setLoading(true)
      getProject(params.uuid).then((data)=>{
        setproject(data)
      setLoading(false)

      })
    }, [])
    useEffect(()=>{
        setLoading(true)
       getAllSourceOfIncome().then((data)=>{
        setSourceOfIncomes(data)
        setLoading(false)

       })
    },[])
    return ( project&&<div>
        <Breadcrumb prevPage="Projects"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          let data = {
            title :  e.target.title.value,
            sourceOfIncome :  e.target.sourceOfIncome.value,
            description :  e.target.description.value,
          }
          
          editProject(project.id,data).then((dat)=>{
            toast.success("Savedsuccessfully")
            setLoading(false)
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">New project</h1>
            <div className="grid grid-cols-1 gap-4">
            <FormGroup label="Project title" 
                inputField={<input defaultValue={project.title} name="title" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write project title here" />}/>
                 <FormGroup label="Select source of income" 
                inputField={<select defaultValue={project.sourceOfIncome} name="sourceOfIncome" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write project title here" >
                    <option>Select source of income</option>
                    {sourceofincomes.map((item)=>{
                       return <option key={item.id} value={item.id}>{item.name} ({item.groupName}) - <span className="text-xs">created {formatDate(item.createdAt)}</span> </option>
                    })}
                </select>}/>
                 <FormGroup label="Write description" 
                inputField={<textarea defaultValue={project.description} name="description" required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write project description here" />}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Save changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;