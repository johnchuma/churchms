"use client"
import Breadcrumb from "@/app/components/breadcrumb";
import FormGroup from "@/app/components/formGroup";
import Spinner from "@/app/components/spinner";
import { addMember, editMember, getMember } from "@/app/controllers/members_controller";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { useState,useContext, useEffect } from "react";
import toast from "react-hot-toast";
import VerticalFormGroup from "@/app/components/verticalFormGroup";
import MainHeader from "@/app/components/mainHeader";


const Page = ({params}) => {
    const router = useRouter()
    const [loading,setLoading] = useState(false)
    // const {loading,setLoading} = useContext(LoaderContext)
    const[member,setMember] = useState(null)
    useEffect(()=>{
    //   setLoading(true)
      getMember(params.uuid).then((data)=>{
        setMember(data)
        // setLoading(false)/
      })
    },[])
    return ( member&& <div className="bg-white ">
      <MainHeader/>
        {/* <Breadcrumb prevPage="Members"/> */}
        <div className=" min-h-screen bg-white">
            
            <div className="py-3    mx-auto">

        <form className="w-6/12  pb-24 rounded-lg p-5 mx-auto" onSubmit={(e)=>{
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
            birthDate :  e.target.birthDate.value
          }
          editMember(member.id,data).then((dat)=>{
          setLoading(false)
          toast.success("Changes saved")
            router.push('/login')
          })
        }}>
            <h1 className="text-3xl text-center font-medium text-slate-800 mb-2">Personal details</h1>
            <p className=" opacity-50 text-lg text-center mb-10">Fill the form below to complete registration</p>
            <div className="gap-4 grid grid-cols-2">
                <VerticalFormGroup  label="Member name" 
                inputField={<input  name="name" defaultValue={member.name} required className="border text-base w-full py-2  border-slate-300 rounded-lg"
                placeholder="Enter member name" />}/>
               <VerticalFormGroup  label="Phone number" 
                inputField={<input name="phone" defaultValue={member.phone} required type="number" className="border text-base w-full py-2  border-slate-300 rounded-lg"
                placeholder="Enter phone number" />}/>
               <VerticalFormGroup  label="Address" 
                inputField={<input name="address" defaultValue={member.address} required className="border text-base w-full py-2  border-slate-300 rounded-lg"
                placeholder="Enter member address" />}/>
                <VerticalFormGroup  label="Birth date" 
                inputField={<input name="birthDate" defaultValue={member.birthDate} type="date"
                className="border text-base w-full py-2  border-slate-300 rounded-lg"
                placeholder="Enter birth date" />}/>
               <VerticalFormGroup  label="Gender" 
                inputField={<select name="gender" defaultValue={member.gender} className="border text-base w-full py-2  border-slate-300 rounded-lg"
                placeholder="Select gender" >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>}/>
               <VerticalFormGroup  label="Work status" 
                inputField={<select name="work" defaultValue={member.work} className="border text-base w-full py-2  border-slate-300 rounded-lg" >
                    <option value="Not employed">Not employed</option>
                    <option value="Employed">Employed</option>
                    <option value="Enterprenuer">Enterprenuer</option>
                    <option value="Business owner">Business owner</option>
                </select>}/>
               <VerticalFormGroup  label="Any disablity" 
                inputField={<input name="disability" defaultValue={member.disability} className="border text-base w-full py-2  border-slate-300 rounded-lg"
                placeholder="Mention if member has any disability" />}/>
                <VerticalFormGroup  label="Maritial status" 
                inputField={<select name="maritialStatus" defaultValue={member.maritialStatus} className="border text-base w-full py-2  border-slate-300 rounded-lg" >
                <option value="Married">Married</option>
                <option value="Not married">Not married</option>
                <option value="Devorced">Devorced</option>
                <option value="Widow">Widow</option>
            </select>}/>
               <VerticalFormGroup  label="Is house owner ?" 
                inputField={
                <select name="isHouseOwner" defaultValue={member.isHouseOwner} className="border text-base w-full py-2  border-slate-300 rounded-lg" >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>}/>
            <VerticalFormGroup  label="Is baptised ?" 
                inputField={
                <select name="isBaptised" defaultValue={member.isBaptised} className="border text-base w-full py-2  border-slate-300 rounded-lg" >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
            </select>}/>
            </div>
            <button type="submit"  className="bg-indigo-600 w-full text-base justify-center flex py-3 px-3  mt-8 rounded-lg text-white">
            {loading?<div className="h-6 font-medium w-6 border-4 border-white border-t-transparent animate-spin rounded-full"></div>
            :"Submit details"}
               
            </button>
        </form>
        </div>
            </div>
        
       
    </div> );
}
 
export default Page;