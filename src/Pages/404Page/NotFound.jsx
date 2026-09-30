import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const NotFound = () => {
    return (
        <>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div className='text-center'>
             <h1 className="text-8xl md:text-9xl font-bold text-[#86be5c]">
                    404
                </h1>
                <h2 className='text-3xl md:text-4xl font-bold text-[#37561e] mt-4'>
            Page Not Found
                </h2>
                <p className='text-gray-500 mt-4 max-w-md mx-auto'>
                    Sorry, the page you are looking for doesn't exist or may have been moved.
                </p>
              <Link to='/' className='inline-block mt-7 bg-[#86be5c] hover:bg-[#719f4d] text-white px-7 py-3 rounded-xl font-semibold transition duration-300'>
                Back to Home</Link>
                 
               
            </div>  
        </div>
        <div className="bg-[#37561e] text-white mt-16">
            <Footer></Footer>
        </div>
        </>
        
    );
};

export default NotFound;