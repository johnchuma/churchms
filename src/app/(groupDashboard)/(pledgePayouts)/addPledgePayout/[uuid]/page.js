"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addMember, editMember, getMember, getMembers } from "@/app/controllers/members_controller";
import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import toast from "react-hot-toast";
import { addSourceOfIncome, getSourceOfIncome } from "@/app/controllers/source_of_income_controller";
import { addIncomeCollection, editIncomeCollection, getIncomeCollection } from "@/app/controllers/income_collection_controller";
import { Timestamp } from "firebase/firestore";
import { generateId } from "@/app/utils/id_generator";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [members, setmembers] = useState([]);
    const [collection, setcollection] = useState(null);
 
    useEffect(() => {
        setLoading(true)
        getIncomeCollection(params.uuid).then((data)=>{
            setcollection(data)
            setLoading(false)
        })
       }, []);
    return ( collection&&<div>
        <Breadcrumb prevPage="Payouts"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            id:generateId(10),
            createdAt: Timestamp.now(),
            amount :  e.target.amount.value,
          }

          editIncomeCollection(collection.id,{payouts:[...collection.payouts,data]}).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Add payout</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Amount" 
                inputField={<input name="amount" type="number"  required className="border text-sm w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter cash amount" />}/>
              
                
                
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-sm justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Add payout
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;