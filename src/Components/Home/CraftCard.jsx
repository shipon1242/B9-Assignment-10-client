import { FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CraftCard = ({ craft }) => {
  const navigate =useNavigate()
  const handleViewDetails= (_id)=>{
   
    navigate(`/crafts/viewDetails/${_id}`)

  }


  // console.log(craft)
  const { image, item_name, made_by, price,
    processing_time, rating, short_description, stock_status, subcategory_Name, _id, customization

  } = craft
  return (
    <div className="card card-compact  bg-red-200 shadow-xl">
      <figure className="h-60 md:h-72"><img src={image} alt="Shoes" /></figure>
      
      <div className="card-body ">
         <h2 className="text-black text-lg flex gap-1 items-center "> <span className="text-orange-500"><FaStar /></span> {rating} </h2>
        <div className="card-title flex justify-between  text-black ">
          <h2 >{item_name}</h2>
          
          <p className="flex justify-end items-center gap-1"> <span className="text-xl"><FaBangladeshiTakaSign /></span> {price}</p>
        </div>
        <p className="text-black text-lg opacity-75 ">{short_description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleViewDetails(_id)} className="btn w-full text-xl  btn-secondary "> View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;