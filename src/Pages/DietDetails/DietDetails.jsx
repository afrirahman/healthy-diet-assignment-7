import React, { useEffect, useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';
import { MdStarRate } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { useParams } from 'react-router';

const DietDetails = () => {

    const {id} = useParams();
    const [box,setBox] = useState(null);
      const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
       fetch("/diet.json")
       .then((res)=>res.json())
       .then((data)=>{
        const selectedBox = data.find((item)=> item.id == id);
        setBox(selectedBox);
       }) 
    },[id]);

    const handleReviewSubmit = (e) => {

        e.preventDefault();

        if (!review.trim() || !rating) {
            return;
        }

        const newReview = {
            id: Date.now(),
            review: review,
            rating: Number(rating)
        };

        setReviews([...reviews, newReview]);

        setReview('');
        setRating('');
    };

    if (!box) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-red-500">
                    Diet Box Not Found
                </h2>

                <p className="mt-3 text-gray-500">
                    No diet box found for ID: {id}
                </p>
            </div>
        );
    }
    

    return (
        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-16 '>
          <div className='rounded-2xl shadow-lg overflow-hidden '>
            <img src={box.banner} alt={box.name} className='w-full h-80 md:h-96 object-cover' />
          </div>
          <div className='mt-8'>
          <h1 className="text-4xl font-bold text-[#37561e]">
                    {box.name}
                </h1>
                <p className='text-gray-500 mt-2'>
                    {box.category}
                </p>
                 <p className="text-gray-600 mt-5">
                    {box.description}
                </p>
                <div className='flex items-center gap-2 mt-5'>
            <span className="text-yellow-500">
                        <MdStarRate></MdStarRate>
                        
                      </span>
            
                      <span className="font-semibold">
                        {box.ratings}
                      </span>
                       <span className="text-gray-500">
                        ({box.number_of_reviews} reviews)
                    </span>
                </div>
                <div className='mt-5'>
             <span className="text-3xl font-bold text-[#324324]">
                        ${box.price}
                    </span>
                    <span className="text-gray-500 ml-1">
                        /{box.frequency}
                    </span>
                </div>

                <div className='mt-8'>
                    <h2 className='text-2xl font-bold text-[#37561e]'>What's Inside?</h2>

                    <ul className='mt-4 space-y-2'>
                        {
                            box.subscription_benefits?.map((benefit,index)=>(
                        <li key={index} className=' flex items-center gap-2 text-gray-600'>
                            <span> <TiTick></TiTick></span>
                            <span>{benefit}</span></li>
                          )
                        )
                        }
                    </ul>
                </div>
                 <div className="mt-12 border-t pt-10">

                  <h2 className="text-2xl md:text-3xl font-bold text-[#37561e]">
                            Leave a Review
                        </h2>

             <p className="text-gray-500 mt-2">
                    Share your experience with this subscription service.
                        </p>


                        {/* Review Form */}

                 <form
                onSubmit={handleReviewSubmit}
                 className="mt-6"
                        >

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                                {/* Review */}

                     <div className="md:col-span-2">

                    <label className="block font-semibold text-[#324324] mb-2">                            Review
                  </label>
                <textarea   value={review}
             onChange={(e) => setReview(e.target.value)}                    placeholder="Write your review..."                   className="w-full h-32 border border-gray-300 rounded-xl p-4 outline-none focus:border-[#86be5c] focus:ring-2 focus:ring-[#86be5c]/20 resize-none"                          required
                       />
                       </div>


              {/* Rating */}

                       <div>
             <label className="block font-semibold text-[#324324] mb-2">
                Rating
             </label>

                <div className="flex gap-2">
    {[1, 2, 3, 4, 5].map((star) => (
        <button
            type="button"
            key={star}
            onClick={() => setRating(star)}
            className={`text-3xl transition ${
                rating >= star
                    ? 'text-yellow-500'
                    : 'text-gray-300'
            }`}
        >
            <IoStar />
        </button>
    ))}
</div>

                                </div>

                            </div>

                        <div>
                        <button
                        type="submit"
                    className="mt-5 bg-[#86be5c] hover:bg-[#719f4d] text-white px-7 py-3 rounded-xl font-semibold transition"
                            >
                      Review
                         </button>     
                        </div>
                      

                        </form>
  
    <div className="mt-10">

                 <h2 className="text-xl font-bold text-[#37561e]">
                    Customer Reviews
                            </h2>


                     {reviews.length === 0 ? (

                   <p className="text-gray-500 mt-4">                     No reviews yet. Be the first to review this service!
                       </p>

                   ) : (

                  <div className="mt-5 space-y-4">                          {reviews.map((item) => (

                        <div                      key={item.id}
                       className="bg-[#f7faf4] border border-[#e5eddc] rounded-xl p-5"
                        >                        <div className="flex">                        {[...Array(item.rating)].map(
                        (_, index) => (

                                                        <MdStarRate
                                                            key={index}
                                                            className="text-yellow-500 text-xl"
                                                        />

                                                    )
                        )}                        </div>

                       {/* Review */}                      <p className="text-gray-600 mt-3">
                                                                    {item.review}
                     </p>
                      </div>

                         ))}

                     </div>

                     )}

                     </div>

                    </div>

                </div>


             <button className='mt-8 bg-[#86be5c] text-white px-6 py-3 rounded-lg font-semibold'>                    Subscribe Now</button>
          </div>
        
        
    );
};

export default DietDetails;