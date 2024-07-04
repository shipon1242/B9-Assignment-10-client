import { useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const ViewDetails = () => {
  const { setLoading } = useContext(AuthContext)
  setLoading(true)
  const craft = useLoaderData()
  setLoading(false)
  // console.log(craft)
  const { image, item_name, made_by, price,
    processing_time, short_description, stock_status, subcategory_Name, customization

  } = craft

  return (
    <div className="hero min-h-screen  bg-red-200 text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>viewDetails | craft | pottery studio</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <div className="hero-content flex-col md:flex-row">
        <img src={image} className="max-w-sm w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold abril mb-2">{item_name}</h1>
          <h2 className="text-2xl font-semibold flex items-center gap-1 abril"> <span className=" text-2xl ">price</span>:   <span><FaBangladeshiTakaSign /></span> {price} </h2>
          <div className="py-6 bodoni-5">
            <p className=""><span className="text-xl font-semibold">category:</span> {subcategory_Name} </p>
            <p ><span className="text-xl font-semibold">made:</span> {made_by} </p>
            <p className=""><span className="text-xl font-semibold">Description:</span> {short_description} </p>
            <p className=""><span className="text-xl font-semibold">customization:</span> {customization}</p>
            <div className="flex justify-between">
              <p className=""><span className="text-xl font-semibold">stock_status:</span> {stock_status} </p>
              <p className=""><span className="text-xl font-semibold">processing_time:</span> {processing_time} </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewDetails;