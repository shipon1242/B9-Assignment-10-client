import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import './navbar.css'

const Navbar = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext)
    console.log(user)
    const handleLogout = () => {
        setLoading(true)
        logOut()
            .then(() => {
                console.log("user logged out successfully")
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
    }


    const links = <>

        <li className="important"><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/allCraftItems' >All Craft Items</NavLink></li>
        {user && <li className=""><NavLink to='/addCraftItems' >Add Craft Items</NavLink></li>}
        {user && <li><NavLink to='/myCraftList' >My Craft list</NavLink></li>}

    </>

    return (
        <div>
        <div className="navbar bg-orange-300 md:p-6">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-white font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="flex ">
                    {/* <img className="w-8 rounded-full" src="/p-logo-2.png" alt="" /> */}
                    <a className="text-lg md:text-3xl abril text-amber-900">Pottery Studio  </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-black font-semibold ">
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
                        <button onClick={handleLogout} className=" btn btn-sm md:btn-md btn-error text-white md:text-lg  ">Logout </button> </div>
                    ||
                    <div className="space-x-2 md:space-x-4 ">
                        <Link to="/login" className="btn btn-sm md:btn-md btn-accent text-white md:text-lg"> Login </Link>
                        <Link to="/register" className="btn btn-sm md:btn-md btn-primary text-white md:text-lg "> Register </Link>
                    </div>
                }

            </div>

            

        </div>
        {
                loading &&
                <div className="  flex justify-center items-center "><span className=" w-12 text-secondary loading loading-spinner "></span></div>
            }
        </div>
    );
};

export default Navbar;