import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import DietSliders from '../DietSliders/DietSliders';
import DietBoxes from '../Pages/DietBoxes/DietBoxes';

const Layouts = () => {
    return (
        <div>
           <header>
             <Navbar></Navbar>
            <DietSliders></DietSliders>
           </header>
           <main>
            <section>
                <DietBoxes></DietBoxes>
            </section>
           </main>
        </div>
    );
};

export default Layouts;