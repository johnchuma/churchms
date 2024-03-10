import moment from "moment"

export const timestampToDate = ({timestamp})=>{
    return moment(timestamp.toDate()).format("YYYY-MM-DD")
}