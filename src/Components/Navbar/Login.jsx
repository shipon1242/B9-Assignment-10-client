import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link,  useNavigate } from "react-router-dom";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";



const Login = () => {
    const { loginUser,googleLogin,facebookLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                
                navigate("/")

            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGoogle = e =>{
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        googleLogin(provider)
        .then(result =>{
            console.log(result.user)
            navigate("/")

        })
        .catch(error =>{
            console.error(error)
        })

    }
    const handleFacebook = e =>{
        e.preventDefault()
        const provider = new FacebookAuthProvider()
        facebookLogin(provider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
     

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-base md:text-lg">Login</button>

                        </div>
                        
                        <p className="text-center mt-2 -mb-2 divider   "> OR </p>
                        <button onClick={handleGoogle}>
                        <div className=" w-full border-2 my-2 md:my-4 flex justify-center items-center gap-3 text-center px-4 rounded-lg  " >
                            <img className="w-5 md:w-7 ml-3  my-3 " src="/search_281764.png" alt="" />
                            <p className="text-base md:text-lg "> Continue with Google</p>
                        </div>
                        </button>
                        <button className=" -mt-2 md:-mt-4" onClick={handleFacebook}>
                        <div className=" w-full border-2 my-2 md:my-4 flex justify-center items-center gap-3 text-center px-4 rounded-lg  " >
                            <img className="w-5 md:w-7 ml-3  my-3 " src="/facebook-logo.png" alt="" />
                            <p className="text-base md:text-lg "> Login with Facebook</p>
                        </div>
                        </button>
                        <p> Are you New ? please <Link to="/register" className="text-blue-600 underline">Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;