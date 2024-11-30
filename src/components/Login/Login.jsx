
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center fonr-poppins'>
            <div className="card bg-green-800 w-full max-w-sm md:max-w-lg  shrink-0 shadow-2xl rounded-none p-10">
            <h2 className='text-2xl font-semibold text-center text-white'>Login Your Acount</h2>  
             <form className="card-body">
               <div className="form-control">
                <label className="label">
                 <span className="label-text text-white">Email</span>
                </label>
               <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#77DD77] hover:bg-green-600">Login</button>
        </div>
      </form>
     <p className="text-center font font-semibold text-white">
        Don't Have an Account Yet?
        <Link to="/register" className="text-yellow-300 hover:text-yellow-600">
                        Register
        </Link>
     </p>
     <div className="mt-4 flex items-center justify-center">
      <button
        className="btn btn-primary flex items-center justify-center gap-2 w-5/6 text-gray-800 bg-white hover:bg-gray-100 border border-gray-300"
      ><FcGoogle size={20} />Continue with Google</button>
    </div>

    </div>
        </div>
    );
};

export default Login;