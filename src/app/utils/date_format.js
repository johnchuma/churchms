import moment from "moment"

export const formatDate = (timestamp)=>{
   const date = timestamp.toDate()
   return  moment(date.toString()).format("DD/MM/YYYY")
}