import { useRouter } from "next/navigation";

const Breadcrumb = ({prevPage,link}) => {
const router = useRouter()

    return ( <div onClick={()=>{
      if(link){
        router.push(link)
      }else{
        router.back()
      }
    }} className="flex space-x-1 items-center cursor-pointer text-base ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
<a className="text-indigo-600 font-medium hover:underline">Back to {prevPage}</a>
    </div> );
}
 
export default Breadcrumb;