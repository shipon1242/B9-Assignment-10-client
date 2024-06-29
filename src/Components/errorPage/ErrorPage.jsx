
import Lottie from "lottie-react";
import lottieAnimation from "../errorPage/lottieAnimations.json"
const ErrorPage = () => {
    return (
        <div className=" min-h-screen bg-orange-200 mx-auto flex justify-center items-center ">
            <Lottie className="md:w-8/12 " animationData={lottieAnimation}></Lottie>
        </div>
    );
};

export default ErrorPage;