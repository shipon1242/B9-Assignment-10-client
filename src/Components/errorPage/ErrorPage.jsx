
import Lottie from "lottie-react";
import lottieAnimation from "../errorPage/lottieAnimations.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div className="min-h-screen bg-orange-200">
            <div className="  mx-auto flex justify-center items-center ">
                <Lottie className="md:w-8/12 " animationData={lottieAnimation}></Lottie>
            </div>
            <div className=" flex justify-center pb-6">
               <Link to="/"> <button className=" btn btn-error text-lg text-white    ">Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;