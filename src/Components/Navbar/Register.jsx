import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    
const{createUser,setUser} = useContext(AuthContext)
// console.log(name)
    const handleRegister = e =>{
        e.preventDefault();
        const form  = e.target;
        const name =form.name.value;
        const email = form.email.value;
        const photo =form.photo.value;
        const password =form.password.value;
        
        console.log(name,email,password,photo)

        createUser(email,password)
        .then(result =>{
          console.log(result.user)
          // setUser(result.user)
          // sweet alert 
          Swal.fire({
            title: "Registered successfully!",
            text: "You clicked the button!",
            icon: "success"
          });



          // setUser(result.user)
          updateProfile(result.user,{
            displayName:name,photoURL:photo

          })
          .then(()=>{
            console.log("profile updated")
            setUser(result.user)
            console.log(result.user)
          })
          .catch(()=>[
            console.log("profile is not updated")
          ])

        })
        .catch(error=>{
          console.error(error) 
        })

        // update user
        


    }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className=" text-3xl lg:text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
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
          <button  className="btn btn-primary">Register</button>
          <p> if you have already account please <Link to="/login" className="text-blue-700 underline">Login</Link> </p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;