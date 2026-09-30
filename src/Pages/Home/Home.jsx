import React from 'react';

import DietBoxes from '../DietBoxes/DietBoxes';
import DietSliders from '../../DietSliders/DietSliders';
import Works from '../../Components/Works/Works';
import WhyUS from '../../Components/WhyUs/WhyUS';

const Home = () => {
    return (
        <>
        <DietSliders></DietSliders>

        <section className='w-11/12 mx-auto mb-20' >
        <DietBoxes></DietBoxes>
        </section>
        <section className='w-11/12 mx-auto mb-20'>
        <Works></Works>
        </section>
        <section className='w-11/12 mx-auto'>
        <WhyUS></WhyUS>
        </section>
        </>
    );
};

export default Home;