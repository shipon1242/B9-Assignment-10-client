import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craft = useLoaderData()
  // console.log(craft)
  const { image, item_name, made_by, price,
    processing_time, rating, short_description, stock_status, subcategory_Name, _id, customization

  } = craft

    return (
        <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col md:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-4xl font-bold abril mb-2">{item_name}</h1>
    <h2 className="text-2xl font-semibold flex items-center gap-1 abril"> <span className=" text-2xl font-bold">price</span>:   <span><FaBangladeshiTakaSign /></span> {price} </h2>
      <div className="py-6 bodoni-5">
      <p className="">category:{subcategory_Name} </p>
      <p >made:{made_by} </p>
      <p className="">Description: {short_description} </p>
      <p className="">customization: {customization}</p>
 <div className="flex justify-between">  
 <p className="">stock_status: {stock_status} </p>
 <p className="">processing_time: {processing_time} </p>
 </div>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default ViewDetails;