import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Layouts = () => {
    return (
        <div>
           <header>
             <Navbar></Navbar>
            
           </header>
           <main>
 
          <Outlet></Outlet>
       
           </main>

           <footer className="bg-[#37561e] text-white mt-16">
            <Footer ></Footer>
           </footer>
        </div>
    );
};

export default Layouts;