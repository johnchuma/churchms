"use client"
import Image from "next/image";
import { useState } from "react";

const FeatureSection = () => {
   const [currentIndex,setCurrentIndex] = useState(0)
    return ( <div className=" bg-slate-950 ">
        <div className="w-10/12 mx-auto grid grid-cols-12 py-24">
       
             <div className=" col-span-12 text-center ">
                  <h1 className="font-bold w-5/12 mx-auto text-4xl  text-white">
                        Features available on our Church management system ?
                  </h1>
                 
                  <div className=" flex-wrap flex mt-8 justify-center w-8/12 mx-auto ">
                  {[
                  {title:"Members management",details:""},
                  {title:"Contributions management",details:""},
                  {title:"Projects management",details:""},
                  {title:"Plans and goals management",details:""},
                  {title:"Events management",details:""},
                  {title:"Bulk SMS",details:""},
                  {title:"Email service",details:""},
                  {title:"Digital ads",details:""},  
                  {title:"Music instruments ordering system",details:""},  
                  {title:"Online payment",details:""},  

                ].map((item,index)=>{
                    return <div className={`text-white border me-3 mb-3 border-full border-slate-700 rounded-full py-2 px-5`} key={index}>{item.title}</div>
                  })}
                  </div>
             </div>
        </div>
             

    </div> );
}
 
export default FeatureSection;