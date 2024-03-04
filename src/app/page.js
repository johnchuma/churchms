import Image from "next/image";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="bg-white  min-h-screen overflow-x-hidden">
      <Header/>
      <div className="grid grid-cols-11 overflow-x-hidden">
        <Sidebar/>
        <div className=" bg-white h-screen col-span-9"></div>
      </div>
    </main>
  );
}
