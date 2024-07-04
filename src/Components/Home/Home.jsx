import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";



const Home = () => {
    const { setLoading } = useContext(AuthContext)
    // fetch('http://localhost:5001/crafts',)
    setLoading(true)
    const crafts = useLoaderData()

    const cardCrafts = crafts?.slice(0, 6)

    setLoading(false)

    return (
        <div className="w-11/12 mx-auto md:w-full mt-3 md:mt-6">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | pottery studio</title>
                {/* <link rel="canonical" href="https://i.ibb.co/LJBn4rc/pottery-studio-logo.jpg" /> */}
            </Helmet>

            <div className="carousel w-full h-48 md:h-96">
               
                <div id="slide1" className="carousel-item relative w-full">
               
                    <img  src="/p-b-3.jfif" className="w-full relative" />
                    <h2 className="absolute left-1/3 top-20 md:top-40 text-2xl  md:text-4xl font-semibold text-pink-600 abril"> Found your best craft... </h2>
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
            <div className="text-center mt-4 md:mt-8 mb-6 md:mb-10 space-y-4 ">
                <h2 className="text-3xl md:text-5xl text-orange-600 abril ">
                    <span className="text-fuchsia-600">Decor your home</span> with <span className="text-purple-700">pottery crafts</span>
                </h2>
                <p className=" text-yellow-700 text-xl md:text-2xl bodoni-7">
                    Most popular home decor craft collection  in our pottery studio
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6    ">
                {
                    cardCrafts.map(craft => <CraftCard key={craft._id} craft={craft}> </CraftCard>)
                }
            </div>


        </div>
    );
};

export default Home;