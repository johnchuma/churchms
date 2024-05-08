"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import { useRouter } from "next/navigation";
import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addSourceOfIncome } from "@/app/controllers/source_of_income_controller";
import { addGroupExpense } from "@/app/controllers/group_expenses_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)

   
    return ( <div>
        <Breadcrumb prevPage="Expenses"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            groupId :  params.uuid,
            amount : parseFloat(e.target.amount.value),
            description :  e.target.description.value,
           
          }
          addGroupExpense(data).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-medium text-slate-800 mb-4">Add expense</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Amount used" 
                inputField={<input name="amount" type="number"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter amount used" />}/>
                <FormGroup label="What for ?" 
                inputField={<textarea name="description"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter expense description" />}/>
               
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add expense
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;