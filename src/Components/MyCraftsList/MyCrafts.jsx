// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const MyCrafts = ({ craft, myCrafts, setMyCrafts }) => {
  // const { user } = useContext(AuthContext)
  const { image, item_name, price,
    rating, short_description, _id

  } = craft
  const navigate = useNavigate()
  const handleUpdate = (id) => {
    console.log(id)
    navigate(`/myCrafts/update/${id}`)

  }
  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5001/crafts/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success"
              });

              const uiCrafts = myCrafts.filter(crafts => crafts._id !== id)
              setMyCrafts(uiCrafts)
            }

          })

      }
    });

  }


  return (
    <div className="card card-compact  bg-red-200 shadow-xl w-11/12 md:w-full mx-auto">
      <figure className="h-60 md:h-72"><img src={image} alt="Shoes" /></figure>

      <div className="card-body ">
        <h2 className="text-black text-lg flex gap-1 items-center font-semibold "> <span className="text-orange-500 "><FaStar /></span> {rating} </h2>
        <div className="card-title flex justify-between  text-black ">
          <h2 className="">{item_name}</h2>

          <p className="flex justify-end items-center gap-1 "> <span className="text-xl"><FaBangladeshiTakaSign /></span> {price}</p>
        </div>
        <p className="text-black text-lg opacity-75  ">{short_description}</p>
        <div className="card-actions  flex justify-between">
          <button onClick={() => handleUpdate(_id)} className="btn  text-xl  btn-accent "> Update</button>
          <button onClick={() => handleDelete(_id)} className="btn  text-xl  btn-error font-semibold"> Delete</button>
        </div>
      </div>
    </div>
  );
};

MyCrafts.propTypes ={
  craft:PropTypes.object,
  myCrafts:PropTypes.array,
  setMyCrafts:PropTypes.func

}


export default MyCrafts;