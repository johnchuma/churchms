"use client"
import { useContext, useEffect, useState } from "react";
import { deleteDesease, deleteMember, editMember, getMembers } from "@/app/controllers/members_controller";
import { LoaderContext } from "@/app/(groupDashboard)/layout";
import Breadcrumb from "@/app/components/breadcrumb";
import { getGroup } from "@/app/controllers/groups_controller";
import FormGroup from "@/app/components/formGroup";
import { sendSMS, sendSms } from "@/app/controllers/sms_controller";
const Page = ({params}) => {
    const [members,setMembers] = useState([])
    const [refresh,setrefresh] = useState(0)
    const {loading,setLoading,group,setGroup} = useContext(LoaderContext)
    const [keyword, setkeyword] = useState('');
    const itemsPerPage  = 7;
    const [currentPage, setcurrentPage] = useState(1);
    const [totalPages, settotalPages] = useState(0);
    const [selectedType,setselectedType] = useState(0)
    
    useEffect(()=>{
        setLoading(true)
       getMembers().then((data)=>{
        setMembers(data)
        settotalPages(Math.ceil(data.length/itemsPerPage))
        setLoading(false)
       })
    },[refresh])

    useEffect(() => {
    getGroup(params.uuid).then((data)=>setGroup(data))
    }, []);
    return ( <div>
            <Breadcrumb prevPage="Groups" link="/groups" />
     
        <form onSubmit={(e)=>{
            e.preventDefault()
            setLoading(true)
            sendSMS({message:e.target.message.value,
                number:selectedType=="number"&&e.target.number.value,
                uuid:selectedType=="all"&&params.uuid}).then((data)=>{
                setLoading(false)
            })
        }} className="space-y-4 py-3">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Send message</h1>
        <FormGroup label="Select type" 
                inputField={<select name="type" onChange={(e)=>{
                    setselectedType(e.target.value)
                }} required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Type number here" >
                    <option>Select recepient</option>
                    <option value="number">Enter a number</option>
                    <option value="all">All members of {group&&group.name}</option>
                </select>}/>
                {selectedType == "number" && <FormGroup label="Recepient number" 
                inputField={<input name="number" type="number"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Type number here" />}/>}
        <FormGroup label="Compose message" 
                inputField={<textarea name="message"  required className="border text-base w-3/5 py-1  border-slate-300 rounded-lg"
                placeholder="Write a message here" />}/>
         <button type="submit"  className="bg-indigo-600 text-base justify-center flex py-2 px-3  mt-8 rounded-lg text-white">
              Send message
            </button>
        </form>
        
    </div> );
}
 
export default Page;