import React from 'react';
import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router';

const DietBoxCard = ({box}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
               
        <div className="hover-3d relative w-full h-56 md:h-60 lg:h-64">
            <figure className='w-full h-full'>
                 <img
          src={box.thumbnail}
          alt={box.name}
          className=" w-full h-full object-cover rounded-2xl "
        />   </figure> 
             
            
 <div></div>
 <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
       

        {box.is_popular && (
          <span className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
            Popular
          </span>
        )}

    
      </div>
{/* contents */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-[#324324]">
          {box.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {box.category}
        </p>

        <p className="text-gray-600 mt-3 line-clamp-2">
          {box.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-yellow-500">
            <MdStarRate></MdStarRate>
            
          </span>

          <span className="font-semibold">
            {box.ratings}
          </span>

          <span className="text-gray-500 text-sm">
            ({box.number_of_reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-5">

          <div>
            <span className="text-2xl font-bold text-[#324324]">
              ${box.price}
            </span>

            <span className="text-gray-500 text-sm">
              /{box.frequency}
            </span>
          </div>

          <Link
            to={`/diet-box/${box.id}`}
            className="bg-[#86be5c] text-white px-4 py-2 rounded-lg hover:bg-[#719f4d] transition"
          >
            View Details
          </Link>

        </div>

      </div>
            
        </div>
    );
};

export default DietBoxCard;