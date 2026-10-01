import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import PageBanner from '../PageBanner/PageBanner';

const Layouts = () => {
    return (
        <div>
           <header>
             <Navbar></Navbar>
            <PageBanner></PageBanner>
           </header>
           <main className="">
 
          <Outlet></Outlet>
       
           </main>

           <footer className="bg-[#37561e] text-white ">
            <Footer ></Footer>
           </footer>
        </div>
    );
};

export default Layouts;