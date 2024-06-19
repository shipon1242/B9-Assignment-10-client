import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext)
    console.log(user)
    const handleLogout = () => {
        setLoading(true)
        logOut()
            .then(() => {
                console.log("user logged out successfully")

            })
            .catch((error) => {
                console.error(error)
            })
    }


    const links = <>

        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/allCraftItems' >All Craft Items</NavLink></li>
        {user&& <li><NavLink to='/addCraftItems' >Add Craft Items</NavLink></li>}
        <li><NavLink to='/myCraftList' >My Craft list</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            {
                loading &&
                <span className=" text-center loading loading-spinner loading-lg"></span>
            }
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className=" text-xl">Pottery House  </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user && <div className="flex justify-center items-center gap-2 lg:gap-4">
                        <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="w-7 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.
                                    photoURL} />
                            </div>
                        </div>
                        <button onClick={handleLogout} className=" btn btn-sm md:btn-md  ">Logout </button> </div>
                    ||
                    <div className="space-x-2 md:space-x-4 ">
                        <Link to="/login" className="btn btn-sm md:btn-md"> Login </Link>
                        <Link to="/register" className="btn btn-sm md:btn-md"> Register </Link>
                    </div>
                }

            </div>



        </div>
    );
};

export default Navbar;