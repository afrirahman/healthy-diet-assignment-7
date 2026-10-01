import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import titleImg from '../../src/assets/title.png';

const PageBanner = () => {

        const location = useLocation();
        const {id} = useParams();

        const [boxName, setBoxName]= useState("");

        useEffect(() => {
    if (id) {
      fetch("/diet.json")
        .then((res) => res.json())
        .then((data) => {
          const box = data.find((item) => String(item.id) === String(id));

          if (box) {
            setBoxName(box.name);
          }
        });
    }
  }, [id]);

        if(location.pathname === "/"){
            return null;        }

     const getPageTitle = {
    "/diet_boxes": "Diet Boxes",
    "/works": "How It Works",
    "/why_us": "Why Us",
    "/profile": "My Profile",
    "/auth/login": "Login",
    "/auth/register": "Register"  
        };

        let breadcrumb ="";

        if(location.pathname.startsWith("/diet_boxes/")){
            breadcrumb =(
                <>
                <span className="text-gray-400">Home</span>
                <span className='mx-2'>&gt;</span>
                <span>Diet Boxes</span>
                <span className='mx-2'>&gt;</span>
                <span>{boxName || "details"}</span>
                </>
            )
        }
        else{
            breadcrumb=(<>
            <span className="text-gray-400">Home</span>
            <span className='mx-2'>&gt;</span>
            <span>{getPageTitle[location.pathname] || "Diet Corner"}</span>
            </>)
        }

       

    return (
        <div className="relative w-full h-48 md:h-60 overflow-hidden">

            <img src={titleImg} alt="Diet Corner"  className="w-full h-full object-cover"/>
            
            <div className="absolute inset-0 bg-black/40">
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl md:text-3xl font-normal">
                   {breadcrumb}
                   </h1>
            </div>
        </div>
    );
};

export default PageBanner;