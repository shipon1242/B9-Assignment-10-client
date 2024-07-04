import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser } = useContext(AuthContext)
  // console.log(name)
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log(name, email, password, photo)
    // password validation

    if (password.length < 6) {
      return toast.error("password must be at least 6  character ")
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return toast.error("password must be at least one digit and one uppercase and lowercase letter")
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        // setUser(result.user)
        // sweet alert 
        // Swal.fire({
        //   title: "Registered successfully!",
        //   text: "You clicked the button!",
        //   icon: "success"
        // });



        // setUser(result.user)
        updateProfile(result.user, {
          displayName: name, photoURL: photo

        })
          .then(() => {
            console.log("profile updated")
            setUser(result.user)
            console.log(result.user)
            Swal.fire({
              title: "Registered successfully!",
              text: "You clicked the button!",
              icon: "success"
            });
            navigate("/")
          })
          .catch(() => [
            // console.log("profile is not updated")

          ])

      })
      .catch(error => {
        console.error(error)
      })

    // update user



  }


  return (
    <div className="hero min-h-screen bg-cyan-200 ">

<Helmet>
                <meta charSet="utf-8" />
                <title>register | pottery studio</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>


      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className=" text-3xl lg:text-5xl font-bold text-violet-600">Register now!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-200">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-amber-900">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-amber-900">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-amber-900">Photo</span>
              </label>
              <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-amber-900">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <Toaster />
              <p className="text-amber-900"> if you have already account please <Link to="/login" className="text-blue-700 underline">Login</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;