import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



const Register = () => {
  const {createUser,setUser} = use(AuthContext);

      const handleRegister = (e) =>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        if(password.length < 6){
          Swal.fire({
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
    return;
        }
         if(!/[A-Z]/.test(password)){
          Swal.fire({
        title: 'Invalid Password',
        text: 'Password must contain at least one uppercase letter.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
    return; 
         }

         if(!/[a-z]/.test(password)){
          Swal.fire({
        title: 'Invalid Password',
        text: 'Password must contain at least one lowercase letter.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
    return;
         }
       
        createUser(email,password)
        .then(result=>{
          const user =result.user;
          setUser(user);
          Swal.fire({
            title: 'Welcome!',
            text: 'Registration successful.',
            icon: 'success',
            confirmButtonText: 'Continue'
        });
        })
         .catch((error) => {
     Swal.fire({
        title: 'Registration Failed',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try Again'
    });
  });
      }


    return (
              <div className='flex justify-center min-h-screen items-center text-[#324324]'>
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className='text-center font-bold text-[#548031] pt-4 text-xl'>Register here</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} action="">
           <fieldset className="fieldset">

            {/* Name */}
          <label className="label text-[#548031]">Name</label>
          <input type="text" name='name' className="input" placeholder="Write your name" 
          required/>

          {/* photo url */}
          <label className="label text-[#548031]">Photo URL</label>
          <input type="text" name='photoURL' className="input" placeholder="Photo url"
          required />

          {/* email */}
          <label className="label text-[#548031]">Email</label>
          <input type="email" name='email' className="input" placeholder="Write your Email" 
          required/>

          {/* password */}
          <label className="label text-[#548031]">Password</label>
          <input type="password" className="input" name='password' placeholder="Write your Password" 
          required/>

          <button type='submit' className="btn bg-[#86be5c] mt-4 text-primary">Register</button>
        </fieldset> 
        </form>

         <div className="divider">OR</div>
         <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Continue with Google
</button>
 <p className="text-center text-sm mt-3">
               Already have an account?{" "}
                <Link
                to="/auth/login"
                className="text-[#548031] font-semibold hover:underline"
                        > 
                         Login
                        </Link>
                    </p>
      </div>
    </div>
  </div>
    );
};

export default Register;