const Header = () => {
    return ( <div className=" w-screen z-40 overflow-hidden fixed">
        <div className="bg-slate-900 ">
            <div className="flex justify-end space-x-3 text-base text-white font-medium py-3 px-10 mx-auto">
            <h1>Call for help</h1>
            <h1>+255627707434</h1>
            <h1>help@modernchurch.com</h1>
            </div>
        </div>
        <div className="px-10 mx-auto flex justify-between bg-white  py-4  ">
           <div className="flex space-x-4 items-center ">
           <h1 className="font-medium text-lg text-indigo-600">Modern Church MS</h1>
          <div className="space-x-4 flex">
          {[{title:"Company info"},{title:"Services"},{title:"About us"}].map((item)=>{
            return  <div className="text-slate-800" key={item.title}>{item.title}</div>
           })}
          </div>
           </div>
           <h1 className="font-medium  text-slate-800">Download app</h1>

        </div>
        <div className="border-b border-slate-200"></div>
    </div> );
}
 
export default Header;