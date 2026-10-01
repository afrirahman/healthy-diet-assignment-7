import React, {use} from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const ForgetPassword = () => {

    const {resetPassword} = use(AuthContext);

    const location = useLocation();
    const navigate= useNavigate();

    const emailFromLogin = location.state?.email || "";

    const handleResetPassword = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;


        resetPassword(email)
        .then(() => {
            Swal.fire({
          title: "Password Reset Email Sent!",
          text: "Please check your Gmail inbox.",
          icon: "success",
          confirmButtonColor: "#86be5c",
          confirmButtonText: "Open Gmail",
        })
        .then(() => {
            window.location.href ="https://mail.google.com";
        }) ;
        })
        .catch((error) => {
             Swal.fire({
          title: "Failed!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#86be5c",
          confirmButtonText: "Try Again",
        });
        })
    }
    return (
       <div className="min-h-screen flex justify-center items-center bg-[#f7fbef] px-4">
      <div className="card bg-white w-full max-w-md shadow-xl">
        <div className="card-body">

          <h2 className="text-2xl font-bold text-center text-[#37561e] mb-5">
            Forgot Password
          </h2>

          <p className="text-center text-gray-500 mb-5">
            Enter your email to reset your password.
          </p>

          <form onSubmit={handleResetPassword}>

            <label className="label text-[#548031] font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              defaultValue={emailFromLogin}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

            <button
              type="submit"
              className="btn w-full bg-[#86be5c] text-[#324324] font-bold mt-5"
            >
              Reset Password
            </button>

          </form>

          <button
            onClick={() => navigate("/auth/login")}
            className="text-[#548031] font-semibold mt-4 hover:underline"
          >
            Back to Login
          </button>

        </div>
      </div>
    </div>
    );
};

export default ForgetPassword;