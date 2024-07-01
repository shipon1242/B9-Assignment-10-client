import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyCrafts from "./MyCrafts";
import { Helmet } from "react-helmet";

const MyCraftList = () => {
    const { user, setLoading } = useContext(AuthContext)
    const email = user.email
    const [myCrafts, setMyCrafts] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5001/mycrafts/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyCrafts(data)
                setLoading(false)
            })

    }, [])
    // console.log(myCrafts)
    return (
        <div className="mt-6 min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>my craft list | pottery studio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {
                myCrafts.length > 0 ? <div className=" grid  md:grid-cols-3 gap-4 ">
                    {
                        myCrafts.map((craft) => <MyCrafts key={craft._id} craft={craft} myCrafts={myCrafts} setMyCrafts={setMyCrafts}  >  </MyCrafts>)
                    }
                </div> : <h2 className=" min-h-screen text-center flex justify-center items-center text-2xl md:text-6xl text-red-600 font-semibold">No craft has been added to the crafts list</h2>
            }
        </div>
    );
};

export default MyCraftList;