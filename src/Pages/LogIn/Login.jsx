import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const {login,setUser,loginWithGoogle} = use(AuthContext);

     const [showPass, setShowPass]= useState(false);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const location = useLocation();


    const handleGoogleLogin =()=>{
      loginWithGoogle()
      .then((result)=>{
        const user = result.user;
        setUser(user);
        
            Swal.fire({
        title: "Login Successful!",
        text: `Welcome ${user.displayName || ""}`,
        icon: "success",
        confirmButtonColor: "#86be5c",
        confirmButtonText: "Continue"
      }).then(() => {
        navigate(location.state?.from?.pathname || "/");
      });
    })
    .catch((error) => {
      console.log(error);

      Swal.fire({
        title: "Google Login Failed!",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#86be5c",
        confirmButtonText: "Try Again"
      });
    });
      

    };

      const handleLogIn = (e) =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        
        login(email,password)
        .then((result)=>{
          const user = result.user;
          setUser(user);

           Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome back',
        icon: 'success',
        confirmButtonColor: '#86be5c',
        confirmButtonText: 'Continue'
      }).then(()=>{
        navigate(location.state?.from?.pathname || "/");
      });

        })
        .catch((error)=>{
          console.log(error);
          Swal.fire({
        title: 'Login Failed!',
        text: 'Invalid email or password.',
        icon: 'error',
        confirmButtonColor: '#86be5c',
        confirmButtonText: 'Try Again'
      });
        })
        
      }

    return (
        <div className='flex justify-center min-h-screen items-center text-[#324324]'>
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className='text-center font-bold text-[#548031] pt-4 text-xl'>Login here</h1>
      <div className="card-body">
        <form onSubmit={handleLogIn} action="">
           <fieldset className="fieldset">

            {/* email */}
          <label className="label text-[#548031]">Email</label>
          <input 
          name='email' 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input w-full" placeholder="Email" />

          {/* password */}
          <label className="label text-[#548031]">Password</label>
          <div className='relative'>
          <input name='password' type={showPass ? "text": "password"}  className="input w-full" placeholder="Password" />
           <button type="button" onClick={()=>setShowPass(!showPass)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </button>
          </div>
          
          <div>
            <button type="button" onClick={()=>
              navigate("/auth/forget_password",
                {state:{email:email}}
              ) }
              className="link link-hover text-[#548031]"
           > Forgot password?</button>
          </div>

          <button type='submit' className="btn bg-[#86be5c] mt-4 text-primary">Login</button>
        </fieldset> 
        </form>

         <div className="divider">OR</div>
         <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
 <p className="text-center text-sm mt-3">
               Don't have an account?{" "}
                <Link
                to="/auth/register"
                className="text-[#548031] font-semibold hover:underline"
                        > 
                         Register
                        </Link>
                    </p>
      </div>
    </div>
  </div>

    );
};

export default Login;