"use client"
import { addChurch } from "@/app/controllers/church_controller";
import { addMember, findMember, getMember } from "@/app/controllers/members_controller";
import Image from "next/image";
import {toast} from "react-hot-toast"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MainHeader from "@/app/components/mainHeader";


const Page = () => {
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    return (<div>
        {/* <MainHeader/> */}
        <div className="grid grid-cols-12 min-h-screen bg-white">
            <div className="col-span-5 bg-slate-100 relative items-center flex ">
                <div className="w-11/12 mx-auto">
                <Image src="/church.png" className=" translate-x-20  " width="1000" height={1000} />
                </div>
            </div>
            <div className="col-span-7 flex justify-center items-center">
                    <form className="w-full" onSubmit={(e)=>{
                        e.preventDefault()
                        if(e.target.password.value == e.target.repeatPassword.value){
                            setLoading(true)
                            const churchData = {
                                name:e.target.name.value,
                                region:e.target.region.value,
                                subscription:null
                            }
    
                            const memberData = {
                                email:e.target.email.value,
                                password:e.target.password.value,
                                name :  "",
                                phone :  "",
                                gender :  "",
                                address :  '"',
                                isHouseOwner :  "",
                                isBaptised :  "",
                                maritialStatus :  "",
                                work :  "",
                                disability :  "",
                                birthDate :  "",
                                groups:[],
                                deviceId:"",
                            }
                           findMember(memberData.email).then((response)=>{
                            if(response){
                                toast.error('Email already exists')
                                setLoading(false)
                            }
                            else{
                                addChurch(churchData).then((id)=>{
                                    addMember({...memberData,churchId:id}).then((response)=>{
                                        router.push(`/userInfo/${response}`)
                                        setLoading(false)
                                    })
                               })
                            }
                           })
                           
                        } else{
                            toast.error('passwords does not match')
                            // e.target.password.value = ""
                            e.target.repeatPassword.value = ""

                        }
                   
                    

                    }}>
                    <div className="w-6/12 mx-auto">
                        <h1 className="font-medium text-4xl text-center text-slate-950 mb-10">Create an account</h1>
                        
                        <div>
                        <label>Church name</label>
                        <input required name="name" placeholder="Enter church name" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div>
                        <label>Select region</label>
                        <select required name="region" 
                        className="w-full text-sm mt-2 border-slate-300 rounded">
                            <option value="Dar">Dar es salaam</option>
                            <option value="Dar">Arusha</option>
                            <option value="Dar">Dodoma</option>

                        </select>
                        </div>
                        <div>
                        <label>Email address</label>
                        <input required name="email" placeholder="Enter email address" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div className="">
                        <label>Password</label>
                        <input required type="password" name="password" placeholder="Password" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div className="">
                        <label>Re-write password</label>
                        <input required type="password" name="repeatPassword" placeholder="Re-write password" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <button type="submit" className="py-3 flex justify-center w-full rounded bg-indigo-600 font-medium mt-5 text-white">
                            {loading?<div className="h-6 w-6 border-4 border-white border-t-transparent animate-spin rounded-full"></div>:"Register"}
                            
                            </button>
                        <p className="text-center mt-4">Already registered? <Link href="/login" className="text-indigo-600">Login</Link></p>
                       
                    </div>
                    </form>
            </div>
        </div>
    </div>);
}
 
export default Page;