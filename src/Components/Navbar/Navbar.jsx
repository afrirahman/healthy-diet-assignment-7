import React, { use } from "react";
import Logo from "../../assets/foodLogo.jpg";
import { Link, NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { MdLiveHelp, MdOutlineLabelImportant } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
  const {user , logout} = use(AuthContext);

  const handleLogOut = () =>{
    
    logout()
    .then(()=>{
      Swal.fire({
            title: 'Logged Out!',
            text: 'You have been logged out successfully.',
            icon: 'success',
            confirmButtonColor: '#86be5c'
          });
    })
    .catch((error)=>{
       Swal.fire({
              title: 'Logout Failed',
              text: error.message,
              icon: 'error',
              confirmButtonText: 'Try Again'
          });
    })
  }

    return (
       <div className="navbar bg-[#86be5c]  shadow-sm relative z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-orange-100 btn-sm lg:hidden ">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow font-bold text-[#5b7b41]">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/diet_boxes">Diet Boxes</NavLink>
          
        </li>
        <li><NavLink to="/works">How It Works</NavLink></li>
        <li><NavLink to="/why_us">Why Us</NavLink></li>
        
      </ul>
      
    </div >

       <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 ml-1 text-xl sm:text-2xl lg:text-3xl ">
         <img className="w-8  sm:w-9 lg:w-11 rounded-2xl" src={Logo}  alt="diet logo" />
        <p className="text-[#324324] font-normal   ">Diet<span className="font-semibold text-[26px]">Corner</span></p>
       </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    
          <div className="flex gap-6 font-medium text-[#324324] text-xl">
          
           
             <NavLink to="/" className="flex items-center gap-1">
              <FaHome></FaHome>
             <span>Home</span></NavLink>
           
          <NavLink to="/diet_boxes" className="flex items-center gap-1">
          <GiMeal></GiMeal>
         <span> Diet Boxes</span></NavLink>

          <NavLink to="/works" className="flex items-center gap-1">
        <MdOutlineLabelImportant />
          <span>How It Works</span></NavLink>

          <NavLink to="/why_us" className="flex items-center gap-1">
          <MdLiveHelp></MdLiveHelp>
          <span>Why Us</span></NavLink>
          </div>
      
  </div>
  <div className="navbar-end">
    {user ? (<button onClick={handleLogOut} className="btn bg-orange-100 font-bold sm:w-25 lg:w-30 text-[#324324] sm:text-lg ">Logout</button>) :
     (<Link to="/auth/login" className="btn bg-orange-100 font-bold sm:w-25 lg:w-30 text-[#324324] sm:text-lg ">Login</Link>
  )}
  </div>
</div>
    );
};

export default Navbar;