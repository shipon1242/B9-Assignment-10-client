import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CraftCard from "../Home/CraftCard";
import MyCrafts from "./MyCrafts";

const MyCraftList = () => {
    const {user}= useContext(AuthContext)
    const email =user.email
    const [myCrafts,setMyCrafts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5001/mycrafts/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyCrafts(data)
        })

    },[])
    return (
        <div>
            <h2> My Craft lists is here </h2>
            <div className="w-11/12 mx-auto grid  md:grid-cols-3 gap-4">
            {
                myCrafts.map((craft)=> <MyCrafts key={craft._id} craft={craft} myCrafts={myCrafts} setMyCrafts={setMyCrafts}  >  </MyCrafts> )
            }
            </div>
        </div>
    );
};

export default MyCraftList;