import React, { useEffect, useState } from 'react';
import Gallary from '../Galary/Gallary';

const Gallaries = () => {
    // set gallary 
    const [gallaries, setGallaries] = useState([]);

    // load gallary images 
    useEffect(() => {
        fetch('./galaries.json')
            .then(res => res.json())
            .then(data => setGallaries(data))
    }, [])

    return (
        <div>
            {/* gallary container  */}
            <div className="container">

                {/* gallary heading  */}
                <h2 className="text-primary text-center pt-5">Gallary</h2>

                {/* display gallary images  */}
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 my-5">
                    {
                        gallaries.map(gallary => <Gallary
                            key={gallary.id}
                            gallary={gallary}
                        ></Gallary>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Gallaries;