import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialities from '../Specialities/Specialities';
// import Specialities from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Specialities></Specialities>
            <Services></Services>
        </div>
    );
};

export default Home;