import React from 'react';
import Banner from '../Banner/Banner';
import Gallaries from '../Gallaries/Gallaries';
import Services from '../Services/Services';
import Specialities from '../Specialities/Specialities';

// container of home components 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Specialities></Specialities>
            <Services></Services>
            <Gallaries></Gallaries>
        </div>
    );
};

export default Home;