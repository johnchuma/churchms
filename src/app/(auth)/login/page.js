import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (<div>
        <div className="grid grid-cols-12 min-h-screen bg-white">
            <div className="col-span-5 bg-slate-50 relative items-center flex ">
                <div className="w-10/12 mx-auto">
                <Image src="/church.png" className=" translate-x-40  " width="1000" height={1000} />
                </div>
            </div>
            <div className="col-span-7 flex justify-center items-center">
                    <div className="w-4/12 mx-auto">
                        <h1 className="font-bold text-4xl text-center text-slate-950 mb-10">Sign in</h1>
                        <div>
                        <label>Email address</label>
                        <input placeholder="Enter email address" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div className="mt-3">
                        <label>Password</label>
                        <input placeholder="Password" className="w-full text-sm mt-2 border-slate-300 rounded"/>
                        </div>
                        <div className="flex justify-between py-4 text-sm text-indigo-600">
                            <Link href="/forgot-password">Forgot password ?</Link>
                            <Link className="flex items-center space-x-1" href="/help">
                            <div>Help</div> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                            className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>

                            </Link>

                        </div>
                        <button className="py-3 w-full rounded bg-indigo-600 font-bold mt-5 text-white">Login</button>
                        <p className="text-slate-500 text-start  text-sm mt-4">By signing in, I agree to the Modern Church <Link href={`/privacyStatement`} className="text-indigo-600">Privacy Statement </Link> and <Link href={`/TermsOfService`} className="text-indigo-600">Terms of Service.</Link> </p>
                    </div>
            </div>
        </div>
    </div>);
}
 
export default Page;