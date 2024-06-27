import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="bg-orange-100" >
            
            <div >
            <Navbar></Navbar>
          <div className=" md:w-11/12 mx-auto "> <Outlet></Outlet></div>

            </div>
            <div>
            <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;