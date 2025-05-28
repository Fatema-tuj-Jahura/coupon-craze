import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  // Google Sign-In
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome, ${user.displayName}!`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error("Google Sign-In Failed.");
      });
  };

  // Email & Password Registration
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value || "";

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Registration successful!");
            Swal.fire({
              icon: "success",
              title: "Account Created",
              text: `Welcome, ${name}!`,
            });
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.error("Profile Update Error:", error);
            toast.error("Failed to update profile.");
          });

        e.target.reset();
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-poppins px-4 bg-green-50">
      <div className="card bg-green-800 w-full max-w-sm md:max-w-lg shadow-2xl rounded-none p-6">
        <h2 className="text-2xl font-semibold text-center text-white">Register Your Account</h2>

        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Name</span>
            </label>
            <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo URL (Optional)</span>
            </label>
            <input name="photo" type="text" placeholder="Enter Photo URL" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="input input-bordered pr-10"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary bg-[#77DD77] hover:bg-green-600">Register</button>
          </div>
        </form>

        <p className="text-center font-semibold text-white">
          Already Have an Account?{" "}
          <Link to="/login" className="text-yellow-300 hover:text-yellow-600">
            Login to Your Account
          </Link>
        </p>

        <div className="mt-2 flex items-center justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary flex items-center justify-center gap-2 w-5/6 text-gray-800 bg-white hover:bg-gray-100 border border-gray-300"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
