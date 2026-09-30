import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLeaf, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
import footerImg from '../../assets/foodLogo.jpg'

const Footer = () => {
    return (
        <>
        <div className='w-11/12 mx-auto py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
                <div className='flex items-center gap-2 mb-4'>
        <div className='w-10 h-10  flex items-center justify-center'>
        {/* <FaLeaf className='text-white text-xl'></FaLeaf> */}
        <img src={footerImg} alt="Footer image" className='rounded-full' />
        </div>
        <h2 className='text-2xl font-bold'>DietBox</h2>
                </div>
                <p className='text-gray-300 leading-7 text-sm'> Discover healthy and nutritious diet boxes designed to make
              healthy eating simple, convenient, and enjoyable.</p>
              <div className='flex gap-3 mt-5'>
                 <a
                href="https://www.facebook.com/"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                hover:bg-[#86be5c] transition duration-300"
              >
                <FaFacebook></FaFacebook>
              </a>
               <a
                href="https://www.instagram.com/?hl=en"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                hover:bg-[#86be5c] transition duration-300"
              >
                <FaInstagram></FaInstagram>
              </a>
              <a
                href="https://x.com/?lang=en"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                hover:bg-[#86be5c] transition duration-300"
              >
                <FaTwitter></FaTwitter>
              </a>
              </div>
            </div>

            <div>
                <h3 className='text-xl font-semibold mb-5'>Quick Links</h3>
                <ul className='space-y-3 text-gray-300'>
                   <li>
                <Link
                  to="/"
                  className="hover:text-[#86be5c] transition"
                >
                  Home
                </Link>
              </li>  
                   <li>
                <Link
                  to="/diet_boxes"
                  className="hover:text-[#86be5c] transition"
                >
                  Diet Boxes
                </Link>
              </li>  
                   <li>
                <Link
                  to="/works"
                  className="hover:text-[#86be5c] transition"
                >
                  How it Works
                </Link>
              </li>  
                   <li>
                <Link
                  to="/why_us"
                  className="hover:text-[#86be5c] transition"
                >
                  Why us
                </Link>
              </li>  
                </ul>
            </div>

            <div>
                <h3 className='text-xl font-semibold mb-5'>
                    Our Services
                </h3>

                <ul>
                    <li className="hover:text-[#86be5c] transition cursor-pointer">
                Healthy Breakfast Box
              </li> 
                    <li className="hover:text-[#86be5c] transition cursor-pointer">
                Fresh Fruit Box
              </li> 
                    <li className="hover:text-[#86be5c] transition cursor-pointer">
                Protein Power Box
              </li> 
                    <li className="hover:text-[#86be5c] transition cursor-pointer">
                Organic Wellness Box
              </li> 
                    <li className="hover:text-[#86be5c] transition cursor-pointer">
                Healthy Snack Box
              </li> 
                    <li className="hover:text-[#86be5c] transition cursor-pointer">
                Balanced Diet Box
              </li> 
                </ul>
            </div>

            <div>
                <h3 className='text-xl font-semibold mb-5'>Contact Us</h3>
                
                <div className='space-y-4 text-gray-300 text-sm'>
                    <div className='flex items-start gap-3'>
                <FaMapMarkerAlt className='text-[#86be5c] mt-1'></FaMapMarkerAlt>
                <span>Dhaka,Bangladesh</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaPhone className='text-[#86be5c]'></FaPhone>
                        <span>+880 1263-567686</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaEnvelope className='text-[#86be5c]'></FaEnvelope>
                        <span>diet234@gmail.com</span>
                    </div>
                </div>
            </div>
            </div>
             </div>
            <div className="border-t border-white/10">
        <div className="w-11/12 mx-auto py-5 flex flex-col md:flex-row
        justify-between items-center gap-3 text-sm text-gray-400">
             <p>
            © {new Date().getFullYear()} DietBox. All rights reserved.
          </p>
          <div className='flex gap-5'>
             <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
            </div>
       
      </>  
    );
};

export default Footer;