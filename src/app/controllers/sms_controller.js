import axios from "axios"
import { getMembers } from "./members_controller"
import { endpoint } from "../utils/endpoint";

export const sendSMS = async ({message,number,uuid})=>{
  try {
   
      const members = await  getMembers();
      let numbers;
      if(uuid){
         numbers =  members.filter((item)=>item.groups.includes(uuid)).map((item)=>item.phone)
      }
   const data ={message,numbers:uuid?numbers:[number]};
   console.log(data)
   const response =  await axios.post(`${endpoint}/sms/`,data)
  return response;
    
  } catch (error) {
    console.log(error)
    throw error
  }
}