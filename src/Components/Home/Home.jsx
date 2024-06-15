import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";



const Home = () => {

    // fetch('http://localhost:5001/crafts',)
    const crafts =useLoaderData()

    

    

    return (
        <div className="w-11/12 mx-auto md:w-full mt-3 md:mt-6">
            <div className="carousel w-full h-48 md:h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/p-b-3.jfif" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/p-b-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/pottery-banner-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>

         <div className="grid md:grid-cols-3 gap-6    ">
         {
                crafts.map(craft=> <CraftCard key={craft._id} craft={craft}> </CraftCard> )
            }
         </div>
            

        </div>
    );
};

export default Home;