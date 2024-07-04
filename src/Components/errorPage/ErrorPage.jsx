
import Lottie from "lottie-react";
import lottieAnimation from "../errorPage/lottieAnimations.json"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {

    return (
        <div className="min-h-screen  bg-orange-200 ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>error page | pottery studio</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>


            <div className="  mx-auto flex justify-center items-center ">
                <Lottie className="md:w-7/12 " animationData={lottieAnimation}></Lottie>
            </div>
            <div className=" flex justify-center pb-6">
                <Link to="/"> <button className=" btn btn-error text-lg text-white    ">Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;