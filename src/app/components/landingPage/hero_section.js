import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return ( <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-12 py-16">
            <div className="col-span-6 space-y-8">
                <div className="flex flex-row bg-green-50 rounded-full w-6/12 px-4 py-2 items-center space-x-2">
                    <div className="bg-green-100 rounded-full aspect-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-4 h-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    </div>
                    <p>Feel free to explore our Demo system</p>

                </div>
                <h1 className="font-bold text-6xl w-11/12">
                    Comprehensive Church Management solution
                </h1>
                <p className="text-lg w-9/12">With our system you can <span className="font-bold text-black">manage everything </span> in your church, from Church members, revenue, church projects and many other church aspects</p>
               <div className="flex space-x-4 w-7/12">
               <Link href="/login" className="py-3  w-full rounded-full px-5 bg-indigo-600 font-bold text-center  text-white">Get started</Link>
               <Link href="/login" className="py-3 w-full rounded-full px-5 text-start  font-bold  text-indigo-600">View services</Link>
               </div>
            </div>
            <div className="col-span-6 ">
                <Image width={2000} height={2000} src="/frame.png"/>
            </div>

            

        </div>
    </div> );
}
 
export default HeroSection;