"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";

import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { editGroupExpense, getGroupExpense, } from "@/app/controllers/group_expenses_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [groupExpense, setgroupExpense] = useState(null);
    
    useEffect(()=>{
        setLoading(true)
        getGroupExpense(params.uuid).then((data)=>{
          setgroupExpense(data)
          setLoading(false)
        })
      },[])
    return ( groupExpense&& <div>
        <Breadcrumb prevPage="Income sources"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            amount : parseFloat(e.target.amount.value),
            description :  e.target.description.value,
          }
          editGroupExpense(params.uuid,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes Saved")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit source of income</h1>
            <div className="grid grid-cols-1 gap-4">
            <FormGroup label="Amount used" 
                inputField={<input name="amount" type="number" defaultValue={groupExpense.amount}  required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter amount used" />}/>
                <FormGroup label="What for ?" 
                inputField={<textarea name="description" defaultValue={groupExpense.description} required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter expense description" />}/>
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-sm justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Edit income source
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;