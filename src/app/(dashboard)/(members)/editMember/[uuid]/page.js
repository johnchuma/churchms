"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addMember, editMember, getMember } from "@/app/controllers/members_controller";
import { useRouter } from "next/navigation";

import { useState,useContext, useEffect } from "react";
import { LoaderContext } from "@/app/(dashboard)/layout";
import toast from "react-hot-toast";


const Page = ({params}) => {
    const router = useRouter()
    const {loading,setLoading} = useContext(LoaderContext)
    const[member,setMember] = useState(null)
    useEffect(()=>{
      setLoading(true)
      getMember(params.uuid).then((data)=>{
        setMember(data)
        setLoading(false)
      })
    },[])
    return ( member&& <div>
        <Breadcrumb prevPage="Members"/>
        <div className="py-3 mt-3">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          const data = {
            name :  e.target.name.value,
            phone :  e.target.phone.value,
            gender :  e.target.gender.value,
            address :  e.target.address.value,
            isHouseOwner :  e.target.isHouseOwner.value,
            isBaptised :  e.target.isBaptised.value,
            maritialStatus :  e.target.maritialStatus.value,
            work :  e.target.work.value,
            disability :  e.target.disability.value,
            birthDate :  e.target.birthDate.value,
            email: "",
            deviceId:"",
          }
          editMember(member.id,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes saved")
            router.back()
          })
        }}>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Edit member</h1>
            <div className="grid grid-cols-1 gap-4">
                <FormGroup label="Member name" 
                inputField={<input name="name" defaultValue={member.name} required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter member name" />}/>
               <FormGroup label="Phone number" 
                inputField={<input name="phone" defaultValue={member.phone} required type="number" className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter phone number" />}/>
               <FormGroup label="Address" 
                inputField={<input name="address" defaultValue={member.address} required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter member address" />}/>
                <FormGroup label="Birth date" 
                inputField={<input name="birthDate" defaultValue={member.birthDate} type="date"
                className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Enter birth date" />}/>
               <FormGroup label="Gender" 
                inputField={<select name="gender" defaultValue={member.gender} className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Select gender" >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>}/>
               <FormGroup label="Work status" 
                inputField={<select name="work" defaultValue={member.work} className="border text-base w-3/5 py-1  border-slate-300 rounded-lg" >
                    <option value="Not employed">Not employed</option>
                    <option value="Employed">Employed</option>
                    <option value="Enterprenuer">Enterprenuer</option>
                    <option value="Business owner">Business owner</option>
                </select>}/>
               <FormGroup label="Any disablity" 
                inputField={<input name="disability" defaultValue={member.disability} className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Mention if member has any disability" />}/>
                <FormGroup label="Maritial status" 
                inputField={<select name="maritialStatus" defaultValue={member.maritialStatus} className="border text-base w-3/5 py-1  border-slate-300 rounded-lg" >
                <option value="Married">Married</option>
                <option value="Not married">Not married</option>
                <option value="Devorced">Devorced</option>
                <option value="Widow">Widow</option>
            </select>}/>
               <FormGroup label="Is house owner ?" 
                inputField={
                <select name="isHouseOwner" defaultValue={member.isHouseOwner} className="border text-base w-3/5 py-1  border-slate-300 rounded-lg" >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
            </select>}/>
            <FormGroup label="Is baptised ?" 
                inputField={
                <select name="isBaptised" defaultValue={member.isBaptised} className="border text-base w-3/5 py-1  border-slate-300 rounded-lg" >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
            </select>}/>
            </div>
            <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Save changes
            </button>
        </form>
        </div>
       
    </div> );
}
 
export default Page;[]