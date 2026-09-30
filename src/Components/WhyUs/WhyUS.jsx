import React from 'react';
import { FaBoxOpen, FaBullseye, FaHeart, FaLeaf } from 'react-icons/fa';

const WhyUS = () => {

    const features =[
        {
      id: 1,
      icon: <FaLeaf />,
      title: "Healthy & Nutritious",
      description:
        "Enjoy carefully selected healthy and nutritious food options for your daily lifestyle.",
    },
    {
      id: 2,
      icon: <FaBullseye />,
      title: "Personalized Choices",
      description:
        "Choose a diet box that matches your food preferences and lifestyle.",
    },
    {
      id: 3,
      icon: <FaBoxOpen />,
      title: "Fresh & Convenient",
      description:
        "Get fresh and healthy food delivered conveniently to your doorstep.",
    },
    {
      id: 4,
      icon: <FaHeart />,
      title: "Affordable Plans",
      description:
        "Choose a flexible subscription plan that fits your needs and budget.",
    },
    ]

    return (
       <>
        <div className='w-11/12 mx-auto text-center mb-20 mt-16'>
           <h2 className='text-3xl md:text-4xl font-bold text-[#37561e]'>Why Choose Us?</h2>
           <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>  We make healthy eating simple, convenient, and enjoyable for
          everyone.</p>

          {/* Features implement */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
             {
            features.map((feature)=>(
                <div key={feature.id}
                     className="group bg-white rounded-2xl p-7 text-center shadow-md
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300
            border border-gray-100" >

                 <div
              className="w-16 h-16 mx-auto rounded-full
              bg-[#edf7e7] text-[#86be5c]
              flex items-center justify-center
              text-2xl
              group-hover:bg-[#86be5c]
              group-hover:text-white
              transition-all duration-300"
            >
              {feature.icon}
            </div>
            <h3 className='text-xl font-bold text-[#324324] mt-5'>{feature.title}</h3>
            <p className='text-gray-600 text-sm leading-6 mt-3'>{feature.description}</p>
                </div>
            ))
          }
         </div>
        </div>
       </>
    );
};

export default WhyUS;