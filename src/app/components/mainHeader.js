import Link from "next/link";

const MainHeader = () => {
    return ( <div className=" w-screen overflow-hidden">
        <div className="bg-slate-950 ">
            
            <div className="flex justify-end space-x-3 text-base text-white font-bold py-3 w-10/12 mx-auto">
            <h1>Call for help</h1>
            <h1>+255627707434</h1>
            <h1>help@modernchurch.com</h1>
            </div>
        </div>
        <div className="w-10/12 mx-auto flex justify-between items-center  py-4  ">
           <div className="flex space-x-4 items-center ">
           <h1 className="font-bold text-3xl text-indigo-600">Modern Church</h1>
          <div className="space-x-4 flex">
          {[{title:"Our services"},{title:"Who are we ?"},{title:"Help"}].map((item)=>{
            return  <div className="text-slate-800" key={item.title}>{item.title}</div>
           })}
          </div>
           </div>
           <div className="flex space-x-4">
           <Link href="/login" className="py-2 w-full rounded-full px-5 border border-indigo-600  font-bold  text-indigo-600">Contact us</Link>
           <Link href="/login" className="py-2 w-full rounded-full px-5 bg-indigo-600 font-bold  text-white">Login/Register</Link>

           </div>

        </div>
        <div className="border-b border-slate-200"></div>
    </div> );
}
 
export default MainHeader;