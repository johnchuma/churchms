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
import { addIncomeCollection } from "@/app/controllers/income_collection_controller";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const [members, setmembers] = useState([]);
    const [incomeSource, setincomeSource] = useState(null);
    const [seletedMember, setSeletedMember] = useState(null);
    useEffect(() => {
        setLoading(true)
        getMembers().then((data)=>setmembers(data))
        getSourceOfIncome(params.uuid).then((data)=>{
            setincomeSource(data)
            setLoading(false)
        })
       }, []);
    return ( incomeSource&&<div>
        <Breadcrumb prevPage="Collections"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            incomeSourceId :  params.uuid,
            amount :  e.target.amount.value,
            name : incomeSource.recordUserInfo == true?seletedMember.name:null,
            phone: incomeSource.recordUserInfo == true?seletedMember.phone:null,
            address: incomeSource.recordUserInfo == true?seletedMember.address:null,
            isPledge:incomeSource.allowPledging,
            payouts:[],
            paidFull:false,
            paidSome:false
          }
          addIncomeCollection(data).then((dat)=>{
          setLoading(false)
          toast.success("added successfully")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-medium text-slate-800 mb-4">{incomeSource.allowPledging?"New pledge":"New income"}</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Amount" 
                inputField={<input name="amount" type="number"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter cash amount" />}/>
                {
                    incomeSource.recordUserInfo == true&& <FormGroup label="Select member" 
                    inputField={<select onChange={(e)=>{
                          setSeletedMember(members[e.target.value])
                    }} name="userId"   required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                    >   <option>Select member</option>
                        {members.map((item,index)=><option key={item.id} value={index}>{item.name}</option>)}
                    </select>}/>
                }
                
                
             
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
            {incomeSource.allowPledging?"Add pledge":"Add income"}
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;