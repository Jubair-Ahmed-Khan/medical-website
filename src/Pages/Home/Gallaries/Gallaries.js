import React, { useEffect, useState } from 'react';
import Gallary from '../Galary/Gallary';

const Gallaries = () => {
    const [gallaries, setGallaries] = useState([]);

    useEffect(() => {
        fetch('./galaries.json')
            .then(res => res.json())
            .then(data => setGallaries(data))
    }, [])
    return (
        <div>
            <div className="container">
                <h2 className="text-primary text-center pt-5">Gallary</h2>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 my-5">
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