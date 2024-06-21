import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const MyCrafts = ({craft}) => {
    const {user}=useContext(AuthContext)

    const { image, item_name, made_by, price,
        processing_time, rating, short_description, stock_status, subcategory_Name, _id, customization
    
      } = craft

      const handleUpdate =(id)=>{
        console.log(id)

      }


    return (
        <div className="card card-compact  bg-red-200 shadow-xl w-11/12 mx-auto">
      <figure className="h-60 md:h-72"><img src={image} alt="Shoes" /></figure>
      
      <div className="card-body ">
         <h2 className="text-black text-lg flex gap-1 items-center font-semibold "> <span className="text-orange-500 "><FaStar /></span> {rating} </h2>
        <div className="card-title flex justify-between  text-black ">
          <h2 className="">{item_name}</h2>
          
          <p className="flex justify-end items-center gap-1 "> <span className="text-xl"><FaBangladeshiTakaSign /></span> {price}</p>
        </div>
        <p className="text-black text-lg opacity-75  ">{short_description}</p>
        <div className="card-actions  flex justify-between">
          <button onClick={()=>handleUpdate(_id)}  className="btn  text-xl  btn-accent "> Update</button>
          <button  className="btn  text-xl  btn-error font-semibold"> Delete</button>
        </div>
      </div>
    </div>
    );
};

export default MyCrafts;