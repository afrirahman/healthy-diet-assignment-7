import React, { useEffect, useState } from 'react';
import DietBoxCard from '../../Components/DietBoxCard/DietBoxCard';




const DietBoxes = () => {
    
    const [dietBoxes , setDietBoxes] = useState([]);

    useEffect(()=>{
        fetch("/diet.json")
        .then((res) => res.json())
        .then((data) => setDietBoxes(data));
    }, []);
    
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-[#37561e]'>Our Diet boxes</h1>
                <p className='mt-3 text-gray-600'>Choose a healthy subscription box that fits your lifestyle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            dietBoxes.map((box)=>(
                <DietBoxCard key={box.id} box={box}></DietBoxCard>
            ))
        }
            </div>
        </div>
    );
};

export default DietBoxes;