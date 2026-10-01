import React from 'react';

            
            
const workData =[
  {
    id: 1,
    title: "Explore",
    description: "Explore our healthy diet boxes and discover different meal options.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Choose",
    description: "Choose a diet box that matches your food preferences and goals.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Subscribe",
    description: "Select your preferred plan and subscribe to your healthy food box.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Enjoy",
    description: "Enjoy nutritious and delicious meals delivered to your doorstep.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
  },
];

const Works = () => {
    return (

      <>
        {/* heading */}
        <div className='text-center mb-12 mt-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#37561e]'>How it Works</h2>
             <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Getting your healthy diet box is simple. Just follow these four
          easy steps.
        </p>
        </div>

        {/* work card */}
        <div className='w-11/12 mx-auto mb-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
            workData.map((data)=>(
                <div key={data.id}
                 className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
                    <div className='h-48 overflow-hidden'>
                        <img src={data.image} alt={data.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                    </div>

                    {/* content part */}
                    <div className='p-5 text-center'>
                 <div className="w-10 h-10 mx-auto -mt-10 mb-4 rounded-full bg-[#86be5c] text-white flex items-center justify-center font-bold border-4 border-white relative">
                {data.id}
              </div>

                <h3 className='text-xl font-bold text-[#324324]'>{data.title}</h3>
              <p className='text-gray-600 text-sm mt-2 leading-6'>{data.description}</p>
                    </div>
                </div>
            ))
        }
        </div>
      </>
    );
};

export default Works;