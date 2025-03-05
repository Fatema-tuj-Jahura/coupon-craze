import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { userLogin, setUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : '/');
        toast.success('Login successful!');
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error);
        toast.error('Failed to login with Google');
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : '/');
        swal.fire({
          title: 'Success!',
          text: 'Login successful!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
      })
      .catch(() => {
        swal.fire({
          title: 'Error!',
          text: 'Invalid email or password!',
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <div className='min-h-screen flex justify-center items-center fonr-poppins'>
      <div className='card bg-green-800 w-full max-w-sm md:max-w-lg shrink-0 shadow-2xl rounded-none p-10'>
        <h2 className='text-2xl font-semibold text-center text-white'>Login Your Account</h2>
        <form className='card-body' onSubmit={handleLogin}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              className='input input-bordered'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              className='input input-bordered'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover text-white'>Forgot password?</a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary bg-[#77DD77] hover:bg-green-600'>Login</button>
          </div>
        </form>
        <p className='text-center font font-semibold text-white'>
          Don't Have an Account Yet?{' '}
          <Link to='/register' className='text-yellow-300 hover:text-yellow-600'>
            Register
          </Link>
        </p>
        <div className='mt-4 flex items-center justify-center'>
          <button
            onClick={handleGoogleSignIn}
            className='btn btn-primary flex items-center justify-center gap-2 w-5/6 text-gray-800 bg-white hover:bg-gray-100 border border-gray-300'
          >
            <FcGoogle size={20} />Continue with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

