import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider_1Img from "../../src/assets/slider_1.jpg";
import slider_2Img from "../../src/assets/slider_2.jpg";
import slider_3Img from "../../src/assets/slider_3.png";


const DietSliders = () => {
    return (
         <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay:4000,  
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slider_1Img} alt="Healthy food" className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]  object-cover'/>

           
              <div className="absolute inset-0 flex items-center">

      <div className="ml-10 md:ml-20 max-w-xl text-white">
         
        <h2 className="text-3xl md:text-5xl font-bold">
          Start Your Day the Healthy Way
        </h2>

        <p className="mt-4 text-lg">
          Fresh and nutritious meals delivered right to your door.
        </p>

        <button className="btn mt-6 bg-[#86be5c] text-white border-none">
          Explore Diet Boxes
        </button>
      </div>
    </div>
            </div>
            </SwiperSlide>


        <SwiperSlide>
            <div className='relative'>
                 
                <img src={slider_2Img} alt="Diet meal" className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover" />
                 <div className="absolute inset-0 flex items-center">
      <div className="ml-10 md:ml-20 max-w-xl text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          Smart Meals for Your Goals
        </h2>

        <p className="mt-4 text-lg">
          Delicious and healthy meals made for your lifestyle.
        </p>

        <button className="btn mt-6 bg-[#86be5c] text-white border-none">
          View Our Boxes
        </button>
      </div>
    </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='relative'>

              <img src={slider_3Img} alt="" className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover' />
              

               <div className="absolute inset-0 flex items-center">
      <div className="ml-10 md:ml-20 max-w-xl ">
        

        <button className="btn mt-45 md:mt-80 lg:mt-[500px] px-8 bg-[#e32424] text-white border-none">
          Get Started
        </button>
      </div>
    </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
    </>
    );
};

export default DietSliders;