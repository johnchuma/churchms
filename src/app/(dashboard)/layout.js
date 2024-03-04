import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Layout = ({children}) => {
    return ( <div>
 <div className="bg-white  min-h-screen overflow-x-hidden">
      <Header/>
      <div className="grid grid-cols-11 overflow-x-hidden">
        <Sidebar/>
        <div className=" bg-white h-screen col-span-9 py-8 px-12">
            {children}
        </div>
      </div>
    </div>

    </div> );
}
 
export default Layout;