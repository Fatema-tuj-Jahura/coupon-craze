import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center fonr-poppins'>
        <div className="card bg-green-800 w-full max-w-sm md:max-w-lg shrink-0 shadow-2xl rounded-none p-6">
        <h2 className='text-2xl font-semibold text-center text-white'>Register Your Acount</h2>  
         <form className="card-body">
           <div className="form-control">
            <label className="label">
             <span className="label-text text-white">Your Name</span>
            </label>
           <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
           <div className="form-control">
            <label className="label">
             <span className="label-text text-white">Photo URL</span>
            </label>
           <input type="email" placeholder="Enter Your Paasword" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
             <span className="label-text text-white">Email</span>
            </label>
           <input type="email" placeholder="Enter Your Address" className="input input-bordered" required />
        </div>
       <div className="form-control">
        <label className="label">
        <span className="label-text text-white">Password</span>
         </label>
      <input type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary bg-[#77DD77] hover:bg-green-600">Register</button>
    </div>
     </form>
     <p className="text-center font font-semibold text-white">
        Already Have an Account?
        <Link to="/login" className="text-yellow-300 hover:text-yellow-600">
                        Login to Your Account
        </Link>
     </p>
     <div className="mt-2 flex items-center justify-center">
      <button
        className="btn btn-primary flex items-center justify-center gap-2 w-5/6 text-gray-800 bg-white hover:bg-gray-100 border border-gray-300"
      ><FcGoogle size={20} />Continue with Google</button>
     </div>
     </div>
    </div>
    );
};

export default Register;