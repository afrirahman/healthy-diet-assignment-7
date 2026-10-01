import React, { useEffect, useState } from 'react';
import DietBoxCard from '../../Components/DietBoxCard/DietBoxCard';




const DietBoxes = () => {
    
    const [dietBoxes , setDietBoxes] = useState([]);
     const [showAll, setShowAll] = useState(false);


    useEffect(()=>{
        fetch("/diet.json")
        .then((res) => res.json())
        .then((data) => setDietBoxes(data));
    }, []);

    const displayedBoxes = showAll ? dietBoxes : dietBoxes.slice(0,3) ;
    
    return (
        <div className='w-11/12 mx-auto mt-20 mb-16'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-[#37561e]'>Our Diet boxes</h1>
                <p className='mt-3 text-gray-600'>Choose a healthy subscription box that fits your lifestyle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            displayedBoxes.map((box)=>(
                <DietBoxCard key={box.id} box={box}></DietBoxCard>
            ))
        }
            </div>
             {dietBoxes.length > 3 && (
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-[#37561e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#86be5c] transition duration-300"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}

        </div>
       
    );
};

export default DietBoxes;