const PricingSection = () => {
    return ( <div className="grid bg-slate-950 items-center mb-24">
        
        <div className="   py-24 w-10/12 mx-auto  ">
            <div className="text-center mb-10">
            <h1 className="font-bold w-12/12 text-4xl text-white  me-auto">
           Our subscriptions plans
                  </h1>
                  <p className="pe-5 text-lg text-white">
                    We have a very offordable plans 
                  </p>
            </div>
          <div className="grid grid-cols-3 gap-24 text-lg">
             <div className=" bg-white px-6 py-6 rounded-2xl ">
                <h1 className="text-2xl font-bold text-center">50,000TSH/month</h1>
                <h1 className="text-lg text-center">Standard plan</h1>
                 
                 <h1 className=" font-bold mb-2">Services</h1>
                 {["Members management","Contribution management","Plans and goals management","Media storage","Blog","Church website","Youtube channel","Instagram account","Facebook page"].map((item)=>{
                    return  <div className="flex space-x-2 items-center">
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div>
                       {item}
                    </div>
                 </div>
                 })}
                 <button className="py-2 px-4 text-center bg-indigo-600 text-white font-bold w-full rounded-full shadow-lg my-5">Subscribe</button>   
             </div>
             <div className=" bg-white px-6 py-6 rounded-2xl ">
                <h1 className="text-2xl font-bold text-center">85,000TSH/month</h1>
                <h1 className="text-lg text-center">Standard plan</h1>
                 
                 <h1 className=" font-bold mb-2">Services</h1>
                 {["Members management","Contribution management","Plans and goals management","Media storage","Blog","Church website","Youtube channel","Instagram account","Facebook page"].map((item)=>{
                    return  <div className="flex space-x-2 items-center">
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div>
                       {item}
                    </div>
                 </div>
                 })}
                 <button className="py-2 px-4 text-center bg-indigo-600 text-white font-bold w-full rounded-full shadow-lg my-5">Subscribe</button>   
             </div>
             <div className=" bg-white px-6 py-6 rounded-2xl ">
                <h1 className="text-2xl font-bold text-center">120,000TSH/month</h1>
                <h1 className="text-lg text-center">Standard plan</h1>
                 
                 <h1 className=" font-bold mb-2">Services</h1>
                 {["Members management","Contribution management","Plans and goals management","Media storage","Blog","Church website","Youtube channel","Instagram account","Facebook page"].map((item)=>{
                    return  <div className="flex space-x-2 items-center">
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-5 h-5 text-green-600">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div>
                       {item}
                    </div>
                 </div>
                 })}
                 <button className="py-2 px-4 text-center bg-indigo-600 text-white font-bold w-full rounded-full shadow-lg my-5">Subscribe</button>   
             </div>
          </div>
        </div>
    </div> );
}
 
export default PricingSection;