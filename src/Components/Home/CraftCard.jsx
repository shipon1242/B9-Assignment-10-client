import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import PropTypes from 'prop-types';

const CraftCard = ({ craft }) => {
  const {user,setLoading}=useContext(AuthContext)
  
  const navigate = useNavigate()
  const handleViewDetails= (_id)=>{
   setLoading(true)
    user ? navigate(`/crafts/viewDetails/${_id}`) : navigate("/login")
    setLoading(false)
  }


  // console.log(craft)
  const { image, item_name,  price,
     rating, short_description,   _id, 

  } = craft
  return (
    <div className="card card-compact  bg-red-200 shadow-xl">
      <figure className="h-60 md:h-72"><img src={image} alt="Shoes" /></figure>
      
      <div className="card-body ">
         <h2 className="text-black text-lg flex gap-1 items-center font-semibold "> <span className="text-orange-500 "><FaStar /></span> {rating} </h2>
        <div className="card-title flex justify-between  text-black ">
          <h2 className="">{item_name}</h2>
          
          <p className="flex justify-end items-center gap-1 "> <span className="text-xl"><FaBangladeshiTakaSign /></span> {price}</p>
        </div>
        <p className="text-black text-lg opacity-75  ">{short_description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleViewDetails(_id)} className="btn w-full text-xl  btn-secondary font-bold"> View Details</button>
        </div>
      </div>
    </div>
  );
};

CraftCard.propTypes ={
  craft:PropTypes.object
}

export default CraftCard;